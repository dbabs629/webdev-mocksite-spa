import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Expertise from './sections/Expertise'
import Services from './sections/Services'
import Work from './sections/Work'
import Team from './sections/Team'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className='App'>
        <Hero />
        <Expertise />
        <Services />
        <Work />
        <Team />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
