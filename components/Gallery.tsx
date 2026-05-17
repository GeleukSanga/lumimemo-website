'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const items = [
  { src: '/portfolio/p1.jpg', caption: 'Kenangan di Batu Caves', sub: 'Pasangan', tag: 'Pasangan' },
  { src: '/portfolio/p2.jpg', caption: 'Ayah & buah hati', sub: 'Keluarga', tag: 'Keluarga' },
  { src: '/portfolio/p3.jpg', caption: 'Gadis penuh semangat', sub: 'Personal', tag: 'Personal' },
  { src: '/portfolio/p4.jpg', caption: 'Momen santai terbaik', sub: 'Personal', tag: 'Personal' },
  { src: '/portfolio/p5.jpg', caption: 'Firman yang menerangi', sub: 'Religi', tag: 'Religi' },
  { src: '/portfolio/p6.jpg', caption: 'Bunda Maria', sub: 'Religi', tag: 'Religi' },
  { src: '/portfolio/p7.jpg', caption: 'Hari pernikahan', sub: 'Pernikahan', tag: 'Pernikahan' },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  Pasangan:   { bg: '#F2C4CE', color: '#7A3D46' },
  Keluarga:   { bg: '#BFD7ED', color: '#2A5A7A' },
  Personal:   { bg: '#E8F2FB', color: '#2A5A7A' },
  Religi:     { bg: '#EDE8F5', color: '#5A3A7A' },
  Pernikahan: { bg: '#FAEAE0', color: '#7A4A2A' },
};

export default function Gallery() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    refs.current.forEach(el => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="galeri" style={{ background: '#FAF8F5', padding: '96px 24px' }}>
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
            Portfolio
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700, lineHeight: 1.15,
            letterSpacing: '-0.02em', color: '#2C2523', marginBottom: 16,
          }}>
            Setiap foto,{' '}
            <span style={{
              background: 'linear-gradient(90deg, #BFD7ED, #F2C4CE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              sebuah kenangan
            </span>
          </h2>
          <p className="sans" style={{
            color: '#9E958F', maxWidth: 440, margin: '0 auto', lineHeight: 1.65, fontSize: 15,
          }}>
            Bukan sekadar lampu — ini cara kamu mengatakan bahwa mereka selalu ada di hatimu.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {items.map((item, i) => {
            const tc = tagColors[item.tag] ?? { bg: '#E8F2FB', color: '#2A5A7A' };
            return (
              <div
                key={i}
                ref={el => { refs.current[i + 1] = el; }}
              className="card-shadow card-shadow-hover"
              style={{
                  borderRadius: 18,
                  overflow: 'hidden',
                  background: '#fff',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/5' }}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Caption */}
                <div style={{ padding: '16px 18px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <p style={{
                        fontFamily: 'Georgia, serif', fontSize: 15,
                        color: '#2C2523', marginBottom: 3, lineHeight: 1.3,
                      }}>
                        {item.caption}
                      </p>
                      <p className="sans" style={{ fontSize: 12, color: '#9E958F' }}>{item.sub}</p>
                    </div>
                    <span className="sans" style={{
                      padding: '3px 10px', borderRadius: 99,
                      background: tc.bg, color: tc.color,
                      fontSize: 11, fontWeight: 600,
                      whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          ref={el => { refs.current[items.length + 1] = el; }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <p className="sans" style={{ color: '#9E958F', marginBottom: 20, fontSize: 15 }}>
            Punya foto istimewa? Kami bantu wujudkan.
          </p>
          <a
            href="https://wa.me/6289725239680?text=Halo,%20saya%20ingin%20konsultasi%20litophane"
            target="_blank" rel="noopener noreferrer"
            className="sans"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '12px 26px', borderRadius: 99,
              border: '1.5px solid #2C2523',
              color: '#2C2523', fontSize: 14, fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#2C2523';
              (e.currentTarget as HTMLAnchorElement).style.color = '#FAF8F5';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#2C2523';
            }}
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
