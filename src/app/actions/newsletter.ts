"use server";

import { z } from "zod";

const subscribeSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
    const email = formData.get("email");

    const validatedFields = subscribeSchema.safeParse({
        email,
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid email.",
        };
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
        console.error("Missing MailerLite configuration");
        return {
            success: false,
            message: "Configuration error. Please try again later.",
        };
    }

    try {
        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
                Accept: "application/json",
            },
            body: JSON.stringify({
                email: validatedFields.data.email,
                groups: [groupId],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("MailerLite API Error:", errorData);
            // Check for specific error codes if needed, e.g. already subscribed
            if (response.status === 422 && errorData.errors?.email) {
                return { success: false, message: "This email is already subscribed." };
            }

            return {
                success: false,
                message: "Failed to subscribe. Please try again.",
            };
        }

        return {
            success: true,
            message: "Successfully subscribed!",
        };

    } catch (error) {
        console.error("Subscription error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
