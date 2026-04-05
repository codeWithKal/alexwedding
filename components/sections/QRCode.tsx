"use client";

import { useEffect, useState } from "react";

export function QRCodeSection() {
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    const origin = window.location.origin;
    setDownloadUrl(`${origin}/download-invitation`);
  }, []);

  const qrImageUrl = downloadUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(downloadUrl)}`
    : "/qr-code.svg";

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-2xl mx-auto px-6 text-center animate-fade-in-up">
        <p className="text-primary text-sm tracking-widest uppercase font-lora">
          ለክቡራን እንግዶች
        </p>

        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mt-4 mb-6">
          የመጥሪያ ካርዶትን ለማግኘት ከዚህ በታች ያለውን QR code ስካን ያድርጉ።
        </h2>

        <div className="flex justify-center animate-fade-in">
          <a
            href="/download-invitation"
            className="block bg-white p-8 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <img
              src={qrImageUrl}
              alt="Download Invitation QR Code"
              width={250}
              height={250}
              className="mx-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
