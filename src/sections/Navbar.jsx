import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
  const [navBool, setnavBool] = useState(false)
  const [dropDown, setdropDown] = useState('hidden')
  let navMenu = (e) => {
    !navBool ? setnavBool(true) : setnavBool(false)
    console.log(dropDown)
  }

  useEffect(() => {
    navBool === true ? setdropDown('absolute') : setdropDown('hidden')
  }, [navBool])

  return (
    <nav className='smooth absolute z-20 left-0 top-0 right-0 p-5 flex flex-row justify-between lg:px-0 lg:justify-around items-center text-white'>
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

      {/* Dropdown Menu */}
      <div
        className={`${dropDown} top-0 right-0 z-30 w-full py-2 flex flex-col bg-[#eef4ff] sm:hidden`}>
        <div className='self-end p-2 opacity-100'>
          <FontAwesomeIcon
            className='text-3xl cursor-pointer p-2 text-gray-800'
            icon={faCircleXmark}
            onClick={navMenu}
          />
        </div>
        <ul className='drop-down relative w-full flex flex-col text-gray-800 items-center space-y-6'>
          <a onClick={navMenu} href='#services'>
            <li>Services</li>
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
      </div>

      {/* Desktop/Tablet Menu */}
      <ul
        id='navList'
        className='smooth hidden space-x-6 font-semibold cursor-pointer sm:flex lg:space-x-8 lg:text-lg'>
        <a href='#services'>
          <li>Services</li>
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
