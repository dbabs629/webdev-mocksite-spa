import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

function Footer() {
  return (
    <footer className='w-full flex flex-col items-center sm:h-full'>
      <div className='overlay bg-[#091129] -z-10 opacity-95'></div>
      <div className='w-full lg:max-w-[1000px] flex flex-col gap-8 items-center text-center justify-evenly lg:h-72 sm:py-8 lg:flex-row lg:items-start'>
        <div className='relative w-72 p-4 lg:h-40 rounded-lg space-y-2'>
          <span className='absolute top-0 right-0 left-0 bottom-0 bg-gray-300 opacity-25 rounded-lg' />
          <h5>Webdevs</h5>
          <p>
            We value transparency and open communication, keeping you informed
            at every stage of the development process.
          </p>
        </div>
        <div className='relative w-72 p-4 lg:h-40 space-y-2'>
          <span className='absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-gray-300 opacity-25 rounded-lg' />
          <h5>Find Us</h5>
          <p>1872 Bay St, Toronto, ON, Canada, L9T 1A1</p>
        </div>
        <div className='relative w-72 p-4 lg:h-40 space-y-2'>
          <span className='absolute top-0 right-0 left-0 bottom-0 bg-gray-300 opacity-25 rounded-lg' />
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
      <div className='relative space-y-6 mt-10'>
        <span className='overlay w-16 mx-auto border-t' />
        <p className='w-48 text-xs font-light text-center'>
          <FontAwesomeIcon className='px-2' icon={faCopyright} />
          2023 made by Daniel Babin
        </p>
      </div>
    </footer>
  )
}
export default Footer
