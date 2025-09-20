import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, School, Star } from "lucide-react";

const stats = [
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        value: "300,000+",
        label: "Students Trained",
        description: "Across various engineering disciplines and regions in India."
    },
    {
        icon: <School className="h-10 w-10 text-primary" />,
        value: "100+",
        label: "Institutions Served",
        description: "Partnering with colleges to enhance their placement outcomes."
    },
    {
        icon: <Star className="h-10 w-10 text-primary" />,
        value: "4.8/5",
        label: "Average Rating",
        description: "Based on 359 reviews from students and college management."
    }
]

export function ImpactStats() {
    return (
        <section id="impact" className="py-16 sm:py-24 bg-secondary">
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
                        <Card key={stat.label} className="text-center">
                            <CardHeader className="flex flex-col items-center">
                                {stat.icon}
                                <CardTitle className="text-4xl font-extrabold mt-4">
                                    {stat.value}
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
