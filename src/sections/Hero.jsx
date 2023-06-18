import ContactBtn from '../components/ContactBtn'
function Hero() {
  return (
    <section
      id='hero'
      className='hero relative w-full flex flex-col gap-4 md:gap-8 text-center text-white py-48 pt-56'>
      <span className='hero-span' />
      <h1 className='smooth mt-4 text-3xl font-bold lg:text-extrabold md:text-5xl lg:text-6xl xl:text-7xl'>
        Build <br className='lg:hidden' /> The Right <br /> Digital Product
      </h1>
      <p className='smooth w-96 mx-auto font-light md:font-normal sm:text-base lg:w-1/2 lg:text-xl xl:text-2xl'>
        Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod.
      </p>
      <ContactBtn />
    </section>
  )
}
export default Hero
