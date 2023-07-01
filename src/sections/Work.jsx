import Heading from '../components/Heading'
import workList from '../data/workList.json'
import Card from '../components/Card'
import CardSlider from '../components/CardSlider'

function Work() {
  return (
    <section id='work'>
      <div>
        <Heading heading='Our Work' />
      </div>
      <div className='slider-wrapper lg:hidden'>
        <CardSlider list={workList} />
      </div>
      <div className='card-wrapper hidden [&>*]:relative lg:grid [&>*]:bg-transparent'>
        {workList.map((item, i) => (
          <Card
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
