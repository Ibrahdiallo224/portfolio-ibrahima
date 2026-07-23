import { useState, useEffect } from 'react';

const links = [
  { label: 'À propos', href: '#apropos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
        <span style={{ color: 'var(--blue)' }}>D</span>iallo
        <span style={{ color: 'var(--purple)' }}>.</span>
      </span>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 32 }} className="nav-links">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontSize: '0.9rem', color: 'var(--gray)',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--white)'}
            onMouseLeave={e => e.target.style.color = 'var(--gray)'}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a href="#contact" style={{
        padding: '8px 20px', borderRadius: 6,
        border: '1px solid var(--purple)',
        color: 'var(--purple)', fontSize: '0.85rem',
        transition: 'all 0.2s',
      }}
        onMouseEnter={e => { e.target.style.background = 'var(--purple)'; e.target.style.color = '#fff'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--purple)'; }}
      >
        Me contacter
      </a>
    </nav>
  );
}
