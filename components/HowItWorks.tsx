"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Pilih & Ceritakan",
    description:
      "Pilih produk dari katalog kami atau ceritakan ide kamu via WhatsApp. Konsultasi desain gratis.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Konfirmasi & Bayar",
    description:
      "Kami kirim estimasi harga dan preview desain. Setelah konfirmasi, proses cetak langsung dimulai.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Cetak & Terima",
    description:
      "Kami cetak dengan presisi FDM terbaik. Bisa ambil di Jogja atau dikirim ke seluruh Indonesia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="proses" className="py-32" style={{ background: "#0d0d0d" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#ff6b00", fontFamily: "var(--font-body)" }}
          >
            <span className="w-8 h-px" style={{ background: "#ff6b00" }} />
            Cara Kerja
            <span className="w-8 h-px" style={{ background: "#ff6b00" }} />
          </div>
          <h2
            className="font-black text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            }}
          >
            Mudah &amp; Cepat
          </h2>
          <p
            className="text-lg mt-4 max-w-sm mx-auto"
            style={{ color: "rgba(255,255,255,0.44)", fontFamily: "var(--font-body)" }}
          >
            Dari ide ke tangan kamu dalam 3 langkah simpel.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute h-px"
            style={{
              top: "3.25rem",
              left: "calc(16.66% + 2rem)",
              right: "calc(16.66% + 2rem)",
              background:
                "linear-gradient(90deg, transparent, rgba(255,107,0,0.18), rgba(255,107,0,0.18), transparent)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Icon bubble with large number ghost */}
                <div className="relative mb-7">
                  <div
                    className="w-14 h-14 rounded-2xl glass flex items-center justify-center relative z-10"
                    style={{ color: "#ff6b00" }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="absolute -top-4 -right-4 font-black select-none leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "3.5rem",
                      color: "rgba(255,255,255,0.04)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.43)", fontFamily: "var(--font-body)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
