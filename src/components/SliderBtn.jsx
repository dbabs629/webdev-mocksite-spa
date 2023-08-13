function SliderBtn({ name, count, setCount, listSize }) {
  let delay = (time) => {
    return new Promise((res) => {
      setTimeout(res, time)
    })
  }

  const prev = async (e) => {
    if (count <= 0) {
      setCount(listSize - 1)
    } else {
      setCount(count - 1)
    }
    e.target.disabled = true
    await delay(600)
    e.target.disabled = false
  }

  const next = async (e) => {
    if (count >= listSize - 1) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
    e.target.disabled = true
    await delay(600)
    e.target.disabled = false
  }


  return (
    <>
      <button id={name} onClick={eval(name)}>
        {name}
      </button>
    </>
  )
}
export default SliderBtn
