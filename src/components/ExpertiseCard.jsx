function ExpertiseCard({ image, title, text, alt }) {
  return (
    <div className='card card-outline'>
      <div>
        <img
          className='smooth w-32 h-32 xl:w-40 xl:h-40 object-cover rounded-full'
          src={image}
          alt={alt}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className='smooth px-4 font-light md:font-normal'>{text}</p>
      </div>
    </div>
  )
}
export default ExpertiseCard
