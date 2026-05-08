import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border)',
      }}>
        // Built with React + Vite · {new Date().getFullYear()}
      </footer>
    </>
  )
}
