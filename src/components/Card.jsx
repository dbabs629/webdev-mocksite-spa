import CardImg from './CardImg'

function Card({ image, title, text, job, alt, addClass, addAnimation }) {
  return (
    <div
      className={`card cursor-default static w-72 h-72 mx-auto flex flex-col justify-center items-center text-center text-xs space-y-4 text-slate-800 bg-white border-2 border-[#f7f9ff] shadow-lg shadow-[#e8edfd] rounded-lg md:font-normal sm:w-80 lg:text-sm ${addAnimation} ${addClass}`}>
      <div className='img-wrapper'>
        <CardImg
          image={image}
          alt={alt}
          addClassName='w-32 h-32 object-cover rounded-full'
          addPlaceholderClass={`w-full h-24 opacity-30`}
        />
      </div>
      <div>
        <h3 className='w-full'>{title}</h3>
        {job && <h6 className='w-full text-xs italic'>{job}</h6>}
        {text && <p className='w-full pt-1 px-2 text-xs'>{text}</p>}
      </div>
    </div>
  )
}
export default Card
