import Hero from '../components/Hero'
import ServiceHighlights from '../components/ServiceHighlights'
import ProjectsPreview from '../components/ProjectsPreview'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <section>
      <Hero
        title='Sustainable Mining, Marine, and Energy Solutions Across Africa'
        subtitle='Delivering quality, responsibility, and professionalism in every project.'
        ctaText='Explore Our Services'
        ctaLink='/services'
        backgroundImage='/images/hero-mining.jpg'
      />
      <ServiceHighlights />
      <ProjectsPreview />
      <CTABanner />
    </section>
  )
}
