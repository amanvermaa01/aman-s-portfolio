"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("./ui/marquee"), { ssr: false });

import { projects } from "../lib/projects";

export default function WorkSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const activeProject = projects[currentIndex];

    return (
        <motion.main
            className="bg-black text-white font-sans relative"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "top", contentVisibility: "auto" }}
        >
            {/* Marquee Section */}
            <section className="relative w-full bg-black overflow-hidden flex flex-col justify-center py-6 z-10 border-b border-white/10">
                <Marquee />
            </section>

            {/* Desktop Carousel Layout */}
            <section id="work" className="relative w-full hidden md:flex min-h-screen flex-col justify-center bg-black py-20" style={{ marginBottom: "inherit" }}>
                <div className="flex w-full max-w-[1200px] mx-auto px-6 items-center h-full gap-12 relative">

                    {/* Navigation Button - Top Left of the content area */}
                    <button
                        onClick={handleNext}
                        className="absolute -top-12 left-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors group z-20"
                    >
                        <span className="uppercase tracking-wider text-sm font-medium">Next Project</span>
                        <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>

                    {/* Left Column: Text */}
                    <div className="w-5/12 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3 text-white/50 text-lg font-medium tracking-wide">
                                    <span>{activeProject.year}</span>
                                    <div className="h-[1px] w-8 bg-white/30" />
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                                    {activeProject.name}
                                </h2>

                                <div className="flex items-center justify-between border-t border-white/20 pt-3 mt-1">
                                    <span className="text-white/60 uppercase tracking-wider text-xs">Type</span>
                                    <span className="font-medium text-sm">{activeProject.type}</span>
                                </div>

                                <p className="text-base text-white/70 leading-relaxed">
                                    {activeProject.desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-7/12 flex flex-col justify-center items-center">
                        <div className="w-full aspect-[16/10] relative rounded-xl overflow-hidden bg-white/5 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Link href={activeProject.link} target="_blank" className="block w-full h-full cursor-pointer group">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                                        <Image
                                            src={activeProject.image}
                                            alt={activeProject.name}
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                                            className="object-cover"
                                        />
                                    </Link>
                                    <Link
                                        href={activeProject.link}
                                        target="_blank"
                                        className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300 shadow-lg"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Layout: Compact Stack */}
            <section className="md:hidden w-full px-4 py-8 flex flex-col gap-12">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col gap-4">
                        <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden border border-white/10">
                            <Link href={project.link} target="_blank" className="block w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </Link>
                            <Link
                                href={project.link}
                                target="_blank"
                                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300 shadow-lg"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold leading-tight tracking-tight">
                                    {project.name}
                                </h2>
                                <span className="text-white/50 text-sm font-medium">{project.year}</span>
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </motion.main>
    );
}