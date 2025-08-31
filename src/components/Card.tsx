import React, { ReactNode } from 'react'
import styles from './Card.module.scss'

interface ImageSources {
  srcset: string
  type: string
}

interface ImageObject {
  sources?: Record<string, ImageSources>
  img?: { src: string }
}

type CardProps = {
  image?: string | ImageObject
  icon?: ReactNode
  title: string
  description: string
}

export default function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      {image && typeof image === 'object' && 'sources' in image ? (
        <picture>
          {Object.values(image.sources || {}).map((src, i) => (
            <source key={i} srcSet={src.srcset} type={src.type} sizes='100vw' />
          ))}
          <img
            src={image.img?.src || ''}
            alt={title}
            className={styles.image}
            loading='lazy'
            decoding='async'
          />
        </picture>
      ) : (
        image && (
          <img src={image as string} alt={title} className={styles.image} />
        )
      )}

      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
