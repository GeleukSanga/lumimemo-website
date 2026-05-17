'use client';
import { useEffect, useRef } from 'react';

const cards = [
  {
    icon: '👴👵',
    bg: '#E8F2FB',
    accent: '#BFD7ED',
    title: 'Kakek & Nenek',
    desc: 'Mereka mungkin sudah jauh — tapi dalam cahaya ini, senyum mereka selalu ada.',
    quote: '"Setiap malam aku bisa melihat wajah almarhumah ibu."',
  },
  {
    icon: '👶',
    bg: '#FAE8EC',
    accent: '#F2C4CE',
    title: 'Si Kecil',
    desc: 'Mereka tumbuh begitu cepat. Abadikan momen paling lucu dan manis dalam cahaya.',
    quote: '"Foto pertama anak kami — kini jadi lampu di kamarnya."',
  },
  {
    icon: '💑',
    bg: '#FFF4E8',
    accent: '#F5D9B4',
    title: 'Pasangan',
    desc: 'Kenangan kalian bersama, bersinar setiap malam — lebih indah dari bunga apapun.',
    quote: '"Hadiah ulang tahun paling berkesan yang pernah dia terima."',
  },
  {
    icon: '🙏',
    bg: '#EDE8F5',
    accent: '#D4C4ED',
    title: 'Iman & Doa',
    desc: 'Hadirkan simbol iman di ruanganmu — cahaya doa yang tak pernah padam.',
    quote: '"Setiap malam, doaku terasa lebih tenang di sisinya."',
  },
];

export default function Emotional() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    refs.current.forEach(el => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: '#F2EDE6', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        {/* Header */}
        <div
          ref={el => { refs.current[0] = el; }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p className="sans" style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#9E958F', marginBottom: 16,
          }}>
            Untuk siapa?
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700, lineHeight: 1.15,
            letterSpacing: '-0.02em', color: '#2C2523', marginBottom: 16,
          }}>
            Ada orang-orang yang tidak boleh{' '}
            <br />
            <em style={{ fontStyle: 'italic', color: '#BFD7ED' }}>terlupakan</em>
          </h2>
          <p className="sans" style={{
            color: '#9E958F', maxWidth: 420, margin: '0 auto', lineHeight: 1.65, fontSize: 15,
          }}>
            LumiMemo adalah cara paling intim untuk mengatakan{' '}
            <em>&ldquo;kamu selalu ada di hatiku&rdquo;</em> — setiap malam, tanpa kata-kata.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: 20,
          marginBottom: 72,
        }}>
          {cards.map((c, i) => (
            <div
              key={i}
              ref={el => { refs.current[i + 1] = el; }}
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderRadius: 20,
                padding: 28,
                background: c.bg,
                border: `1.5px solid ${c.accent}`,
                transition: 'transform 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{c.icon}</div>
              <h3 style={{
                fontFamily: 'Georgia, serif', fontSize: 17,
                fontWeight: 700, color: '#2C2523', marginBottom: 10,
              }}>
                {c.title}
              </h3>
              <p className="sans" style={{
                fontSize: 13, lineHeight: 1.65, color: '#5A524E', marginBottom: 16,
              }}>
                {c.desc}
              </p>
              <p className="sans" style={{
                fontSize: 12, fontStyle: 'italic', color: '#9E958F',
                borderLeft: `3px solid ${c.accent}`,
                paddingLeft: 12, lineHeight: 1.55,
              }}>
                {c.quote}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div
          ref={el => { refs.current[5] = el; }}
          style={{
            background: '#FAF8F5',
            borderRadius: 24,
            padding: '48px 40px',
            textAlign: 'center',
            border: '1px solid rgba(44,37,35,0.06)',
          }}
        >
          <h3 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontWeight: 700, color: '#2C2523', marginBottom: 8,
          }}>
            Cara pesan — mudah sekali
          </h3>
          <p className="sans" style={{ color: '#9E958F', marginBottom: 48, fontSize: 14 }}>
            Cukup 3 langkah sederhana
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
            className="steps-grid"
          >
            {[
              { n: '01', icon: '📸', t: 'Kirim Foto', d: 'Kirimkan foto terbaikmu via WhatsApp. Foto apapun bisa kami proses.' },
              { n: '02', icon: '⚙️', t: 'Kami Proses', d: 'Foto diubah menjadi litophane berkualitas tinggi. Siap dalam 3–5 hari.' },
              { n: '03', icon: '✨', t: 'Nyalakan & Rasakan', d: 'Terima paketmu. Nyalakan lampunya. Rasakan keajaibannya.' },
            ].map((s, i) => (
              <div key={i}>
                <div className="sans" style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  color: '#D4C4ED', marginBottom: 12,
                }}>
                  {s.n}
                </div>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <p style={{
                  fontFamily: 'Georgia, serif', fontSize: 15,
                  fontWeight: 700, color: '#2C2523', marginBottom: 8,
                }}>
                  {s.t}
                </p>
                <p className="sans" style={{ fontSize: 13, color: '#9E958F', lineHeight: 1.6 }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
