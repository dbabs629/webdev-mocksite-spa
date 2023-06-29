import Heading from '../components/Heading'
import reviewsList from '../data/reviewsList.json'
import Card from '../components/Card'
import SliderComp from '../components/SliderComp'

function Reviews() {
  return (
    <section id='reviews'>
      <div>
        <Heading heading='Client Reviews' />
      </div>
      <div>
        <SliderComp version={1} list={reviewsList} />
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
