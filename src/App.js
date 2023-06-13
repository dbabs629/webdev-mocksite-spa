import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Expertise from './sections/Expertise'
import Services from './sections/Services'

function App() {
  return (
    <>
      <Navbar />
      <main className='App'>
        <Hero />
        <Expertise />
        <Services />
      </main>
    </>
  )
}

export default App
