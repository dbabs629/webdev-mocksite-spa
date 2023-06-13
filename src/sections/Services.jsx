import Heading from '../components/Heading'
import servicesList from '../data/servicesList.json'
import ServicesCard from '../components/ServicesCard'

function Services() {
  return (
    <section className='relative services'>
      <div>
        <Heading heading='Services' />
      </div>
      <div className='max-w-full flex flex-col items-center justify-center lg:flex-row lg:flex-wrap'>
        {servicesList.map((item, i) => (
          <ServicesCard
            key={i}
            image={item.image}
            title={item.title}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  )
}
export default Services
