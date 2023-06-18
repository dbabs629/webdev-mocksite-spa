import Heading from '../components/Heading'
import expertiseList from '../data/expertiseList.json'
import ExpertiseCard from '../components/ExpertiseCard'

function Expertise() {
  return (
    <section>
      <div>
        <Heading heading='Expertise' />
      </div>
      <div className='card-wrapper'>
        {expertiseList.map((item, i) => (
          <ExpertiseCard
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
export default Expertise
