'use client';
import { trackedWaLink, UtmContext } from '@/lib/wa';
import Countdown from '@/components/Countdown';

type CTASectionProps = {
  title: string;
  subtext: string;
  waText: string;
  utmContext?: UtmContext;
};

function Sparkle({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={style}>
      <path d="M10 2L11.2 8.8L18 10L11.2 11.2L10 18L8.8 11.2L2 10L8.8 8.8L10 2Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function StarRating() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 28 }}>
      <div style={{ display: 'flex', gap: 3 }}>
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5a623">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <span className="sans" style={{ fontSize: 13, color: 'rgba(250,248,245,0.75)', fontWeight: 600 }}>
        100+ pelanggan puas
      </span>
    </div>
  );
}

export default function CTASection({ title, subtext, waText, utmContext }: CTASectionProps) {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #2C1A0E 0%, #4A2810 40%, #2C1A0E 100%)',
      padding: '100px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 300,
        background: 'radial-gradient(ellipse, rgba(245,166,35,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: '15%',
        width: 250, height: 200,
        background: 'radial-gradient(ellipse, rgba(242,196,206,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: '10%',
        width: 200, height: 180,
        background: 'radial-gradient(ellipse, rgba(212,196,237,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Sparkle decorations */}
      <Sparkle style={{ position: 'absolute', top: 40, left: '12%', color: '#F5D9B4', width: 24, height: 24 }} />
      <Sparkle style={{ position: 'absolute', top: 80, right: '14%', color: '#F2C4CE', width: 16, height: 16 }} />
      <Sparkle style={{ position: 'absolute', bottom: 60, left: '20%', color: '#D4C4ED', width: 18, height: 18 }} />
      <Sparkle style={{ position: 'absolute', bottom: 100, right: '18%', color: '#F5D9B4', width: 22, height: 22 }} />

      {/* Mini product preview — pojok kiri */}
      <div style={{
        position: 'absolute', left: '4%', top: '50%', transform: 'translateY(-50%)',
        width: 90, height: 120,
        borderRadius: 14,
        background: 'linear-gradient(160deg, #f5a623 0%, #fff7e6 60%, #f5d9b4 100%)',
        boxShadow: '0 0 40px 16px rgba(245,166,35,0.25), 0 8px 32px rgba(0,0,0,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 40,
        opacity: 0.85,
      }} className="cta-product-float">
        😊
      </div>

      {/* Mini product preview — pojok kanan */}
      <div style={{
        position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)',
        width: 75, height: 100,
        borderRadius: 12,
        background: 'linear-gradient(160deg, #F2C4CE 0%, #fff7e6 60%, #f5a623 100%)',
        boxShadow: '0 0 30px 12px rgba(242,196,206,0.2), 0 8px 24px rgba(0,0,0,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32,
        opacity: 0.7,
      }} className="cta-product-float-right">
        👨‍👩‍👧
      </div>

      <div style={{ maxWidth: 580, margin: '0 auto', position: 'relative' }}>

        {/* Candle icon with glow */}
        <div style={{
          fontSize: 52, marginBottom: 20,
          filter: 'drop-shadow(0 0 16px rgba(245,166,35,0.8)) drop-shadow(0 0 32px rgba(245,166,35,0.4))',
        }}>🕯</div>

        {/* Star rating */}
        <StarRating />

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
          fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#FAF8F5', marginBottom: 20,
        }}>
          {title}
        </h2>

        <p className="sans" style={{
          fontSize: 16, lineHeight: 1.7,
          color: 'rgba(250,248,245,0.65)',
          maxWidth: 520, margin: '0 auto 12px',
        }}>
          {subtext}
        </p>

        <p className="sans" style={{
          fontSize: 13, color: 'rgba(250,248,245,0.4)',
          fontStyle: 'italic', marginBottom: 24,
        }}>
          Konsultasi gratis · Tanpa biaya komitmen · Respon cepat
        </p>

        {/* Badge pills */}
        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: 32,
        }}>
          <span className="sans" style={{
            background: 'rgba(250,248,245,0.1)',
            border: '1px solid rgba(250,248,245,0.2)',
            backdropFilter: 'blur(8px)',
            borderRadius: 99,
            padding: '7px 16px', fontSize: 13, color: '#FAF8F5', fontWeight: 600,
          }}>
            🎁 Gratis ongkir hari ini
          </span>
          <span className="sans" style={{
            background: 'rgba(250,248,245,0.1)',
            border: '1px solid rgba(250,248,245,0.2)',
            backdropFilter: 'blur(8px)',
            borderRadius: 99,
            padding: '7px 16px', fontSize: 13, color: '#FAF8F5', fontWeight: 600,
          }}>
            💯 Garansi uang kembali
          </span>
        </div>

        {/* Countdown Timer */}
        <Countdown variant="cta" />

        {/* CTA Button */}
        <a
          href={trackedWaLink(waText, utmContext)}
          target="_blank" rel="noopener noreferrer"
          className="sans cta-btn"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '18px 40px', borderRadius: 99,
            background: 'linear-gradient(135deg, #f5a623 0%, #e8922a 100%)',
            color: '#2C1A0E',
            fontWeight: 700, fontSize: 16,
            textDecoration: 'none', letterSpacing: '0.01em',
            boxShadow: '0 8px 30px rgba(245,166,35,0.4), 0 0 0 0 rgba(245,166,35,0)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 14px 40px rgba(245,166,35,0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(245,166,35,0.4)';
          }}
        >
          <WaIcon />
          Chat WhatsApp Sekarang
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-product-float { display: none !important; }
          .cta-product-float-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
