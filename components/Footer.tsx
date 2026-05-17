'use client';

export default function Footer() {
  return (
    <footer style={{
      background: '#2C2523',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 18 }}>🕯</span>
          <span style={{
            fontFamily: 'Georgia, serif', fontWeight: 700,
            fontSize: 16, color: '#FAF8F5',
          }}>
            LumiMemo
          </span>
        </div>
        <p className="sans" style={{ fontSize: 12, color: 'rgba(250,248,245,0.45)', marginBottom: 4 }}>
          Kenangan dalam Cahaya · Handmade with ❤️ in Jogja
        </p>
        <p className="sans" style={{ fontSize: 11, color: 'rgba(250,248,245,0.25)' }}>
          © 2025 LumiMemo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
