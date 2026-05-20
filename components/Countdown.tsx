'use client';
import { useEffect, useState } from 'react';

function getSecondsUntilReset(): number {
  // Reset setiap jam 20:00 WIB (UTC+7 = 13:00 UTC)
  const now = new Date();
  const wib = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

  const reset = new Date(wib);
  reset.setHours(20, 0, 0, 0);

  // Jika sudah lewat jam 20:00 hari ini, target jam 20:00 besok
  if (wib >= reset) {
    reset.setDate(reset.getDate() + 1);
  }

  return Math.max(0, Math.floor((reset.getTime() - wib.getTime()) / 1000));
}

type CountdownProps = {
  variant?: 'hero' | 'cta';
};

export default function Countdown({ variant = 'hero' }: CountdownProps) {
  const [secs, setSecs] = useState<number | null>(null);

  useEffect(() => {
    setSecs(getSecondsUntilReset());
    const interval = setInterval(() => {
      setSecs(getSecondsUntilReset());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (secs === null) return null; // Hindari hydration mismatch

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  const pad = (n: number) => String(n).padStart(2, '0');

  const isHero = variant === 'hero';
  const bg = isHero ? 'rgba(255,255,255,0.85)' : 'rgba(44,37,35,0.08)';
  const borderColor = isHero ? 'rgba(44,37,35,0.12)' : 'rgba(44,37,35,0.15)';
  const textColor = isHero ? '#2C2523' : '#FFFFFF'; // White untuk CTA (dark bg), dark brown untuk Hero
  const accentColor = '#D97B6C';

  const units = [
    { label: 'JAM', value: pad(h) },
    { label: 'MENIT', value: pad(m) },
    { label: 'DETIK', value: pad(s) },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      margin: isHero ? '16px 0 4px' : '0 0 28px',
    }}>
      <p className="sans" style={{
        fontSize: 12,
        fontWeight: 600,
        color: accentColor,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>
        🔥 Gratis ongkir berakhir dalam
      </p>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {units.map(({ label, value }, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: bg,
              border: `1px solid ${borderColor}`,
              borderRadius: 10,
              padding: '10px 14px',
              minWidth: 54,
              backdropFilter: 'blur(6px)',
              boxShadow: '0 2px 8px rgba(44,37,35,0.06)',
            }}>
              <span style={{
                fontFamily: 'Georgia, serif',
                fontSize: 26,
                fontWeight: 700,
                color: textColor,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {value}
              </span>
              <span className="sans" style={{
                fontSize: 9,
                fontWeight: 700,
                color: '#9E958F',
                letterSpacing: '0.08em',
                marginTop: 4,
              }}>
                {label}
              </span>
            </div>
            {i < 2 && (
              <span style={{
                fontFamily: 'Georgia, serif',
                fontSize: 22,
                fontWeight: 700,
                color: accentColor,
                lineHeight: 1,
                marginBottom: 12,
              }}>
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
