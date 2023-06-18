function Footer() {
  return (
    <footer className='w-full h-96 flex flex-col items-center sm:h-full'>
      <div className='overlay bg-[#091129] -z-10 opacity-95'></div>
      <div className='w-full h-96 flex flex-row gap-8 text-center justify-evenly sm:h-80 sm:py-8 sm:flex-row sm:items-start sm:justify-evenly'>
        <div className='w-32 space-y-2 md:text-left sm:w-40 lg:60'>
          <h5>Webdevs</h5>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className='w-32 space-y-2 sm:w-40 lg:60'>
          <h5>Find Us</h5>
          <p>1872 Bay St, Toronto, ON, Canada, L9T 1A1</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className='w-32 space-y-2 md:text-right sm:w-40 lg:60'>
          <h5>Company</h5>
          <ul>
            <a href='/'>
              <li>About</li>
            </a>
            <a href='/'>
              <li>
                Terms and <br /> Conditions
              </li>
            </a>
            <a href='/'>
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
      </div>
      <div className='relative space-y-4'>
        <span className='overlay w-16 mx-auto border-t' />
        <p>
          2023 Company <br />
        </p>
      </div>
    </footer>
  )
}
export default Footer
