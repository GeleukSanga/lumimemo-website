'use client';
import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    q: 'Foto seperti apa yang bagus untuk dijadikan litophane?',
    a: 'Foto dengan pencahayaan yang cukup dan wajah yang jelas — foto selfie, foto keluarga, bahkan foto lama hitam-putih pun bisa. Kami akan kasih tahu jika foto perlu penyesuaian sebelum diproses.',
  },
  {
    q: 'Berapa lama proses pembuatan dan pengiriman?',
    a: 'Proses cetak 3–5 hari kerja, lalu pengiriman 1–4 hari tergantung lokasi. Total estimasi 4–9 hari sejak foto dikirim. Kami selalu update progres via WhatsApp.',
  },
  {
    q: 'Apa itu garansi uang kembali?',
    a: 'Kalau hasil akhir tidak sesuai dengan yang kami janjikan (cacat cetak, warna meleset jauh), kami akan cetak ulang gratis atau kembalikan uang kamu. Kepuasan kamu adalah prioritas kami.',
  },
  {
    q: 'Apakah bisa request ukuran atau desain sendiri?',
    a: 'Bisa! Kami melayani berbagai ukuran dan bisa konsultasikan desain sesuai kebutuhanmu. Chat WhatsApp dulu, kami bantu dari awal.',
  },
  {
    q: 'Lampunya pakai apa? Boros listrik tidak?',
    a: 'Lampu LED hemat energi — konsumsi daya sangat kecil, aman menyala sepanjang malam. Dilengkapi kabel USB yang bisa dihubungkan ke adaptor, power bank, atau laptop.',
  },
  {
    q: 'Bisa dikirim ke seluruh Indonesia?',
    a: 'Ya! Kami kirim ke seluruh Indonesia via JNE, J&T, atau Sicepat. Dan untuk hari ini, ongkir gratis! 🎁',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: '1.5px solid',
        borderColor: open ? '#F2C4CE' : 'rgba(44,37,35,0.08)',
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        background: open ? '#FFFBFC' : '#fff',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left',
          padding: '20px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          background: 'transparent', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{
          fontFamily: 'Georgia, serif',
          fontSize: 15, fontWeight: 700,
          color: '#2C2523', lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0,
          width: 28, height: 28,
          borderRadius: '50%',
          background: open ? '#F2C4CE' : '#F2EDE6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 700, color: '#2C2523',
          transition: 'transform 0.3s, background 0.3s',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </button>

      <div style={{
        maxHeight: open ? 300 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p className="sans" style={{
          fontSize: 14, lineHeight: 1.7,
          color: '#5A524E',
          padding: '0 24px 20px',
          margin: 0,
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('faq-visible'); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{
      background: '#F2EDE6',
      padding: '80px 24px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>

        {/* Header */}
        <div
          ref={ref}
          className="faq-fade"
          style={{
            textAlign: 'center', marginBottom: 48,
            opacity: 0, transform: 'translateY(20px)',
            transition: 'opacity 0.6s, transform 0.6s',
          }}
        >
          <p className="sans" style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#9E958F', marginBottom: 14,
          }}>
            FAQ
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-0.02em', color: '#2C2523', marginBottom: 16,
          }}>
            Pertanyaan yang sering ditanya
          </h2>
          <p className="sans" style={{
            color: '#9E958F', maxWidth: 400, margin: '0 auto',
            lineHeight: 1.7, fontSize: 15,
          }}>
            Masih ada yang mengganjal? Langsung chat kami — kami respon cepat! 😊
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <div style={{
          marginTop: 40, textAlign: 'center',
          padding: '28px 24px',
          background: '#FAF8F5',
          borderRadius: 20,
          border: '1.5px solid rgba(44,37,35,0.07)',
        }}>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: 17, fontWeight: 700,
            color: '#2C2523', marginBottom: 8,
          }}>
            Masih ada pertanyaan lain?
          </p>
          <p className="sans" style={{
            fontSize: 13, color: '#9E958F', marginBottom: 20, lineHeight: 1.6,
          }}>
            Tim kami siap membantu kamu menemukan kenangan yang tepat.
          </p>
          <a
            href="https://wa.me/628972523968?text=Halo%2C+saya+punya+pertanyaan+tentang+LumiMemo"
            target="_blank" rel="noopener noreferrer"
            className="sans"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 99,
              background: '#2C2523', color: '#FAF8F5',
              fontWeight: 700, fontSize: 14,
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        .faq-visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
