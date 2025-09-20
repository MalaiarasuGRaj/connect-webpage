import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const teamMembers = [
  {
    name: "Murali Dharan Rajasekar",
    role: "Founder & CEO",
    imageId: "murali-dharan",
  },
  {
    name: "Angala Eswari",
    role: "Co-Founder & COO",
    imageId: "angala-eswari",
  },
  {
    name: "Abinaya Murali",
    role: "Head of Operations",
    imageId: "abinaya-murali",
  },
];

export default function AboutPage() {
    const teamImage = PlaceHolderImages.find(p => p.id === 'team-photo');
  return (
    <div className="bg-background">
      <div className="container py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
            About Connect Training Solutions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2015, our mission is to empower students by bridging the critical gap between academic knowledge and industry requirements, ensuring they are placement-ready.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline">Our Story</h2>
                <p className="mt-4 text-muted-foreground">
                    Connect Training Solutions Pvt Ltd was born from a vision to revolutionize placement training in India. Our founders, Murali Dharan Rajasekar and Angala Eswari, identified a pressing need to equip engineering students with practical, industry-relevant skills that go beyond textbook learning.
                </p>
                <p className="mt-4 text-muted-foreground">
                    From our headquarters in Tirunelveli, Tamil Nadu, we have grown to serve over 100 institutions across the country, training more than 300,000 students. Our focus remains steadfast: to create a generation of confident, skilled professionals ready to make an immediate impact in the corporate world.
                </p>
            </div>
            {teamImage && (
                 <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={teamImage.imageUrl}
                        alt={teamImage.description}
                        data-ai-hint={teamImage.imageHint}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                 </div>
            )}
        </div>

        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The driving force behind our success and commitment to excellence.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <Card key={member.name} className="text-center">
                  <CardHeader>
                    {memberImage && (
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary">
                            <Image
                                src={memberImage.imageUrl}
                                alt={memberImage.description}
                                data-ai-hint={memberImage.imageHint}
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-semibold mt-1">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
