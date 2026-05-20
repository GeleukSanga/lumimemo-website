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

const steps = [
  {
    n: '01',
    icon: '📸',
    color: '#F2C4CE',
    colorDark: '#c9848f',
    title: 'Kirim Foto',
    desc: 'Kirimkan foto terbaikmu via WhatsApp. Foto apapun bisa kami proses.',
    visual: (
      <div style={{
        background: '#F0FFF4',
        border: '1.5px solid #86efac',
        borderRadius: 14,
        padding: '10px 14px',
        marginTop: 16,
        textAlign: 'left',
        fontSize: 12,
        fontFamily: 'sans-serif',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#F2C4CE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>😊</div>
          <span style={{ fontWeight: 600, color: '#2C2523', fontSize: 11 }}>Kamu</span>
        </div>
        <div style={{ background: '#dcf8c6', borderRadius: '12px 12px 12px 4px', padding: '6px 10px', fontSize: 11, color: '#333', marginBottom: 4, display: 'inline-block' }}>
          📎 foto_mama.jpg
        </div>
        <div style={{ background: '#dcf8c6', borderRadius: '12px 12px 12px 4px', padding: '6px 10px', fontSize: 11, color: '#333', display: 'inline-block', clear: 'both' }}>
          Halo, mau pesan lampu ini 🙏
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, marginBottom: 4 }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#2C2523', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>🕯</div>
          <span style={{ fontWeight: 600, color: '#2C2523', fontSize: 11 }}>LumiMemo</span>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '4px 12px 12px 12px', padding: '6px 10px', fontSize: 11, color: '#333', display: 'inline-block' }}>
          Siap! Kami proses sekarang ✨
        </div>
      </div>
    ),
  },
  {
    n: '02',
    icon: '⚙️',
    color: '#D4C4ED',
    colorDark: '#9b8bc4',
    title: 'Kami Proses',
    desc: 'Foto diubah menjadi litophane berkualitas tinggi. Siap dalam 3–5 hari.',
    visual: (
      <div style={{
        marginTop: 16,
        background: 'linear-gradient(135deg, #EDE8F5 0%, #F2EDE6 100%)',
        borderRadius: 14,
        padding: '12px 14px',
        border: '1.5px solid #D4C4ED',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{ fontSize: 16 }}>🖨️</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: '#9E958F', fontFamily: 'sans-serif', marginBottom: 3 }}>Progress cetak</div>
            <div style={{ height: 6, background: '#e0d8f5', borderRadius: 99 }}>
              <div style={{ height: 6, width: '75%', background: '#D4C4ED', borderRadius: 99 }} />
            </div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#9b8bc4', fontFamily: 'sans-serif' }}>75%</span>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['Desain ✓', 'Cetak ✓', 'QC ⏳', 'Kirim'].map((s, i) => (
            <span key={i} style={{
              fontSize: 10, fontFamily: 'sans-serif',
              padding: '3px 8px', borderRadius: 99,
              background: i < 2 ? '#D4C4ED' : i === 2 ? '#FFF4E8' : '#f0ede8',
              color: i < 2 ? '#fff' : '#9E958F',
              fontWeight: i < 3 ? 600 : 400,
            }}>{s}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: '03',
    icon: '✨',
    color: '#F5D9B4',
    colorDark: '#c49a5a',
    title: 'Nyalakan & Rasakan',
    desc: 'Terima paketmu. Nyalakan lampunya. Rasakan keajaibannya.',
    visual: (
      <div style={{
        marginTop: 16,
        borderRadius: 14,
        overflow: 'hidden',
        border: '1.5px solid #F5D9B4',
        background: 'linear-gradient(160deg, #1a0a00 0%, #3d1f00 100%)',
        padding: '16px',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 36,
          filter: 'drop-shadow(0 0 12px #f5a623) drop-shadow(0 0 24px #f5a623)',
          marginBottom: 6,
        }}>🕯</div>
        <div style={{
          width: 60, height: 60, margin: '0 auto',
          borderRadius: 8,
          background: 'linear-gradient(160deg, #f5a623 0%, #fff7e6 60%, #f5d9b4 100%)',
          boxShadow: '0 0 20px 8px rgba(245,166,35,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24,
        }}>😊</div>
        <div style={{ fontSize: 10, color: '#F5D9B4', fontFamily: 'sans-serif', marginTop: 8, opacity: 0.8 }}>
          Cahaya hangat menyala ✨
        </div>
      </div>
    ),
  },
];

function Sparkle({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={style}>
      <path d="M10 2L11.2 8.8L18 10L11.2 11.2L10 18L8.8 11.2L2 10L8.8 8.8L10 2Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

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
    <section style={{ background: '#F2EDE6', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative sparkles background */}
      <Sparkle style={{ position: 'absolute', top: 40, left: '8%', color: '#D4C4ED', width: 28, height: 28 }} />
      <Sparkle style={{ position: 'absolute', top: 120, right: '10%', color: '#F2C4CE', width: 18, height: 18 }} />
      <Sparkle style={{ position: 'absolute', bottom: 80, left: '15%', color: '#F5D9B4', width: 22, height: 22 }} />
      <Sparkle style={{ position: 'absolute', bottom: 200, right: '7%', color: '#BFD7ED', width: 16, height: 16 }} />

      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div
          ref={el => { refs.current[0] = el; }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <Sparkle style={{ color: '#D4C4ED', width: 14, height: 14 }} />
            <p className="sans" style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#9E958F',
            }}>
              Untuk siapa?
            </p>
            <Sparkle style={{ color: '#D4C4ED', width: 14, height: 14 }} />
          </div>
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
            padding: '56px 40px',
            textAlign: 'center',
            border: '1px solid rgba(44,37,35,0.06)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle glow top */}
          <div style={{
            position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
            width: 300, height: 120,
            background: 'radial-gradient(ellipse, rgba(245,166,35,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
            <Sparkle style={{ color: '#F5D9B4', width: 14, height: 14 }} />
            <p className="sans" style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#9E958F',
            }}>
              Cara Pesan
            </p>
            <Sparkle style={{ color: '#F5D9B4', width: 14, height: 14 }} />
          </div>

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

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, alignItems: 'start' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                {/* Step */}
                <div style={{ flex: 1, padding: '0 12px' }}>
                  {/* Number circle */}
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: '50%',
                    background: s.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 14px',
                    boxShadow: `0 4px 16px ${s.color}88`,
                  }}>
                    <span style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 18, fontWeight: 700, color: '#2C2523',
                    }}>{s.n}</span>
                  </div>

                  {/* Icon */}
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>

                  {/* Title */}
                  <p style={{
                    fontFamily: 'Georgia, serif', fontSize: 15,
                    fontWeight: 700, color: '#2C2523', marginBottom: 8,
                  }}>
                    {s.title}
                  </p>

                  {/* Desc */}
                  <p className="sans" style={{ fontSize: 13, color: '#9E958F', lineHeight: 1.6 }}>
                    {s.desc}
                  </p>

                  {/* Mini visual */}
                  {s.visual}
                </div>

                {/* Arrow connector (not after last) */}
                {i < steps.length - 1 && (
                  <div className="step-arrow" style={{
                    alignSelf: 'flex-start',
                    marginTop: 26,
                    color: '#D4C4ED',
                    fontSize: 20,
                    flexShrink: 0,
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
