function ExpertiseCard({ image, title, text, alt }) {
  return (
    <div className='smooth w-96 h-80 my-8 flex flex-col justify-center items-center space-y-6 text-center border-2 rounded-lg border-[#f7f9ff] shadow-lg shadow-[#e8edfd]'>
      <div>
        <img
          className='smooth w-32 h-32 object-cover rounded-full'
          src={'./assets/' + image}
          alt={alt}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className='smooth w-72 sm:font-light md:font-normal xl:text-lg'>
          {text}
        </p>
      </div>
    </div>
  )
}
export default ExpertiseCard
