"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, School, Star } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";
import { useEffect, useRef, useState } from "react";

const stats = [
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        value: 300000,
        label: "Students Trained",
        description: "Across various engineering disciplines and regions in India.",
        suffix: "+"
    },
    {
        icon: <School className="h-10 w-10 text-primary" />,
        value: 100,
        label: "Institutions Served",
        description: "Partnering with colleges to enhance their placement outcomes.",
        suffix: "+"
    },
    {
        icon: <Star className="h-10 w-10 text-primary" />,
        value: 4.8,
        label: "Average Rating",
        description: "Based on 359 reviews from students and college management.",
        suffix: "/5"
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
            {
                rootMargin: "0px",
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);


    return (
        <section id="impact" className="py-16 sm:py-24 bg-secondary" ref={ref}>
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                        Our Impact in Numbers
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We are proud of the tangible results we've delivered, transforming student careers and supporting academic institutions.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {stats.map((stat) => (
                        <Card key={stat.label} className="text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <CardHeader className="flex flex-col items-center">
                                {stat.icon}
                                <CardTitle className="text-4xl font-extrabold mt-4">
                                    {inView && <AnimatedCounter from={0} to={stat.value} />}
                                    {!inView && (stat.value % 1 !== 0 ? '0.0' : '0')}
                                    {stat.suffix}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">{stat.label}</p>
                                <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}