import Heading from '../components/Heading'
import reviewsList from '../data/reviewsList.json'
import ReviewsCard from '../components/ReviewsCard'

function Reviews() {
  return (
    <section>
      <div>
        <Heading heading='Client Reviews' />
      </div>
      <div className='card-wrapper'>
        {reviewsList.map((item, i) => (
          <ReviewsCard
            key={i}
            image={item.image}
            title={item.title}
            text={item.text}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  )
}
export default Reviews
