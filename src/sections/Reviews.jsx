import Heading from '../components/Heading'
import reviewsList from '../data/reviewsList.json'
import CardSlider from '../components/CardSlider'

function Reviews() {
  return (
    <section id='reviews'>
      <div>
        <Heading heading='Client Reviews' />
      </div>
      <div className='slider-wrapper'>
        <CardSlider list={reviewsList} />
      </div>
      {/* <div className='card-wrapper hidden lg:grid'>
        {reviewsList.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            job={item.job}
            text={item.text}
            title={item.title}
            alt={item.alt}
          />
        ))}
      </div> */}
    </section>
  )
}
export default Reviews
