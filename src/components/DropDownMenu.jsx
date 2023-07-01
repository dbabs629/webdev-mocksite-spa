import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function DropDownMenu({ navBool, setnavBool }) {
  const [dropDown, setdropDown] = useState('hidden')

  let navMenu = (e) => {
    !navBool ? setnavBool(true) : setnavBool(false)
  }

  useEffect(() => {
    navBool === true ? setdropDown('absolute') : setdropDown('hidden')
  }, [navBool])
  return (
    <div
      className={`${dropDown} top-0 right-0 w-full flex flex-col bg-[#eef4ff] py-2 sm:hidden`}>
      <div className='mx-8 mt-4 self-end p-2 opacity-100'>
        <FontAwesomeIcon
          className='text-3xl cursor-pointer p-2 text-gray-800'
          icon={faCircleXmark}
          onClick={navMenu}
        />
      </div>
      <ul className='drop-down relative w-full flex flex-col text-gray-800 items-center space-y-6 mb-10'>
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
    </div>
  )
}
export default DropDownMenu
