import { useState } from 'react'
import Card from './Card'

import SliderBtn from './SliderBtn'

function CardSlider({ list }) {
  const [count, setCount] = useState(0)

  let slideList = list.map((item, i) => {
    let positionSlide
    if (count === i) {
      positionSlide = 'translate-x-[0px] z-20 scale-110 duration-1000'
    } else if (i - 1 === count && i > count) {
      positionSlide =
        'translate-x-[22rem] xl:translate-x-[28rem] z-10 opacity-30 duration-1000'
    } else if (i === list.length - 1 && count === 0) {
      positionSlide =
        '-translate-x-[22rem] xl:-translate-x-[28rem] z-10 opacity-30 duration-1000'
    } else if (i === 0 && count === list.length - 1) {
      positionSlide =
        'translate-x-[22rem] xl:translate-x-[28rem] z-10 opacity-30 duration-1000'
    } else if (i + 1 === count && i < count) {
      positionSlide =
        '-translate-x-[22rem] xl:-translate-x-[28rem] z-10 opacity-30 duration-1000'
    } else if (i + 2 === count && i < count) {
      positionSlide = '-translate-x-[44rem] z-10 opacity-0 duration-1000'
    } else if (i - 2 === count && i > count) {
      positionSlide = 'translate-x-[44rem] z-10 opacity-0 duration-1000'
    } else if (i !== count && i < count) {
      positionSlide = 'translate-x-[44rem] z-10 opacity-0 duration-1000'
    } else if (i !== count && i > count) {
      positionSlide = '-translate-x-[44rem] z-10 opacity-0 duration-1000'
    } else {
      positionSlide = 'duration-600 z-10 opacity-0'
    }
    return (
      <Card
        key={i + 0.1}
        image={item.image}
        alt={item.alt}
        title={item.title}
        text={item.text}
        job={item.job}
        animateBg={item.animateBg}
        addClass={`absolute left-0 right-0 saturate-200 transform ease-in-out ${positionSlide}`}
      />
    )
  })

  return (
    <>
      <div className='slider relative h-80 w-full'>{slideList}</div>
      <div className='w-full mx-auto text-center text-white'>
        <div className='flex flex-row justify-center gap-6 my-8 lg:my-20'>
          {slideList.map((item, i) => {
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
        </div>
        <div className='flex flex-row justify-center gap-2 mt-8 p-4'>
          <SliderBtn
            name='prev'
            count={count}
            setCount={setCount}
            listSize={list.length}
          />
          <SliderBtn
            name='next'
            count={count}
            setCount={setCount}
            listSize={list.length}
          />
        </div>
      </div>
    </>
  )
}
export default CardSlider
