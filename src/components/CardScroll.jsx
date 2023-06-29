function CardScroll({ image, title, text, job, alt, addClass, addAnimation }) {
  return (
    <div
      className={`absolute left-0 right-0 max-w-xs w-full max-h-96 mx-auto py-4 flex flex-col gap-4 items-center text-center text-xs text-slate-800 border-2 border-[#f7f9ff] shadow-lg shadow-[#e8edfd] rounded-lg md:font-normal lg:text-sm ${addAnimation} ${addClass}`}>
      <div>
        <img
          className='w-32 h-32 lg:w-36 lg:h-36 object-cover rounded-full'
          src={image}
          alt={alt}
        />
      </div>
      <div>
        <h3 className='px-2'>{title}</h3>
        <h6 className='text-xs italic'>{job}</h6>
        <p className='px-2'>{text}</p>
      </div>
    </div>
  )
}
export default CardScroll
