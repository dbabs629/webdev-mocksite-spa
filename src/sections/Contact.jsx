import Heading from '../components/Heading'
import contactList from '../data/contactList.json'
import Card from '../components/Card'

function Contact() {
  return (
    <section id='contact'>
      <div>
        <Heading heading='Contact Us' />
      </div>
      <div className='card-wrapper sm:flex sm:flex-row sm:justify-around [&>*]:flex-row [&>*]:sm:flex-col [&>*]:text-start [&>*]:sm:text-center [&>*]:max-w-sm  [&>*]:w-full [&>*]:px-6'>
        {contactList.map((item, i) => (
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
export default Contact
