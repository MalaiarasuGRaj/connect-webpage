"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { getFaqs } from "@/app/faq/actions";
import { Loader2, Sparkles } from "lucide-react";
import type { GenerateFaqOutput } from "@/ai/flows/dynamic-faq-generator";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  topic: z.string().min(3, {
    message: "Topic must be at least 3 characters.",
  }),
  audience: z.string().min(3, {
    message: "Audience must be at least 3 characters.",
  }),
  numQuestions: z.coerce.number().min(1, { message: "Must generate at least 1 question." }).max(10, { message: "Cannot generate more than 10 questions." }),
});

export default function FaqGenerator() {
  const [faqResult, setFaqResult] = useState<GenerateFaqOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "Placement Training",
      audience: "Engineering Students",
      numQuestions: 5,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setFaqResult(null);
    const result = await getFaqs(values);

    if (result.success && result.faqs) {
        setFaqResult({ faqs: result.faqs });
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error || "Could not generate FAQs.",
        });
    }

    setIsLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-primary"/>
            Dynamic FAQ Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
                <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Interview Skills" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="audience"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Audience</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., College Management" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="numQuestions"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Number of Questions</FormLabel>
                    <FormControl>
                        <Input type="number" min="1" max="10" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormDescription>
                Use our AI tool to generate answers to your questions.
            </FormDescription>
            <Button type="submit" disabled={isLoading}>
                 {isLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                    </>
                ) : (
                    "Generate FAQs"
                )}
            </Button>
          </form>
        </Form>
        {faqResult && (
            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4 font-headline">Generated FAQs</h3>
                <Accordion type="single" collapsible className="w-full">
                    {faqResult.faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
