const categories = [
  {
    title: 'Application Security',
    color: 'var(--accent-primary)',
    items: ['SAST / DAST', 'IAST', 'SCA', 'Pen Testing', 'DevSecOps'],
  },
  {
    title: 'Cyber Security',
    color: 'var(--accent-secondary)',
    items: ['SIEM / SOAR', 'XDR / EDR', 'Threat Intelligence', 'SOC Operations', 'Incident Response'],
  },
  {
    title: 'Data Protection',
    color: 'var(--accent-warning)',
    items: ['DLP', 'Encryption', 'IAM', 'Data Classification', 'Compliance'],
  },
  {
    title: 'Presales & Strategy',
    color: '#a78bfa',
    items: ['Demo Engineering', 'RFP / RFI', 'PoC Design', 'Solution Architecture', 'Executive Presentations'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-title"><span>//</span> Habilidades</p>
        <p className="section-subtitle">// skill_matrix.json — loaded</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {categories.map(cat => (
            <div key={cat.title} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderTop: `3px solid ${cat.color}`,
              padding: '1.5rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = `0 8px 30px rgba(0,0,0,0.4)`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                color: cat.color,
                fontSize: '0.9rem',
                marginBottom: '1rem',
                letterSpacing: '1px',
              }}>
                {cat.title}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {cat.items.map(item => (
                  <li key={item} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    padding: '0.35rem 0',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{ color: cat.color, fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>▶</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
