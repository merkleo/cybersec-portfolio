const projects = [
  {
    id: '01',
    title: 'SIEM Dashboard Demo',
    desc: 'Demo funcional de correlación de eventos de seguridad en tiempo real con visualizaciones de amenazas.',
    tags: ['React', 'OpenText ArcSight', 'Presales'],
    status: 'LIVE',
    statusColor: 'var(--accent-primary)',
  },
  {
    id: '02',
    title: 'AppSec Pipeline PoC',
    desc: 'Prueba de concepto de integración SAST/DAST en CI/CD pipeline para cliente del sector financiero.',
    tags: ['Fortify', 'Jenkins', 'DevSecOps'],
    status: 'DEMO',
    statusColor: 'var(--accent-secondary)',
  },
  {
    id: '03',
    title: 'DLP Policy Framework',
    desc: 'Diseño de arquitectura de políticas DLP para protección de datos en entorno multi-cloud empresarial.',
    tags: ['Data Protection', 'Cloud', 'Compliance'],
    status: 'CASE STUDY',
    statusColor: 'var(--accent-warning)',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <p className="section-title"><span>//</span> Proyectos</p>
        <p className="section-subtitle">// projects.log — 3 entries found</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map(p => (
            <div key={p.id} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '1.75rem',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '1.5rem',
              alignItems: 'start',
              transition: 'border-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Número */}
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '2rem',
                color: 'var(--text-muted)',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {p.id}
              </span>

              {/* Contenido */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    letterSpacing: '1px',
                  }}>
                    {p.title}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: p.statusColor,
                    border: `1px solid ${p.statusColor}`,
                    padding: '0.15rem 0.5rem',
                    whiteSpace: 'nowrap',
                  }}>
                    {p.status}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-secondary)',
                      padding: '0.2rem 0.5rem',
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
