import ContactBtn from '../components/ContactBtn'
function Hero() {
  return (
    <section
      id='hero'
      className='hero w-full h-full flex flex-col space-y-8 text-center text-white'>
      <h1 className='smooth text-3xl font-bold lg:text-extrabold md:text-5xl lg:text-6xl xl:text-7xl'>
        Build <br className='lg:hidden' /> The Right <br /> Digital Product
      </h1>
      <p className='smooth h-8 sm:font-light md:font-normal md:text-lg lg:font-semibold lg:text-xl xl:text-2xl'>
        Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod.
      </p>
      <ContactBtn />
    </section>
  )
}
export default Hero
