import Heading from '../components/Heading'
import expertiseList from '../data/expertiseList.json'
import Card from '../components/Card'

function Expertise() {
  return (
    <section id='expertise' className='bg-[#f6faff]'>
      <div>
        <Heading heading='Expertise' />
      </div>
      <div className='card-wrapper'>
        {expertiseList.map((item, i) => (
          <Card
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
