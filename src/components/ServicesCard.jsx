function ServicesCard({ image, title, text, alt }) {
  return (
    <div className='smooth max-w-xs w-full h-60 m-6 cursor-pointer flex flex-col justify-center items-center space-y-6 text-center rounded-lg bg-white border-2 border-[#f7f9ff] shadow-lg shadow-[#e8edfd] lg:max-w-sm'>
      <div>
        <img
          className='smooth w-32 h-32 object-cover rounded-full'
          src={'./assets/' + image}
          alt={alt}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className='smooth sm:font-light md:font-normal xl:text-lg'>{text}</p>
      </div>
    </div>
  )
}
export default ServicesCard
