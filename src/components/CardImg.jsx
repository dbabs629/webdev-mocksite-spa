import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'

function CardImg({ image, alt, addClassName, addPlaceholderClass }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [hideImg, setHideImg] = useState('hidden')

  return (
    <>
      {!imgLoaded && (
        <FontAwesomeIcon className={`${addPlaceholderClass}`} icon={faImage} />
      )}
      <img
        src={image}
        alt={alt}
        className={`${hideImg} ${addClassName}`}
        onLoad={() => {
          setImgLoaded(true)
          setHideImg('static')
        }}
      />
    </>
  )
}
export default CardImg
