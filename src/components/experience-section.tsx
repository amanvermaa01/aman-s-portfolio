"use client";

import { motion } from "framer-motion";
import { Layers, Infinity as InfinityIcon, Zap } from "lucide-react";

const experiences = [
    {
        id: 1,
        company: "Groott",
        role: "InternFull Stack Web Developer",
        period: "Jan 2025 – March 2025",
        description: "I developed a scalable warehouse management system using the MERN stack that transformed how inventory is tracked, effectively reducing manual data errors. My focus was on backend optimization, where I designed efficient database schemas to handle real-time stock updates seamlessly. Beyond the code, I collaborated closely with cross-functional teams in an Agile environment to translate complex stakeholder requirements into technical features, ensuring the project was delivered on time and met business goals.",
        icon: <Layers className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative w-full bg-black text-white py-32 px-6" style={{ padding: "inherit", marginLeft: "0" }}>
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-6xl font-semibold mb-12 tracking-tight"
                >
                    Work experience
                </motion.h2>

                <div className="flex flex-col gap-20">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col gap-6"
                        >
                            {/* Icon */}
                            {/* <div className="mb-2">
                                {exp.icon}
                            </div> */}

                            {/* Company Name */}
                            <h3 className="text-3xl font-semibold tracking-tight">
                                {exp.company}
                            </h3>

                            {/* Role and Period */}
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-lg text-white font-medium">
                                <span>{exp.role}</span>
                                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30" />
                                <span>({exp.period})</span>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
