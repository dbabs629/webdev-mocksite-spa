import { useState, useEffect } from 'react'
import DropDownMenu from '../components/DropDownMenu'

function Navbar() {
  const [navBool, setnavBool] = useState(false)

  let navMenu = (e) => {
    !navBool ? setnavBool(true) : setnavBool(false)
  }

  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 150) setnavBool(false)
  })

  return (
    <nav className='smooth absolute z-30 left-0 top-0 right-0 p-5 flex flex-row justify-between lg:px-0 lg:justify-around items-center text-white'>
      <div
        id='logo'
        className='smooth text-lg font-bold md:text-2xl lg:text-3xl'>
        Webdevs
      </div>

      {/* Hamburger Mobile Menu */}
      <div
        id='mobile-menu'
        onClick={navMenu}
        className='smooth flex flex-col p-1 justify-center items-end sm:hidden cursor-pointer space-y-1 duration-300 ease-in-out hover:scale-110'>
        <span className='block w-4 h-0.5 rounded-full bg-white' />
        <span className='block w-5 h-0.5 rounded-full bg-white' />
        <span className='block w-6 h-0.5 rounded-full bg-white' />
      </div>

      <DropDownMenu navBool={navBool} setnavBool={setnavBool} />

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
