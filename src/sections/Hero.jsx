function Hero() {
  return (
    <section id='hero' className='hero relative w-full'>
      <span className='hero-span' />
      <div className='w-full flex flex-col gap-4 pt-10 md:gap-8 text-center text-white'>
        <h1 className='smooth text-3xl font-bold md:text-4xl lg:text-extrabold lg:text-5xl'>
          Build <br className='xl:hidden' /> The Right <br /> Digital Product
        </h1>
        <p className='smooth max-w-xs mx-auto text-sm font-light sm:font-normal md:text-base lg:max-w-md lg:w-1/2 lg:text-xl'>
          Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod.
        </p>
        <button
          onClick={() => (window.location = '#contact')}
          className='smooth mx-auto py-2 px-5 text-sm rounded-full bg-[#2378FF] border-[#1e67db] border-r-2 border-b-2 shadow-lg hover:scale-110 hover:bg-[#F49117] hover:border-[#dd8316] md:py-3 md:px-8 md:text-base md:font-semibold'>
          Contact Us
        </button>
      </div>
    </section>
  )
}
export default Hero
