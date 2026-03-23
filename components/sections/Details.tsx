"use client";

export function Details() {
  const events = [
    {
      title: "Ceremony",
      time: "4:00 PM",
      location: "Grand Ballroom, The Elegant Hotel",
      address: "123 Wedding Lane, New York, NY 10001",
    },
    {
      title: "Cocktail Hour",
      time: "5:30 PM",
      location: "Rooftop Garden",
      address: "Same venue",
    },
    {
      title: "Reception & Dinner",
      time: "7:00 PM",
      location: "Grand Ballroom",
      address: "Same venue",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase font-lora">
            Event Details
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mt-4">
            The Wedding Day
          </h2>
          <p className="text-foreground/60 text-lg font-lora mt-4">
            Saturday, June 15th, 2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-background/50 p-8 rounded-lg border border-primary/20"
            >
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                {event.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-primary text-sm uppercase tracking-wide">
                    Time
                  </p>
                  <p className="text-foreground text-lg font-lora">
                    {event.time}
                  </p>
                </div>
                <div>
                  <p className="text-primary text-sm uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-foreground text-lg font-lora">
                    {event.location}
                  </p>
                </div>
                <div>
                  <p className="text-primary text-sm uppercase tracking-wide">
                    Address
                  </p>
                  <p className="text-foreground/70 text-sm font-lora">
                    {event.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 p-8 bg-background rounded-lg border border-primary/30 text-center">
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Dress Code</h3>
          <p className="text-foreground/70 text-lg font-lora">Black Tie</p>
          <p className="text-primary text-sm uppercase tracking-wide mt-6">Formal evening attire</p>
        </div> */}
      </div>
    </section>
  );
}
