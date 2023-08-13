function SliderBtn({ name }) {
  let delay = (time) => {
    return new Promise((res) => {
      setTimeout(res, time)
    })
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
