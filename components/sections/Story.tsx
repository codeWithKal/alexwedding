"use client";

import Image from "next/image";

export function Story() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/story-image.jpg"
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-primary text-sm tracking-widest uppercase font-lora">
              ታሪካችን
            </p>

            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              ትውውቃችን
            </h2>

            <p className="text-foreground/70 text-lg font-lora leading-relaxed">
              We met on a rainy evening in the coffee shop around the corner
              from where we both lived. Michael spilled his coffee all over
              Sarah's favorite book, and what started as an awkward apology
              turned into hours of conversation about literature, dreams, and
              life.
            </p>

            <p className="text-foreground/70 text-lg font-lora leading-relaxed">
              Three years later, Michael surprised Sarah with a ring at the same
              coffee shop. We've been inseparable ever since, and now we're
              thrilled to share our joy with all of you.
            </p>

            <div className="pt-6">
              <p className="text-primary font-playfair text-2xl italic">
                A match made in coffee aisle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
