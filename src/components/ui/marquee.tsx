"use client";
import { motion } from "framer-motion";

const Marquee = () => {
    const items = [
        "OUR",
        "/",
        "WORK",
        "/",
        "PROJECTS",
        "OUR",
        "/",
        "WORK",
        "/",
        "PROJECTS",
        "OUR",
        "/",
        "WORK",
        "/",
        "PROJECTS",
        "AI AGENTS",
    ];

    return (
        <div className="flex flex-col w-full overflow-hidden bg-transparent py-2 border-y border-transparent/10 gap-0">
            {/* Band 1: Moves Right to Left */}
            <div className="flex overflow-hidden w-full">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...items, ...items].map((item, index) => (
                        <span
                            key={`band1-${index}`}
                            className="mx-8 text-4xl font-bold text-white/80"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Band 2: Moves Left to Right */}
            <div className="flex overflow-hidden w-full">
                <motion.div
                    className="flex whitespace-nowrap"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...items, ...items].map((item, index) => (
                        <span
                            key={`band2-${index}`}
                            className="mx-8 text-4xl font-bold text-white/50"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;