'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => ref.current?.classList.add('visible'), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT — Copy */}
          <div ref={ref} className="fade-up hero-copy">
            {/* Eyebrow */}
            <div className="sans hero-eyebrow">
              🕯 Hadiah Paling Bermakna
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              Mereka selalu<br />
              <span className="hero-headline-accent">ada dalam</span>{' '}
              cahayamu
            </h1>

            {/* Sub */}
            <p className="sans hero-sub">
              Ubah foto orang tersayangmu menjadi lampu tidur yang bercahaya hangat.
              Setiap malam, wajah mereka menyambutmu dalam cahaya yang tenang.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <a
                href="https://wa.me/628972523968?text=Halo,%20saya%20ingin%20memesan%20lampu%20kenangan%20litophane"
                target="_blank" rel="noopener noreferrer"
                className="sans btn-primary"
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'}
              >
                <WaIcon /> Pesan Lewat WhatsApp
              </a>

              <a href="#galeri" className="sans btn-secondary">
                Lihat Portfolio ↓
              </a>
            </div>

            {/* Trust strip */}
            <div className="sans hero-trust">
              {['⚡ Proses 3–5 hari', '📦 Kirim se-Indonesia', '🎁 Bisa beri hadiah'].map(t => (
                <span key={t} className="hero-trust-item">{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — Featured video */}
          <div className="hero-image-wrap fade-up visible">
            {/* Main card */}
            <div className="hero-image-card">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
              >
                <source src="/litophane-hero.webm" type="video/webm" />
                <source src="/litophane-hero.mp4" type="video/mp4" />
              </video>
              {/* caption badge */}
              <div className="hero-image-caption">
                <p style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: '#2C2523', marginBottom: 2 }}>
                  Lihat produk aslinya — bercahaya hangat
                </p>
                <p className="sans" style={{ fontSize: 11, color: '#9E958F', letterSpacing: '0.04em' }}>
                  Litophane Custom · Lampu Kenangan
                </p>
              </div>
            </div>

            {/* Floating mini card */}
            <div className="hero-badge">
              <div style={{ fontSize: 24, marginBottom: 6 }}>💛</div>
              <p className="sans" style={{ fontSize: 12, fontWeight: 600, color: '#2C2523', marginBottom: 2 }}>
                100+ Kenangan
              </p>
              <p className="sans" style={{ fontSize: 11, color: '#9E958F' }}>sudah dipesan</p>
            </div>

            {/* Decorative soft circle */}
            <div className="hero-deco-circle" />
          </div>

        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(160deg, #FAF8F5 0%, #F2EDE6 55%, #FAE8EC 100%);
          display: flex;
          align-items: center;
          padding-top: 80px;
        }

        .hero-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 60px 24px;
          width: 100%;
        }

        /* ── Grid: 2-col desktop, 1-col mobile ── */
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
        }

        /* ── Copy ── */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 99px;
          background: #F2C4CE;
          color: #7A3D46;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-headline {
          font-family: Georgia, serif;
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: #2C2523;
          margin-bottom: 20px;
        }

        .hero-headline-accent {
          color: #BFD7ED;
          -webkit-text-stroke: 1.5px #5A8DBD;
        }

        .hero-sub {
          font-size: 16px;
          line-height: 1.7;
          color: #5A524E;
          max-width: 420px;
          margin-bottom: 36px;
        }

        /* ── CTAs ── */
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 0;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 99px;
          background: #2C2523;
          color: #FAF8F5;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 20px rgba(44,37,35,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 14px 24px;
          border-radius: 99px;
          border: 1.5px solid rgba(44,37,35,0.2);
          color: #5A524E;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: border-color 0.2s;
          white-space: nowrap;
        }

        /* ── Trust strip ── */
        .hero-trust {
          display: flex;
          gap: 20px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .hero-trust-item {
          font-size: 13px;
          color: #9E958F;
        }

        /* ── Image side ── */
        .hero-image-wrap {
          position: relative;
        }

        .hero-image-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 3/4;
          box-shadow: 0 20px 60px rgba(44,37,35,0.15), 0 4px 16px rgba(44,37,35,0.08);
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-image-caption {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(250,248,245,0.92);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          padding: 12px 16px;
        }

        .hero-badge {
          position: absolute;
          top: -20px;
          right: -20px;
          background: #FAF8F5;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 8px 30px rgba(44,37,35,0.12);
          width: 140px;
        }

        .hero-deco-circle {
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F2C4CE 0%, #BFD7ED 100%);
          opacity: 0.3;
          z-index: -1;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 70px;
            align-items: flex-start;
          }

          .hero-container {
            padding: 40px 20px 60px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          /* Gambar dulu di mobile */
          .hero-image-wrap {
            order: -1;
            margin-bottom: 36px;
          }

          .hero-image-card {
            aspect-ratio: 4/3;
            border-radius: 18px;
          }

          /* Badge jangan keluar layar */
          .hero-badge {
            top: -14px;
            right: -10px;
            width: 120px;
            padding: 12px;
          }

          .hero-deco-circle {
            width: 140px;
            height: 140px;
            bottom: -24px;
            left: -20px;
          }

          .hero-eyebrow {
            font-size: 10px;
            margin-bottom: 16px;
          }

          .hero-headline {
            font-size: clamp(1.8rem, 7vw, 2.4rem);
            margin-bottom: 16px;
          }

          .hero-sub {
            font-size: 15px;
            margin-bottom: 28px;
            max-width: 100%;
          }

          .hero-ctas {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
            font-size: 15px;
            padding: 15px 24px;
          }

          .hero-trust {
            margin-top: 28px;
            gap: 12px;
          }

          .hero-trust-item {
            font-size: 12px;
          }
        }

        /* ── SMALL MOBILE (≤ 380px) ── */
        @media (max-width: 380px) {
          .hero-container {
            padding: 32px 16px 48px;
          }

          .hero-badge {
            width: 100px;
            padding: 10px;
            right: -6px;
          }
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
