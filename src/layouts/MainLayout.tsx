import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
