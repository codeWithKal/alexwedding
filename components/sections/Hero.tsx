"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Wedding Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 space-y-6 max-w-3xl animate-fade-in pb-20">
        <p className="text-primary text-lg tracking-widest uppercase font-lora">
          ይድረስ ለወዳጅ ለዘመድ
        </p>

        <h1 className="text-5xl md:text-7xl mt-8 font-playfair font-bold italic text-foreground leading-tight animate-zoom-in">
          አለማየሁ ብርሃኑ <div className="font-playfair">&</div> መሰረት ዳኜ
        </h1>
        <div className="flex items-center justify-center p-4 animate-pulse-slow">
          <div className="relative w-12 h-12">
            <div className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-yellow-500"></div>

            <div className="absolute top-0 left-4 w-8 h-8 rounded-full border-2 border-yellow-500"></div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-foreground/80 font-lora italic animate-fade-in-right">
          "ስለዚህ እግዚአብሔር ያጣመረውን ሰው አይለየው" (ማርቆስ 10:9)
        </p>

        <div>
          <p className="text-foreground/60 text-lg">
            ቀጣዩን ለማየት ወደታች scroll ያርጉት
          </p>
          <div className="animate-bounce mt-4">
            <svg
              className="w-6 h-6 mx-auto text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
