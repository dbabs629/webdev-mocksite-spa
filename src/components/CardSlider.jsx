import { useState } from 'react'
import Card from './Card'
import SlideIndexDisplay from './SlideIndexDisplay'
import SliderBtn from './SliderBtn'

function CardSlider({ list }) {
  const [count, setCount] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  let delay = (time) => {
    return new Promise((res) => {
      setTimeout(res, time)
    })
  }

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = async (e) => {
    if (touchEnd > touchStart) {
      count <= 0 ? setCount(list.length - 1) : setCount(count - 1)
    } else if (touchEnd < touchStart) {
      count >= list.length - 1 ? setCount(0) : setCount(count + 1)
    } else {
      console.log(e.targetTouches[0].clientX)
    }
    e.target.disabled = true
    await delay(600)
    e.target.disabled = false
  }

  let slideList = list.map((item, i) => {
    let positionSlide

    if (count === i) {
      positionSlide = 'translate-x-[0px] z-20 md:scale-110 duration-1000'
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
    <div
      id='slider'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className='relative w-full h-96 py-4'>
      {slideList}
      <div className='w-full mx-auto text-center text-white'>
        <div className='absolute bottom-0 left-0 right-0 flex flex-row justify-center gap-4 md:gap-6'>
          <SlideIndexDisplay list={list} count={count} />
        </div>
        <div className='absolute h-[100%] z-20 flex flex-row left-0 bottom-0 right-0 w-full max-w-[1500px] justify-between mx-auto sm:top-0 items-end sm:items-stretch'>
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
    </div>
  )
}
export default CardSlider
