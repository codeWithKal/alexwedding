"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-03T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-12">
            የማይረሳ ጊዜን አብሮ ለማሳለፍ
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "ቀናት", value: timeLeft.days },
            { label: "ሰዓታት", value: timeLeft.hours },
            { label: "ደቂቃዎች", value: timeLeft.minutes },
            { label: "ሴኮንዶች", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-secondary p-8 border border-primary/20 animate-zoom-in"
            >
              <p className="text-5xl md:text-6xl font-playfair font-bold text-foreground leading-none">
                {String(item.value).padStart(2, "0")}
              </p>
              <span className="text-sm uppercase tracking-[0.3em] text-foreground/60 mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mt-12">
          ቀርተውናል!
        </h2>
      </div>
    </section>
  );
}
