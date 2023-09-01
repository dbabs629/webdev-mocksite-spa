function SliderBtn({ name, count, setCount, listSize }) {
  let delay = (time) => {
    return new Promise((res) => {
      setTimeout(res, time)
    })
  }

  const handleClick = async (e) => {
    if (name === 'prev') {
      count <= 0 ? setCount(listSize - 1) : setCount(count - 1)
    } else if (name === 'next') {
      count >= listSize - 1 ? setCount(0) : setCount(count + 1)
    }
    e.target.disabled = true
    await delay(600)
    e.target.disabled = false
  }

  return (
    <>
      <button id={name} onClick={handleClick}>
        {name}
      </button>
    </>
  )
}
export default SliderBtn
