"use strict";
import Image from "next/image";

export function CompanyMarquee() {
    const companies = [
        { name: "TCS", logo: "/images/logo/tcs.png" },
        { name: "CTS", logo: "/images/logo/CTS.png" },
        { name: "Zoho", logo: "/images/logo/zoho.png" },
        { name: "Wipro", logo: "/images/logo/wipro.png" },
        { name: "Infosys", logo: "/images/logo/infosys.png" },
        { name: "Hexaware", logo: "/images/logo/hexaware.png" },
        { name: "Accenture", logo: "/images/logo/Accenture.png" },
        { name: "Capgemini", logo: "/images/logo/capgemini.png" },
        { name: "Tata Power", logo: "/images/logo/tata-power.png" },
        { name: "HCLTech", logo: "/images/logo/hcl.png" }
    ];

    // Duplicate 6 times to ensure gapless scrolling on wide screens
    const repeatedCompanies = Array(6).fill(companies).flat();

    return (
        <div className="py-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight font-headline text-foreground/80 mb-10">
                Our Students Work At
            </h2>
            {/* Marquee Container */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent"></div>
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent"></div>

                <div className="flex w-max animate-marquee py-8 transform-gpu">
                    {repeatedCompanies.map((company, index) => (
                        <div key={`${company.name}-${index}`} className="group relative flex items-center justify-center w-40 h-20 shrink-0 cursor-default mr-12">
                            <div className={`relative w-full h-full overflow-hidden rounded-xl ${company.name === 'CTS' ? 'bg-white p-2' : ''}`}>
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} Logo`}
                                    fill
                                    className="object-contain rounded-xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
