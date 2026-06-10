import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Education from '@/components/education'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Projects />
      <section id="education">
        <Education />
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
