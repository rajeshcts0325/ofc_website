const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const plans = [
    {
        name: "Basic Yearly",
        slug: "basic-yearly",
        description: "Essential supplier features, billed yearly. Save about 15%.",
        price: 499,
        billingCycle: "YEARLY",
    },
    {
        name: "Premium Yearly",
        slug: "premium-yearly",
        description: "All features including advanced tools, billed yearly.",
        price: 999,
        billingCycle: "YEARLY",
    },
];

async function main() {
    for (const plan of plans) {
        await prisma.subscriptionPlan.upsert({
            where: { slug: plan.slug },
            update: plan,
            create: plan,
        });
    }
    console.log("Subscription plans seeded");
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(() => prisma.$disconnect());