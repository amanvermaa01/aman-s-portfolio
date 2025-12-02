"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react"; // Added Loader icon
import { useState, FormEvent } from "react";

export default function ContactPage() {
    // 1. State for managing form submission status
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. Handle Form Submission
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(form);

        // Append your Web3Forms Access Key here
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            setResult("Error: Access Key not found. Please check your .env file.");
            setIsSubmitting(false);
            return;
        }

        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully!");
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Form Submission Error", error);
            setResult(""); // Don't show generic error message
        } finally {
            setIsSubmitting(false);
            form.reset(); // Always reset the form
            // Clear success message after 5 seconds
            setTimeout(() => setResult(""), 5000);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Get in Touch</h1>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl">
                        Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
                    </p>

                    {/* Updated Form Tag with onSubmit */}
                    <form onSubmit={onSubmit} className="space-y-8 max-w-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-white/60">Name</label>
                                <input
                                    type="text"
                                    name="name" // Important: Name attribute needed for formData
                                    id="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/60">Email</label>
                                <input
                                    type="email"
                                    name="email" // Important: Name attribute needed
                                    id="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-white/60">Message</label>
                            <textarea
                                id="message"
                                name="message" // Important: Name attribute needed
                                required
                                rows={6}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {/* Status Message Display */}
                        {result && (
                            <p className={`text-sm ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                                {result}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#a3e635] text-black font-semibold px-8 py-4 rounded-lg hover:bg-[#88cc29] transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}