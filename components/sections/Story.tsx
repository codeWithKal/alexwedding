"use client";

import Image from "next/image";

export function Story() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] animate-slide-in-left">
            <Image
              src="/story-image.jpg"
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl text-center font-playfair font-bold text-foreground">
              ለውድ ቤተሰቦቻችን እና ጓኞቻችን
            </h2>

            <p className="text-white text-lg text-center font-bold leading-relaxed">
              "እግዚያብሄር የሰራት ቀን ይህቺ ናት:ሐሴትን እናድርግ:በዕርስዋም ደስ ይበለን" መዝ 118:24
            </p>
            <br />

            <p className="text-foreground/70 text-lg text-center font-lora leading-relaxed">
              የማክበር ሰላምታችንን እያቀረብን እሁድ ሚያዚያ 25/2018 ዓ.ም በሚደረገው የጋብቻ ስነ-ስርዓታችን ላይ
              እንዲገኙልን ስንል ባክብሮት ጋብዘንዎታል:: የደስታችን ተካፋይ ስለሆኑ እናመሰግናለን::
            </p>

            <div className="pt-6">
              <p className="text-primary font-playfair text-center text-2xl italic">
                ስለዚህ ሰው አባቱንና እናቱን ይተዋል፥ በሚስቱም ይጣበቃል፤ ሁለቱም አንድ ሥጋ ይሆናሉ ዘፍጥረት
                2፥24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
