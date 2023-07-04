import MobileMenu from '../components/MobileMenu'

function Navbar() {
  return (
    <nav className='smooth absolute z-30 left-0 top-0 right-0 p-5 flex flex-row justify-between lg:px-0 lg:justify-around items-center text-white'>
      <div
        id='logo'
        className='smooth text-lg font-bold md:text-2xl lg:text-3xl'>
        Webdevs
      </div>

      <MobileMenu />

      {/* Desktop/Tablet Menu */}
      <ul
        id='navList'
        className='smooth hidden space-x-6 font-semibold cursor-pointer sm:flex lg:space-x-8 lg:text-lg'>
        <a href='#services'>
          <li>Services</li>
        </a>
        <a href='#expertise'>
          <li>Expertise</li>
        </a>
        <a href='#work'>
          <li>Work</li>
        </a>
        <a href='#team'>
          <li>Team</li>
        </a>
        <a href='#reviews'>
          <li>Reviews</li>
        </a>
        <a href='#contact'>
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  )
}
export default Navbar
