import { useState, useEffect } from 'react'

const lines = [
  '> Inicializando sistema...',
  '> Cargando perfil de seguridad...',
  '> Acceso concedido.',
  '> Bienvenido.',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState([])
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < lines.length) {
        setDisplayed(prev => [...prev, lines[i]])
        i++
      } else {
        clearInterval(interval)
      }
    }, 700)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow background */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '60%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,245,160,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Terminal block */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          minHeight: '6rem',
        }}>
          {displayed.map((line, i) => (
            <div key={i} style={{
              marginBottom: '0.3rem',
              color: i === displayed.length - 1 ? 'var(--accent-primary)' : 'var(--text-secondary)',
            }}>
              {line}
            </div>
          ))}
          <span style={{ opacity: cursor ? 1 : 0, color: 'var(--accent-primary)' }}>█</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Tu Nombre<br />
          <span style={{ color: 'var(--accent-primary)', fontSize: '0.7em' }}>
            Cybersecurity Engineer
          </span>
        </h1>

        <p style={{
          maxWidth: '520px',
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '2.5rem',
          lineHeight: 1.7,
        }}>
          Especialista en <strong style={{ color: 'var(--accent-secondary)' }}>seguridad ofensiva y defensiva</strong>,
          presales engineering y arquitecturas de protección de datos empresariales.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#proyectos" className="btn-primary">Ver proyectos</a>
          <a href="#contacto" className="btn-primary" style={{
            borderColor: 'var(--accent-secondary)',
            color: 'var(--accent-secondary)',
          }}>
            Contactar
          </a>
        </div>

        {/* Badges */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {['OpenText', 'AppSec', 'SIEM/SOAR', 'Data Protection'].map(badge => (
            <span key={badge} className="tag">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
