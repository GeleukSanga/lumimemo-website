'use client';
import { useEffect, useRef } from 'react';

const problems = [
  {
    icon: '📱',
    title: 'Foto tersimpan di HP, tidak pernah dilihat lagi',
    desc: 'Ribuan foto kenangan terkubur di galeri. Kamu tahu mereka ada — tapi jarang terbuka.',
  },
  {
    icon: '🌸',
    title: 'Hadiah biasa terasa kurang bermakna',
    desc: 'Bunga layu, coklat habis, voucher terlupakan. Susah menemukan hadiah yang benar-benar berkesan.',
  },
  {
    icon: '💔',
    title: 'Ada orang yang sudah tiada, tapi ingin selalu dekat',
    desc: 'Foto almarhumah tersimpan rapi — tapi rasanya ada yang kurang. Sesuatu yang hadir, bukan hanya diingat.',
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('prob-visible'); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    cardRefs.current.forEach(el => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{
      background: '#FAF8F5',
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top border */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 80, height: 3,
        background: 'linear-gradient(90deg, transparent, #F2C4CE, transparent)',
        borderRadius: 99,
      }} />

      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* Header */}
        <div
          ref={ref}
          className="prob-fade"
          style={{ textAlign: 'center', marginBottom: 48, opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s, transform 0.6s' }}
        >
          <p className="sans" style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#c9848f', marginBottom: 14,
          }}>
            Kamu tidak sendiri
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-0.02em', color: '#2C2523', marginBottom: 16,
          }}>
            Pernah merasakan ini?
          </h2>
          <p className="sans" style={{
            color: '#9E958F', maxWidth: 440, margin: '0 auto',
            lineHeight: 1.7, fontSize: 15,
          }}>
            Banyak dari kita menyimpan kenangan begitu saja — padahal ada cara untuk{' '}
            <em style={{ color: '#c9848f' }}>menghidupkannya kembali.</em>
          </p>
        </div>

        {/* Problem cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {problems.map((p, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              className="prob-fade"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`,
                display: 'flex', alignItems: 'flex-start', gap: 20,
                background: '#fff',
                border: '1.5px solid rgba(44,37,35,0.07)',
                borderRadius: 18,
                padding: '24px 28px',
                boxShadow: '0 2px 12px rgba(44,37,35,0.05)',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 52, height: 52, flexShrink: 0,
                borderRadius: 14,
                background: '#FAE8EC',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24,
              }}>
                {p.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 16, fontWeight: 700,
                  color: '#2C2523', marginBottom: 6, lineHeight: 1.3,
                }}>
                  {p.title}
                </h3>
                <p className="sans" style={{
                  fontSize: 13, color: '#9E958F', lineHeight: 1.65,
                }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div
          className="prob-fade"
          style={{
            opacity: 0, transform: 'translateY(20px)',
            transition: 'opacity 0.6s 0.4s, transform 0.6s 0.4s',
            marginTop: 40, textAlign: 'center',
          }}
          ref={el => { cardRefs.current[3] = el; }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'linear-gradient(135deg, #FAE8EC 0%, #FFF4E8 100%)',
            border: '1.5px solid #F2C4CE',
            borderRadius: 99, padding: '12px 24px',
          }}>
            <span style={{ fontSize: 18 }}>✨</span>
            <span className="sans" style={{ fontSize: 14, fontWeight: 600, color: '#2C2523' }}>
              LumiMemo hadir untuk menjawab semua ini
            </span>
            <span style={{ fontSize: 18 }}>→</span>
          </div>
        </div>
      </div>

      <style>{`
        .prob-visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
