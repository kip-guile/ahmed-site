import styles from './Sustainability.module.scss'
import Card from '../components/Card'
import { Leaf, Shield, Users } from 'lucide-react'

export default function Sustainability() {
  return (
    <section className={styles.sustainability}>
      <h2>Sustainability</h2>
      <p className={styles.intro}>
        At ABODA Emperor, sustainability is not a checkbox — it’s the way we
        operate. From protecting the environment to ensuring worker safety and
        uplifting communities, we are committed to leaving a lasting positive
        impact.
      </p>
      <div className={styles.grid}>
        <Card
          image='/images/sustainability-environment.jpg'
          icon={<Leaf size={40} color='#c8a951' />}
          title='Environment'
          description='We minimize environmental impact by following frameworks like the Kimberley Process and OECD guidelines, ensuring responsible use of resources.'
        />
        <Card
          image='/images/sustainability-safety.jpg'
          icon={<Shield size={40} color='#c8a951' />}
          title='Safety'
          description='We enforce strict occupational health and safety standards to protect our workforce and host communities across Africa.'
        />
        <Card
          image='/images/sustainability-community.jpg'
          icon={<Users size={40} color='#c8a951' />}
          title='Community'
          description='We invest in workforce development, gender inclusion, and local infrastructure projects that benefit host communities.'
        />
      </div>
    </section>
  )
}
