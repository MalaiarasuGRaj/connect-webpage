"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles } from "lucide-react";
import { getSummary } from "@/app/blog/actions";
import { useToast } from "@/hooks/use-toast";

export default function BlogPostSummarizer({ content }: { content: string }) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary("");
    const result = await getSummary({ blogPostContent: content });
    if (result.success && result.summary) {
      setSummary(result.summary);
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error || "Could not generate summary.",
        });
    }
    setIsLoading(false);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-center">
        <Button onClick={handleSummarize} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              TLDR: Summarize this post
            </>
          )}
        </Button>
      </div>

      {summary && (
        <Alert className="mt-8 bg-primary/5 border-primary/20">
          <Sparkles className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary font-bold">AI Summary</AlertTitle>
          <AlertDescription className="text-foreground/90">
            {summary}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
