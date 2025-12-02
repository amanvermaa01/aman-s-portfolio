"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Hexagon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { File as FileTreeItem, Folder, Tree } from "@/components/ui/file-tree";

export default function HomeSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="relative h-screen w-full bg-black overflow-hidden font-sans text-white">
            {/* Background - z-0 */}
            <div className="absolute inset-0 z-0 bg-neutral-950">
                {/* Placeholder for future background or just dark color */}
            </div>

            {/* Overlay Content - z-10, positioned absolutely over Spline */}
            <div className="absolute inset-0 z-10 h-full w-full flex flex-col justify-end p-6 md:p-12 pointer-events-none">
                {/* Navbar - pointer-events-auto to stay clickable */}
                <nav className="fixed top-0 left-0 z-50 flex items-start justify-between w-full p-6 md:p-12 pointer-events-auto">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center">
                            <Hexagon className="w-8 h-8 text-[#a3e635] fill-[#a3e635]/20" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Aman Verma</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-50"
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-6 h-6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>

                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 top-full mt-2 w-48 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-xl z-40"
                                    >
                                        <div className="flex flex-col py-2">
                                            {['Work', 'Experience', 'Skills', 'Contact'].map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`#${item.toLowerCase()}`}
                                                    className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </nav>

                {/* File Tree - Positioned absolutely on the right - Hidden on mobile/tablet */}
                <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 pointer-events-auto">
                    <div className="border border-white/10 rounded-lg p-4 bg-black/50 backdrop-blur-sm" style={{ width: '20rem', height: '20rem', overflow: 'hidden', marginBottom: '100px', marginRight: '190px' }}>
                        <Tree className="text-white w-80 h-60" initialExpandedItems={['src', 'app', 'components']}>
                            <Folder element="src" value="src">
                                <Folder element="app" value="app">
                                    <FileTreeItem value="layout.tsx">
                                        <p>layout.tsx</p>
                                    </FileTreeItem>
                                    <FileTreeItem value="page.tsx">
                                        <p>page.tsx</p>
                                    </FileTreeItem>
                                </Folder>
                                <Folder element="components" value="components">
                                    <Folder element="ui" value="ui">
                                        <FileTreeItem value="button.tsx">
                                            <p>button.tsx</p>
                                        </FileTreeItem>
                                        <FileTreeItem value="file-tree.tsx">
                                            <p>file-tree.tsx</p>
                                        </FileTreeItem>
                                    </Folder>
                                </Folder>
                                <Folder element="lib" value="lib">
                                    <FileTreeItem value="utils.ts">
                                        <p>utils.ts</p>
                                    </FileTreeItem>
                                </Folder>
                            </Folder>
                        </Tree>
                    </div>
                </div>

                {/* Hero Content - pointer-events-auto for interactive elements */}
                <div className="flex flex-col justify-end items-start w-full pb-10 pointer-events-auto">
                    <div className="inline-flex items-center self-start px-4 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-medium mb-8 mt-2">
                        Elevating Ideas, Creating Experiences
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1] mb-8 max-w-4xl">
                        Building Intelligent <br className="hidden md:block" />
                        Web Systems.
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-end gap-8 w-full justify-between">
                        <Link
                            href="/contact"
                            className="px-12 py-6 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium tracking-wide whitespace-nowrap md:mb-20 text-center"
                        >
                            Contact
                        </Link>

                        <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed text-left md:text-right">
                            Hello! I'm <span className="font-light text-white text-xl md:text-3xl text-semibold">Aman Verma</span>, a Full Stack Engineer
                            I don't just write code; I build systems that solve real problems. My journey sits at the intersection of modern web development and the future of AI. Whether it's architecting cloud-native applications on AWS or experimenting with Agentic AI, I'm obsessed with the 'how' and 'why' behind the technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}