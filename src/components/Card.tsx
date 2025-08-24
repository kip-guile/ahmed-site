import { ReactNode } from 'react'
import styles from './Card.module.scss'

type CardProps = {
  image?: string
  icon?: ReactNode
  title: string
  description: string
}

export default function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
