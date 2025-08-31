import Hero from '../components/Hero'
import ServiceHighlights from '../components/ServiceHighlights'
import ProjectsPreview from '../components/ProjectsPreview'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <section>
      <Hero />
      <ServiceHighlights />
      <ProjectsPreview />
      <CTABanner />
    </section>
  )
}
