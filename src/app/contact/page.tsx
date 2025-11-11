import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Connect Training Solutions for inquiries about our placement training programs, partnerships, or any other questions.",
};

export default function ContactPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          We're here to help. Whether you're a student with questions or a college interested in a partnership, please reach out.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold font-headline mb-6">Contact Form</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" rows={6} />
            <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
          </form>
        </div>

        <div className="space-y-6">
             <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
             <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Our Office</h3>
                        <p className="text-muted-foreground">Connect Training Solutions Pvt Ltd,<br />Tirunelveli, Tamil Nadu, India</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <a href="mailto:contact@connecttrainings.com" className="text-muted-foreground hover:text-primary">contact@connecttrainings.com</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <a href="tel:+910000000000" className="text-muted-foreground hover:text-primary">+91 123-456-7890</a>
                    </div>
                </div>
             </div>
        </div>
      </div>
       <div className="mt-16">
          <h2 className="text-2xl font-bold font-headline text-center mb-6">Our Location</h2>
            <Card>
                <CardContent className="p-2">
                     <div className="aspect-video w-full overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126207.3892336329!2d77.65683935272304!3d8.721465228532002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411624b62d7c5%3A0x805f778619a868c2!2sTirunelveli%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1689286829184!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of Tirunelveli"
                        ></iframe>
                    </div>
                </CardContent>
            </Card>
      </div>
    </div>
  );
}
