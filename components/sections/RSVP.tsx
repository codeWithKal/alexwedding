"use client";

import { useState } from "react";

export function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "yes",
    guests: "1",
    dietary: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      attending: "yes",
      guests: "1",
      dietary: "",
      message: "",
    });
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-widest uppercase font-lora">
            ለአክባሪዎ
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mt-4">
            የመልካም ምኞት መግለጫ ቅጽ
          </h2>
          <p className="text-foreground/70 text-lg font-lora mt-4">
            የመልካም ምኞት መልዕክቶትን ከዚህ በታች ባለው ቅጽ ይላኩልን። አብሮነታችሁ ስላልተለየን አናመሰግናለን !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {submitted ? (
              <div className="text-center bg-secondary p-8 rounded-lg">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  እናመሰግናለን!
                </h3>
                <p className="text-foreground/70 font-lora">
                  መልእክቶ በተሳካ ሁኔታ ተልኳል እናመሰግናለን።
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-secondary p-8 rounded-lg"
              >
                <div>
                  <label className="block text-sm uppercase tracking-wide text-primary mb-2">
                    ሙሉ ስም *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
                    placeholder="እባክዎ ስምዎን እዚህ ያስፍሩ"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wide text-primary mb-2">
                    ልዩ መልእክት
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-background border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary resize-none"
                    placeholder="እባክዎ መልእክቶን እዚህ ያስፍሩ..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-playfair text-lg font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
                >
                  ይላኩ
                </button>
              </form>
            )}
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
              አድራሻ: ሰንዳፋ
            </h3>
            <div className="aspect-video">
              <iframe
                src="https://maps.google.com/maps?q=Sendafa,Ethiopia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
