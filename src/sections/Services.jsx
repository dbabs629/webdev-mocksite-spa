import Heading from '../components/Heading'
import servicesList from '../data/servicesList.json'
import ServicesCard from '../components/ServicesCard'

function Services() {
  return (
    <section className='services'>
      <div>
        <Heading heading='Services' />
      </div>
      <div className='card-wrapper'>
        {servicesList.map((item, i) => (
          <ServicesCard
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
