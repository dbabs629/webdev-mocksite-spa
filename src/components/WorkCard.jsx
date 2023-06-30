function WorkCard({ image, title, text, alt, addClass, addAnimation }) {
  return (
    <div
      className={`relative max-w-xs w-full max-h-96 mx-auto py-4 flex flex-col gap-4 items-center text-center text-xs text-slate-800 border-2 border-[#f7f9ff] shadow-lg shadow-[#e8edfd] rounded-lg md:font-normal lg:text-sm max-w-full sm:max-w-xs max-h-96 w-80 sm:w-96 h-72 justify-center cursor-pointer hover:scale-105 text-white hover:text-zinc-800 ${addAnimation} ${addClass}`}>
      <div className='overlay -z-20 rounded-lg w-full max-h-96'>
        <img src={image} alt={alt} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default WorkCard
