function SlideIndexDisplay({ list, count }) {
  return (
    <>
      {list.map((item, i) => {
        if (count === i) {
          return (
            <span
              key={i}
              className='w-5 h-5 lg:w-8 lg:h-8 bg-[#F49117] shadow-inner shadow-orange-300 opacity-100 rounded-full'
            />
          )
        } else {
          return (
            <span
              key={i}
              className='w-5 h-5 lg:w-8 lg:h-8 bg-blue-600 opacity-100 rounded-full shadow-inner shadow-blue-300'
            />
          )
        }
      })}
    </>
  )
}
export default SlideIndexDisplay
