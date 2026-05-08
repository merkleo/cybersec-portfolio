export default function Contact() {
  return (
    <section id="contacto" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <p className="section-title"><span>//</span> Contacto</p>
        <p className="section-subtitle">// secure_channel.init()</p>

        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          padding: '2.5rem',
        }}>
          {/* Líneas de terminal */}
          {[
            ['EMAIL', 'tu.email@dominio.com'],
            ['LINKEDIN', 'linkedin.com/in/tu-usuario'],
            ['GITHUB', 'github.com/tu-usuario'],
            ['UBICACIÓN', 'Lima, Perú'],
          ].map(([key, val]) => (
            <div key={key} style={{
              display: 'flex',
              gap: '1rem',
              padding: '0.75rem 0',
              borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
            }}>
              <span style={{ color: 'var(--text-muted)', minWidth: '100px' }}>{key}</span>
              <span style={{ color: 'var(--accent-primary)' }}>{val}</span>
            </div>
          ))}

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a href="mailto:tu.email@dominio.com" className="btn-primary">
              Iniciar contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
