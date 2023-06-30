import Heading from '../components/Heading'
import servicesList from '../data/servicesList.json'
import Card from '../components/Card'
import CardSlider from '../components/CardSlider'

function Services() {
  return (
    <section id='services'>
      <div>
        <Heading heading='Services' />
      </div>
      <div className='lg:hidden'>
        <CardSlider list={servicesList} />
      </div>
      <div className='card-wrapper hidden lg:grid [&>*]:cursor-pointer [&>*:hover]:scale-105 [&>*:hover]:bg-blue-500 [&>*:hover]:text-white'>
        {servicesList.map((item, i) => (
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
export default Services
