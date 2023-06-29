import Heading from '../components/Heading'
import workList from '../data/workList.json'
import WorkCard from '../components/WorkCard'
import SliderComp from '../components/SliderComp'

function Work() {
  return (
    <section id='work'>
      <div>
        <Heading heading='Our Work' />
      </div>
      <div className='lg:hidden'>
        <SliderComp list={workList} />
      </div>
      <div className='card-wrapper hidden lg:grid'>
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
