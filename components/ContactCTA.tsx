"use client";

import { motion } from "framer-motion";

const WA_NUMBER = "6281234567890";
const WA_MSG = encodeURIComponent(
  "Halo Jogpro 3D! Saya mau konsultasi order produk 3D print. Boleh dibantu?"
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function ContactCTA() {
  return (
    <section className="py-32" style={{ background: "#0d0d0d" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass rounded-3xl overflow-hidden text-center"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)" }}
        >
          {/* Radial top glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(255,107,0,0.14), transparent 65%)",
            }}
          />

          {/* Top border highlight */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px pointer-events-none"
            style={{
              width: "55%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,107,0,0.55), transparent)",
            }}
          />

          <div className="relative z-10">
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-7"
              style={{ color: "#ff6b00", fontFamily: "var(--font-body)" }}
            >
              <span className="w-6 h-px" style={{ background: "#ff6b00" }} />
              Hubungi Kami
              <span className="w-6 h-px" style={{ background: "#ff6b00" }} />
            </div>

            {/* Heading */}
            <h2
              className="font-black text-white leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
              }}
            >
              Siap Print
              <br />
              <span style={{ color: "#ff6b00" }}>Idemu?</span>
            </h2>

            {/* Body */}
            <p
              className="text-lg mb-10 max-w-md mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-body)" }}
            >
              Dapatkan estimasi harga gratis dalam hitungan menit.
              Kami bantu dari konsultasi desain sampai pengiriman.
            </p>

            {/* CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-black text-black rounded-full transition-all duration-200"
              style={{
                background: "#ff6b00",
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
                fontFamily: "var(--font-display)",
                boxShadow: "0 0 50px rgba(255,107,0,0.22), 0 0 100px rgba(255,107,0,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ff8c35";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ff6b00";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              <WaIcon />
              Chat WhatsApp Sekarang
            </a>

            <p
              className="mt-7 text-sm"
              style={{ color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-body)" }}
            >
              ⚡ Biasanya balas dalam 1–3 jam &middot; Konsultasi gratis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
