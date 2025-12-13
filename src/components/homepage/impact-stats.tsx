"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatedCounter } from "./animated-counter";
import { cn } from "@/lib/utils";

const stats = [
    {
        value: 300000,
        label: "Students Trained",
        suffix: "+",
        highlight: "text-blue-500"
    },
    {
        value: 100,
        label: "Institutions Partnered",
        suffix: "+",
        highlight: "text-purple-500"
    },
    {
        value: 95,
        label: "Placement Success Rate",
        suffix: "%",
        highlight: "text-green-500"
    },
    {
        value: 4.8,
        label: "Average Rating",
        suffix: "/5",
        highlight: "text-orange-500",
        decimal: true
    }
]

export function ImpactStats() {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <section className="py-24 bg-background relative" ref={ref}>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-headline mb-6">
                        Making a Real Difference
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Numbers that reflect our commitment to excellence and student success across the nation.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="flex flex-col items-center text-center group">
                            <div className={cn("text-4xl md:text-6xl font-bold mb-4 tracking-tighter transition-all duration-500 group-hover:scale-110", stat.highlight)}>
                                {inView && <AnimatedCounter from={0} to={stat.value} />}
                                {!inView && (stat.decimal ? '0.0' : '0')}
                                {stat.suffix}
                            </div>
                            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}