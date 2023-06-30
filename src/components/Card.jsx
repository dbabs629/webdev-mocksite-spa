
function Card({
  image,
  tinyImage,
  title,
  text,
  job,
  alt,
  addClass,
  addAnimation,
}) {
  return (
    <div
      className={`card static w-full max-w-xs max-h-72 h-72 lg:max-h-80 lg:h-80 mx-auto py-4 flex flex-col z-2 gap-4 justify-center items-center text-center text-xs text-slate-800 bg-white border-2 border-[#f7f9ff] shadow-lg shadow-[#e8edfd] my-4 lg:my-0 rounded-lg md:font-normal lg:text-sm ${addAnimation} ${addClass}`}>
      <div>
        <img
          className='hidden w-32 h-32 lg:w-36 lg:h-36 object-cover rounded-full'
          src={image}
          alt={alt}
        />
        <img
          className='w-32 h-32 lg:w-36 lg:h-36 object-cover rounded-full'
          src={image}
          alt={alt}
        />
      </div>
      <div>
        <h3 className='w-full px-4'>{title}</h3>
        <h6 className='text-xs italic w-full px-4 pb-4'>{job}</h6>
        <p className='w-full px-4 pb-4'>{text}</p>
      </div>
    </div>
  )
}
export default Card
