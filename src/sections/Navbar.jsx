function Navbar() {
  return (
    <nav className='smooth flex flex-row justify-between items-center text-white'>
      <div
        id='logo'
        className='smooth text-lg font-bold md:text-2xl xl:text-3xl'>
        Webdevs
      </div>

      {/* Mobile Menu */}
      <div
        id='mobile-menu'
        className='smooth flex flex-col w-12 h-10 p-1 justify-center items-end md:hidden cursor-pointer space-y-1 duration-300 ease-in-out hover:scale-110'>
        <span className='block w-4 h-0.5 rounded-full bg-white' />
        <span className='block w-5 h-0.5 rounded-full bg-white' />
        <span className='block w-6 h-0.5 rounded-full bg-white' />
      </div>

      {/* Desktop/Tablet Menu */}
      <ul
        id='navList'
        className='smooth hidden space-x-6 font-semibold cursor-pointer md:flex lg:space-x-8 lg:text-lg xl:text-xl'>
        <li>Services</li>
        <li>Work</li>
        <li>Team</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default Navbar
