function TeamCard({ image, title, name, alt }) {
  return (
    <div className='smooth mx-auto w-full h-96 flex flex-col gap-2 border lg:w-full lg:h-full lg:pb-4'>
      <div className='w-full max-h-72'>
        <img
          className='smooth w-full h-full object-cover'
          src={image}
          alt={alt}
        />
      </div>
      <div className='px-2'>
        <h4 className='smoothtext-lg font-semibold'>{name}</h4>
        <p className='smooth w-5/6'>{title}</p>
      </div>
    </div>
  )
}
export default TeamCard
