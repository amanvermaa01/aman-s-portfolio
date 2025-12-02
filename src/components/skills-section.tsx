"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, MousePointer2, Search, Database, Layout, Code2, Terminal, Cloud, BrainCircuit, Server, AppWindow, Container } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Full Stack Engineering",
        description: "Building end-to-end web applications with Next.js and the MERN stack, focusing on performance, SEO, and responsive design.",
        icon: <Code2 className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
    {
        id: 2,
        title: "Cloud & DevOps",
        description: "Deploying scalable systems on AWS and Azure. I use Docker, Kubernetes, and CI/CD pipelines to ensure seamless delivery.",
        icon: <Cloud className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
    {
        id: 3,
        title: "Agentic AI & ML",
        description: "Developing intelligent, autonomous software agents using Python and modern AI frameworks to solve complex workflow problems.",
        icon: <BrainCircuit className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
    {
        id: 4,
        title: "System Architecture",
        description: "Architecting robust backends and optimized algorithms (C++ / DSA) designed to handle real-time data and high user traffic.",
        icon: <Server className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
];

const tools = [
    {
        id: 1,
        title: "React & Next.js",
        description: "Building responsive, high-performance web interfaces with Tailwind CSS and Framer Motion.",
        icon: <AppWindow className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
    {
        id: 2,
        title: "Node.js & Databases",
        description: "Scalable backend development using Express, MongoDB, and SQL for robust data management.",
        icon: <Database className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
    {
        id: 3,
        title: "Docker & AWS",
        description: "Containerization and cloud deployment on EC2/S3, ensuring reliable CI/CD pipelines.",
        icon: <Container className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
    {
        id: 4,
        title: "C++ & Python",
        description: "Core problem solving (DSA), automation scripts, and integrating AI models into applications.",
        icon: <Terminal className="w-8 h-8 text-white" strokeWidth={1.5} />,
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="relative w-full bg-black text-white py-32 px-6">
            <div className="max-w-4xl mx-auto">

                {/* What I do Section */}
                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight"
                    >
                        What I do
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* The tools I'm using Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight"
                    >
                        The tools I'm using
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                                    {tool.icon}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-semibold">{tool.title}</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}