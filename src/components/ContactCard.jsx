function ContactCard({ image, title, text, alt }) {
  return (
    <div className='mx-auto text-center my-2 space-y-6'>
      <div>
        <img
          className='smooth mx-auto w-32 h-32 xl:w-40 xl:h-40 object-cover rounded-full'
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
export default ContactCard
