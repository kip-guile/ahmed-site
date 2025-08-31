import { useState } from 'react'
import styles from './Contact.module.scss'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.contact}>
      <div className={styles.overlay}>
        <h2>Contact Us</h2>
        <div className={styles.details}>
          <div>
            <Mail size={20} color='#c8a951' />
            <p>abodaemperorservices@gmail.com</p>
          </div>
          <div>
            <Phone size={20} color='#c8a951' />
            <p>+234 806 955 5150 (Nigeria)</p>
          </div>
          <div>
            <Phone size={20} color='#c8a951' />
            <p>+231 770 424848 (Liberia)</p>
          </div>
          <div>
            <Phone size={20} color='#c8a951' />
            <p>+232 776 30181 (Sierra Leone)</p>
          </div>
          <div>
            <MapPin size={20} color='#c8a951' />
            <p>No. 1, Faith Street, Comfort Uboh, Apapa, Lagos, Nigeria</p>
          </div>
          <div>
            <MapPin size={20} color='#c8a951' />
            <p>
              No. 6, Cairo Street House 10, Off Adetokunbo Ademola Crescent,
              Wuse 2, Abuja FCT, Nigeria
            </p>
          </div>
          <div>
            <MapPin size={20} color='#c8a951' />
            <p>
              Robert Field Highway, Marshall Road, Around Boy’s Town, Margibi
              County, Liberia
            </p>
          </div>
          <div>
            <MapPin size={20} color='#c8a951' />
            <p>No. 91, Fort Street, Freetown, Sierra Leone</p>
          </div>
          <div>
            <MapPin size={20} color='#c8a951' />
            <p>999 Airport Ferry Road, Lungi, Sierra Leone</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name
            <input type='text' name='name' required placeholder='Your Name' />
          </label>
          <label>
            Email
            <input
              type='email'
              name='email'
              required
              placeholder='Your Email'
            />
          </label>
          <label>
            Message
            <textarea
              name='message'
              required
              placeholder='Write your message...'
            />
          </label>
          <button type='submit' disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <p className={styles.success}>
            ✅ Your message has been sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className={styles.error}>
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  )
}
