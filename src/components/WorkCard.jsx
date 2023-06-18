function WorkCard({ image, title, text, alt }) {
  return (
    <div className='smooth card card-outline cursor-pointer hover:scale-105 text-white hover:text-zinc-800'>
      <div className='overlay -z-20 rounded-lg'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={image}
          alt={alt}
        />
      </div>
      <div>
        <h3 className='text-inherit'>{title}</h3>
        <p className='smooth px-4 text-inherit font-light md:font-normal'>
          {text}
        </p>
      </div>
    </div>
  )
}
export default WorkCard
