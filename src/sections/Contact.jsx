import Heading from '../components/Heading'
import contactList from '../data/contactList.json'
import Card from '../components/Card'

function Contact() {
  return (
    <section id='contact' className='bg-[#f6faff]'>
      <div>
        <Heading heading='Contact Us' />
      </div>
      <div className='card-wrapper sm:flex sm:flex-row sm:justify-around [&>*]:flex-row [&>*]:sm:flex-col [&>*]:justify-start [&>*]:px-6 [&>*]:py-2 [&>*]:mx-auto [&>*]:text-start [&>*]:sm:text-center [&>*]:max-h-40 [&>*]:sm:max-h-48'>
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
