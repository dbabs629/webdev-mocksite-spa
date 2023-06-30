import Heading from '../components/Heading'
import Card from '../components/Card'
import teamList from '../data/teamList.json'

function Team() {
  return (
    <section id='team' className='bg-[#f6faff]'>
      <div>
        <Heading heading='Meet The Team' />
      </div>
      <div className='card-wrapper'>
        {teamList.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            alt={item.alt}
            title={item.title}
            job={item.job}
          />
        ))}
      </div>
    </section>
  )
}
export default Team
