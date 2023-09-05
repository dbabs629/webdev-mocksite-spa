function SlideIndexDisplay({ list, count }) {
  return (
    <>
      {list.map((item, i) => {
        if (count === i) {
          return (
            <span
              key={i}
              className='w-5 h-5 lg:w-8 lg:h-8 bg-[#F49900] opacity-100 rounded-full'
            />
          )
        } else {
          return (
            <span
              key={i}
              className='w-5 h-5 lg:w-8 lg:h-8 bg-[#2378FF] opacity-40 rounded-full shadow-inner shadow-[#2378FF]'
            />
          )
        }
      })}
    </>
  )
}
export default SlideIndexDisplay
