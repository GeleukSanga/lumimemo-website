'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => ref.current?.classList.add('visible'), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #FAF8F5 0%, #F2EDE6 55%, #FAE8EC 100%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 64, alignItems: 'center' }}
          className="hero-grid"
        >

          {/* LEFT — Copy */}
          <div ref={ref} className="fade-up">
            {/* Eyebrow */}
            <div className="sans" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 14px', borderRadius: 99,
              background: '#F2C4CE', color: '#7A3D46',
              fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: 28,
            }}>
              🕯 Hadiah Paling Bermakna
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#2C2523',
              marginBottom: 24,
            }}>
              Mereka selalu<br />
              <span style={{ color: '#BFD7ED', WebkitTextStroke: '1.5px #5A8DBD' }}>
                ada dalam
              </span>{' '}
              cahayamu
            </h1>

            {/* Sub */}
            <p className="sans" style={{
              fontSize: 17, lineHeight: 1.7,
              color: '#5A524E', maxWidth: 420,
              marginBottom: 40,
            }}>
              Ubah foto orang tersayangmu menjadi lampu tidur yang bercahaya hangat.
              Setiap malam, wajah mereka menyambutmu dalam cahaya yang tenang.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/6289725239680?text=Halo,%20saya%20ingin%20memesan%20lampu%20kenangan%20litophane"
                target="_blank" rel="noopener noreferrer"
                className="sans"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 99,
                  background: '#2C2523', color: '#FAF8F5',
                  fontWeight: 600, fontSize: 15,
                  textDecoration: 'none', letterSpacing: '0.01em',
                  boxShadow: '0 4px 20px rgba(44,37,35,0.2)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'}
              >
                <WaIcon /> Pesan Lewat WhatsApp
              </a>

              <a
                href="#galeri"
                className="sans"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '14px 24px', borderRadius: 99,
                  border: '1.5px solid rgba(44,37,35,0.2)',
                  color: '#5A524E', fontSize: 15, fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                Lihat Portfolio ↓
              </a>
            </div>

            {/* Trust strip */}
            <div className="sans" style={{
              display: 'flex', gap: 24, marginTop: 48,
              flexWrap: 'wrap',
            }}>
              {['⚡ Proses 3–5 hari', '📦 Kirim se-Indonesia', '🎁 Bisa beri hadiah'].map(t => (
                <span key={t} style={{ fontSize: 13, color: '#9E958F' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — Featured photo */}
          <div style={{ position: 'relative' }} className="fade-up visible" >
            {/* Main card */}
            <div style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              aspectRatio: '3/4',
              boxShadow: '0 20px 60px rgba(44,37,35,0.15), 0 4px 16px rgba(44,37,35,0.08)',
            }}>
              <Image
                src="/portfolio/p7.jpg"
                alt="Lampu litophane kenangan pernikahan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* caption badge */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20, right: 20,
                background: 'rgba(250,248,245,0.92)',
                backdropFilter: 'blur(12px)',
                borderRadius: 14,
                padding: '12px 16px',
              }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: '#2C2523', marginBottom: 2 }}>
                  Hari paling indah — diabadikan selamanya
                </p>
                <p className="sans" style={{ fontSize: 11, color: '#9E958F', letterSpacing: '0.04em' }}>
                  Litophane Custom · Pernikahan Adat Jawa
                </p>
              </div>
            </div>

            {/* Floating mini card */}
            <div style={{
              position: 'absolute',
              top: -20, right: -20,
              background: '#FAF8F5',
              borderRadius: 16,
              padding: 16,
              boxShadow: '0 8px 30px rgba(44,37,35,0.12)',
              width: 140,
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>💛</div>
              <p className="sans" style={{ fontSize: 12, fontWeight: 600, color: '#2C2523', marginBottom: 2 }}>
                100+ Kenangan
              </p>
              <p className="sans" style={{ fontSize: 11, color: '#9E958F' }}>sudah dipesan</p>
            </div>

            {/* Decorative soft circle */}
            <div style={{
              position: 'absolute',
              bottom: -40, left: -40,
              width: 200, height: 200,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F2C4CE 0%, #BFD7ED 100%)',
              opacity: 0.3,
              zIndex: -1,
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
