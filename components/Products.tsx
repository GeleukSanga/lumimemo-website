"use client";

import { motion } from "framer-motion";

const WA_NUMBER = "6281234567890";

const PRODUCTS = [
  {
    id: "keychain",
    emoji: "🔑",
    tagline: "Custom name keychain",
    name: "Gantungan Kunci Nama",
    description:
      "Hadiah personal yang sempurna. Nama kamu dicetak presisi dengan material premium, tersedia berbagai warna dan font.",
    features: ["Nama custom bebas", "Pilihan warna bebas", "Material PLA/PETG premium"],
    price: "Mulai Rp 25.000",
    gradFrom: "rgba(255,107,0,0.14)",
    gradTo: "rgba(245,158,11,0.06)",
    accent: "#ff6b00",
    message: "Halo! Saya mau order Gantungan Kunci Nama Custom. Bisa bantu info lebih lanjut?",
  },
  {
    id: "capybara",
    emoji: "🦫",
    tagline: "Viral articulated toy",
    name: "Articulated Capybara",
    description:
      "Capybara mainan artikulasi yang viral. Fully jointed di setiap segmen tubuh — cetak langsung jadi, tanpa assembly.",
    features: ["Fully articulated joints", "Tanpa lem atau assembly", "Ukuran ±15 cm"],
    price: "Mulai Rp 75.000",
    gradFrom: "rgba(146,64,14,0.14)",
    gradTo: "rgba(217,119,6,0.06)",
    accent: "#d97706",
    message: "Halo! Saya mau order Articulated Capybara. Bisa bantu info lebih lanjut?",
  },
  {
    id: "clicker",
    emoji: "⚡",
    tagline: "Mechanical switch fidget",
    name: "Clicker Keychain MX",
    description:
      "Keychain dengan mechanical MX switch untuk klik ASMR paling satisfying. Housing custom sesuai selera kamu.",
    features: ["Cherry MX compatible", "Housing custom warna", "Tactile click premium"],
    price: "Mulai Rp 35.000",
    gradFrom: "rgba(30,64,175,0.14)",
    gradTo: "rgba(6,182,212,0.06)",
    accent: "#3b82f6",
    message: "Halo! Saya mau order Clicker Keychain MX. Bisa bantu info lebih lanjut?",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Products() {
  return (
    <section id="produk" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#ff6b00", fontFamily: "var(--font-body)" }}
          >
            <span className="w-8 h-px" style={{ background: "#ff6b00" }} />
            Produk Kami
          </div>
          <h2
            className="font-black leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            }}
          >
            <span className="text-white">3D Print untuk</span>
            <br />
            <span style={{ color: "#ff6b00" }}>Semua Kebutuhan</span>
          </h2>
          <p
            className="text-lg mt-4 max-w-[480px]"
            style={{ color: "rgba(255,255,255,0.44)", fontFamily: "var(--font-body)" }}
          >
            Setiap produk dicetak dengan filament premium dan presisi tinggi, siap dalam hitungan jam.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PRODUCTS.map((p) => {
            const link = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(p.message)}`;
            return (
              <motion.div key={p.id} variants={item} className="h-full">
                <ProductCard product={p} waLink={link} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  waLink,
}: {
  product: (typeof PRODUCTS)[number];
  waLink: string;
}) {
  return (
    <div
      className="glass rounded-2xl overflow-hidden h-full flex flex-col group transition-all duration-300"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      {/* Visual header */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${product.gradFrom}, ${product.gradTo})`,
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Glow spot */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at 50% 65%, ${product.accent}28, transparent 60%)`,
          }}
        />
        <span className="relative z-10 text-8xl select-none" role="img" aria-hidden>
          {product.emoji}
        </span>
        {/* Price badge */}
        <div
          className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold"
          style={{
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.85)",
            fontFamily: "var(--font-body)",
          }}
        >
          {product.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <p
            className="text-xs uppercase tracking-wider mb-1"
            style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-body)" }}
          >
            {product.tagline}
          </p>
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {product.name}
          </h3>
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-body)" }}
        >
          {product.description}
        </p>

        <ul className="flex flex-col gap-2 flex-1">
          {product.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.58)", fontFamily: "var(--font-body)" }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "#ff6b00" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.09)",
            color: "rgba(255,255,255,0.75)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#ff6b00";
            (e.currentTarget as HTMLElement).style.borderColor = "#ff6b00";
            (e.currentTarget as HTMLElement).style.color = "#000";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
          }}
        >
          <WaIcon />
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}

function WaIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
