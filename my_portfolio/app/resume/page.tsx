import { ArrowLeft, FileDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 flex flex-col items-center">
      <div className="container px-6 max-w-5xl mx-auto flex flex-col h-full">
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
          
          <Button asChild size="sm" className="bg-primary text-white">
            <a href="/Nishant_Kumar_Resume.pdf" download>
              <FileDown size={16} className="mr-2" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="flex-grow bg-card rounded-2xl border border-border overflow-hidden shadow-2xl min-h-[800px]">
          <iframe 
            src="/Nishant_Kumar_Resume.pdf" 
            className="w-full h-full border-none"
            title="Nishant Kumar Resume"
          />
        </div>
      </div>
    </div>
  );
}
