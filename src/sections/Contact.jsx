import Heading from '../components/Heading'
import contactList from '../data/contactList.json'
import ContactCard from '../components/ContactCard'

function Contact() {
  return (
    <section>
      <div>
        <Heading heading='Contact Us' />
      </div>
      <div className='card-wrapper'>
        {contactList.map((item, i) => (
          <ContactCard
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
export default Contact
