import { useState, useEffect } from 'react'

const links = ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(5, 10, 15, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--accent-primary)' }}>
        <span style={{ color: 'var(--text-muted)' }}>[</span>
        SEC
        <span style={{ color: 'var(--accent-secondary)' }}>_</span>
        PORTFOLIO
        <span style={{ color: 'var(--text-muted)' }}>]</span>
      </div>

      {/* Links desktop */}
      <ul style={{
        display: 'flex', gap: '2rem', listStyle: 'none',
        fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
        letterSpacing: '1px',
      }}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
