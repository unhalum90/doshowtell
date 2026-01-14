"use client";

import { useFormStatus } from "react-dom";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import { useEffect, useRef, useActionState } from "react";

const initialState = {
    success: false,
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="btn btn-primary" disabled={pending}>
            {pending ? "Subscribing..." : "Notify Me"}
        </button>
    );
}

export default function NewsletterForm() {
    const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success]);

    return (
        <div className="newsletter-form-container">
            {state.message && (
                <div className={`mb-4 p-3 rounded ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {state.message}
                </div>
            )}
            <form action={formAction} ref={formRef} className="newsletter-form">
                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="newsletter-input"
                    required
                />
                <SubmitButton />
            </form>
        </div>
    );
}
