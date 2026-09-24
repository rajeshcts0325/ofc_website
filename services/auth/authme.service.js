import { prisma } from "@/lib/prisma";
import { authMiddleware } from "@/middleware/auth.middleware";

export const getMeService = async (req) => {
  try {
    const authUser = await authMiddleware(req);

    if (!authUser) {
      const error = new Error("Unauthorized");
      error.statusCode = 401;
      throw error;
    }

    console.log("SEARCHING USER:", authUser.id);

    const user = await prisma.user.findUnique({
      where: {
        id: authUser.id,
      },

      select: {
        id: true,
        email: true,
        role: true,
        status: true,
        onboardingStatus: true,
        emailVerifiedAt: true,
        createdAt: true,

        profile: {
          select: {
            id: true,
            fullName: true,
            phone: true,
          },
        },

        company: {
          select: {
            id: true,
            name: true,
            businessType: true,
            gstNumber: true,
            panNumber: true,
            registrationNumber: true,
            category: true,
            experience: true,
            description: true,
            website: true,
            businessEmail: true,
            businessPhone: true,
            address: true,
            stateId: true,
            cityId: true,
            onboardingCompleted: true,

            state: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },

            city: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },

            kycApplication: {
              select: {
                id: true,
                status: true,
                submittedAt: true,
                verifiedAt: true,
                rejectedAt: true,
                rejectionReason: true,
                correctionRequired: true,
                submittedVersion: true,
              },
            },
          },
        },

        subscriptions: {
          where: {
            status: "ACTIVE",
          },

          select: {
            id: true,
            amount: true,
            billingCycle: true,
            status: true,
            razorpaySubscriptionId: true,
            startDate: true,
            endDate: true,

            plan: {
              select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                price: true,
                billingCycle: true,
              },
            },
          },

          orderBy: {
            createdAt: "desc",
          },

          take: 1,
        },
      },
    });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    /*
     * ADMIN users can directly access dashboard.
     */
    if (user.role === "ADMIN") {
      return {
        user,
        accessStatus: {
          profileCompleted: true,
          hasActiveSubscription: true,
          verificationStatus: "VERIFIED",
          nextStep: "DASHBOARD_ALLOWED",
          dashboardAccess: true,
        },
      };
    }

    /*
     * PROFILE
     */
    const profileCompleted = !!user.profile;

    /*
     * COMPANY
     */
    const companyCompleted =
      !!user.company &&
      user.company.onboardingCompleted === true;

    /*
     * SUBSCRIPTION
     */
    const hasActiveSubscription =
      user.subscriptions.length > 0;

    /*
     * DEFAULT
     */
    let nextStep = "DASHBOARD_ALLOWED";
    let dashboardAccess = true;

    /*
     * PROFILE CHECK
     */
    if (!profileCompleted || !companyCompleted) {
      nextStep = "COMPLETE_PROFILE";
      dashboardAccess = false;
    }

    /*
     * SUBSCRIPTION CHECK
     */
    else if (!hasActiveSubscription) {
      nextStep = "PAY_MEMBERSHIP";
      dashboardAccess = false;
    }

    /*
     * EVERYTHING COMPLETE
     */
    else {
      nextStep = "DASHBOARD_ALLOWED";
      dashboardAccess = true;
    }

    const accessStatus = {
      profileCompleted:
        profileCompleted && companyCompleted,

      hasActiveSubscription,

      verificationStatus: user.onboardingStatus,

      nextStep,

      dashboardAccess,
    };

    console.log("GET ME SUCCESS:", {
      userId: user.id,
      role: user.role,
      onboardingStatus: user.onboardingStatus,
      profileCompleted,
      companyCompleted,
      hasActiveSubscription,
      nextStep,
      dashboardAccess,
    });

    return {
      user,
      accessStatus,
    };

  } catch (error) {
    console.error("GET ME SERVICE ERROR:", error);

    if (error.statusCode) {
      throw error;
    }

    const serverError = new Error(
      error.message || "Failed to get current user"
    );

    serverError.statusCode = 500;

    throw serverError;
  }
};