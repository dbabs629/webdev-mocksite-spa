function ReviewsCard({ image, title, text, alt }) {
  return (
    <div className='card card-outline'>
      <div>
        <img
          className='smooth w-40 h-40 xl:w-48 xl:h-48 object-cover rounded-full'
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
export default ReviewsCard
