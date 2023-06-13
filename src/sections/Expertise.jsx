import Heading from '../components/Heading'
import ExpertiseList from '../data/expertiseList.json'
import ExpertiseCard from '../components/ExpertiseCard'

function Expertise() {
  return (
    <section>
      <div>
        <Heading heading='Expertise' />
      </div>
      <div className='flex flex-col items-center lg:flex-row lg:space-x-5 lg:justify-center'>
        {ExpertiseList.map((item, i) => (
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
