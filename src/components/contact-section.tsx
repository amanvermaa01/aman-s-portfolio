"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Github, Code2 } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="relative w-full bg-black text-white py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto relative">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-semibold mb-12 tracking-tighter uppercase"
                >
                    Let's <span className="text-[#a3e635] font-bold">Connect</span>
                </motion.h2>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/20 mb-16 relative">
                    {/* Floating Button positioned on the line */}
                    <div className="absolute right-0 md:right-20 top-1/2 -translate-y-1/2 z-10">
                        <Link href="/contact" className="block">
                            <motion.div
                                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white text-black flex items-center justify-center overflow-hidden group cursor-pointer"
                                whileHover="hover"
                            >
                                {/* Green Fill Animation */}
                                <motion.div
                                    className="absolute inset-0 bg-[#a3e635] rounded-full"
                                    initial={{ y: "100%" }}
                                    variants={{
                                        hover: { y: 0 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />

                                {/* Text */}
                                <span className="relative z-10 text-lg font-medium group-hover:text-black transition-colors duration-300">
                                    Contact
                                </span>
                            </motion.div>
                        </Link>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Left Column: Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-xl text-white/70 leading-relaxed max-w-md">
                            I build scalable, intelligent web systems for innovative teams worldwide.
                        </p>
                        <p className="text-xl text-white/70 leading-relaxed max-w-md mt-8">
                            Get in touch to discuss how my expertise in Full Stack Development and Agentic AI can help solve your complex engineering challenges.
                        </p>
                    </motion.div>

                    {/* Right Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <a href="mailto:akverma1812@gmail.com" className="text-xl hover:text-[#a3e635] transition-colors">
                                akverma1426@gmail.com
                            </a>
                        </div>
                        <div className="text-xl text-white/70 leading-relaxed">
                            <p>Lucknow, India</p>
                            <p>+91 6393251819</p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Links (Optional, matching image bottom) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-32 flex flex-wrap gap-8 text-white/50 text-sm"
                >
                    <a href="https://www.linkedin.com/in/amanvermaa18/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
                    <a href="https://x.com/amann1808" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
                    <a href="https://github.com/amanvermaa01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                    <a href="https://leetcode.com/u/amanverma12/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Code2 className="w-6 h-6" /></a>

                </motion.div>

            </div>
        </section>
    );
}
