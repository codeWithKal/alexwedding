"use client";

import { Footer } from "@/components/sections/Footer";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
          Welcome to Alex <span className="text-6xl md:text-7xl font-playfair text-primary">&amp;</span> Mesi's Wedding
        </h1>
        <p className="text-foreground/70 text-xl font-lora mb-12">
          We're so excited to celebrate this special day with you!
        </p>
        <div className="bg-secondary p-8 rounded-lg border border-primary/20">
          <p className="text-foreground/80 text-lg font-lora">
            Thank you for being part of our journey. We can't wait to share this
            beautiful moment with all our loved ones.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
