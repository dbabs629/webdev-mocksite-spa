function Hero() {
  return (
    <section
      id='hero'
      className='hero relative w-full h-full flex items-center py-32 lg:py-0 lg:h-screen'>
      <span className='hero-span' />
      <div className='w-full flex flex-col gap-4 md:gap-8 text-center text-white'>
        <h1 className='smooth text-3xl font-bold md:text-4xl lg:text-extrabold lg:text-5xl'>
          Build <br className='xl:hidden' /> The Right <br /> Digital Product
        </h1>
        <p className='smooth max-w-sm px-1 sm:px-0 mx-auto text-sm font-light sm:font-normal md:text-base md:max-w-lg md:w-2/3 lg:text-xl'>
          We are a leading web development company committed to delivering
          exceptional digital experiences and creating innovative solutions that
          drive business growth.
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
