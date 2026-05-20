'use client';
import { useEffect, useRef } from 'react';

export default function RealView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      padding: '60px 24px',
      background: 'linear-gradient(135deg, #FBF8F3 0%, #F5F0E8 100%)',
      textAlign: 'center',
    }}>
      <div ref={containerRef} style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#D97B6C',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            ✨ Lihat Hasil Aslinya
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 32,
            fontWeight: 700,
            color: '#2C2523',
            marginBottom: 16,
            lineHeight: 1.3,
          }}>
            Cahaya Hangat yang Nyata
          </h2>
          <p style={{
            fontSize: 16,
            color: '#7B726D',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Inilah wujud asli LumiMemo saat menyala. Cahaya yang hangat, personal, dan membawa kenangan kembali hidup di setiap momen.
          </p>
        </div>

        {/* GIF Container */}
        <div style={{
          position: 'relative',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(44, 37, 35, 0.15)',
          background: '#2C2523',
          padding: 8,
          marginBottom: 40,
        }}>
          <img
            src="/gifs/review_demo.gif"
            alt="LumiMemo Product Demo - Real Glow"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 12,
            }}
          />
        </div>

        {/* Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24,
          marginTop: 40,
        }}>
          {[
            { icon: '💡', title: 'Cahaya Nyata', desc: 'Bukan render, ini produk asli yang menyala' },
            { icon: '🎨', title: 'Warna Hangat', desc: 'Pencahayaan yang lembut dan menenangkan' },
            { icon: '📸', title: 'Foto Kamu', desc: 'Fotomu menjadi karya seni yang bersinar' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: 20,
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: 12,
              border: '1px solid rgba(217, 123, 108, 0.2)',
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#2C2523',
                marginBottom: 8,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: 13,
                color: '#7B726D',
                lineHeight: 1.5,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @media (max-width: 640px) {
          h2 {
            font-size: 24px !important;
          }
          
          p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
