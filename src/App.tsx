import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Sustainability from './pages/Sustainability'
import Careers from './pages/Careers'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/sustainability' element={<Sustainability />} />
          <Route path='/careers' element={<Careers />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}
