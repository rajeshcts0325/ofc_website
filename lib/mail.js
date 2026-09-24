import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async ({ to, resetUrl }) => {
    const fromEmail =
        process.env.RESEND_FROM_EMAIL || "OFC Tech <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [to],
        subject: "Reset your password",
        html: `
            <div style="font-family: Arial, sans-serif; background:#f8fafc; padding:30px;">
                <div style="max-width:560px; margin:auto; background:#ffffff; border-radius:14px; padding:30px; border:1px solid #e5e7eb;">
                    <h2 style="color:#06443f; margin:0 0 12px;">Reset your password</h2>

                    <p style="color:#333; font-size:14px; line-height:24px;">
                        We received a request to reset your password. Click the button below to create a new password.
                    </p>

                    <a href="${resetUrl}"
                       style="display:inline-block; margin:20px 0; background:#c7c72b; color:#111; text-decoration:none; padding:13px 22px; border-radius:10px; font-weight:700;">
                        Reset Password
                    </a>

                    <p style="color:#666; font-size:13px; line-height:22px;">
                        This link will expire in 15 minutes. If you did not request this, you can safely ignore this email.
                    </p>

                    <p style="color:#999; font-size:12px; margin-top:25px;">
                        OFC Tech India
                    </p>
                </div>
            </div>
        `,
    });

    if (error) {
        console.error("RESEND EMAIL ERROR:", error);

        const err = new Error("Failed to send password reset email");
        err.statusCode = 500;
        throw err;
    }

    return data;
};