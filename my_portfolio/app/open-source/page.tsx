import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-12 border border-dashed border-border rounded-3xl max-w-md mx-6">
        <h1 className="text-4xl font-bold mb-4 tracking-tighter">Coming soon</h1>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          I&apos;m currently working on some exciting open-source projects. Check back later!
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-all"
        >
          <ArrowLeft size={16} className="mr-2" />
          Return to home
        </Link>
      </div>
    </div>
  );
}
