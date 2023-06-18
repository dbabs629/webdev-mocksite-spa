function ServicesCard({ image, title, text, alt }) {
  return (
    <div className='smooth card card-outline cursor-pointer hover:scale-105'>
      <div>
        <img
          className='smooth w-32 h-32 xl:w-40 xl:h-40 object-cover rounded-full'
          src={image}
          alt={alt}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className='smooth px-4 text-black font-light md:font-normal xl:px-8'>
          {text}
        </p>
      </div>
    </div>
  )
}
export default ServicesCard
