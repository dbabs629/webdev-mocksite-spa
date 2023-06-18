import Heading from '../components/Heading'
import workList from '../data/workList.json'
import WorkCard from '../components/WorkCard'

function Work() {
  return (
    <section className='work'>
      <div>
        <Heading heading='Our Work' />
      </div>
      <div className='card-wrapper'>
        {workList.map((item, i) => (
          <WorkCard
            key={i}
            image={item.image}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}
export default Work
