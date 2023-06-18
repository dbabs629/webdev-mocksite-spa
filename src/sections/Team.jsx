import Heading from '../components/Heading'
import TeamCard from '../components/TeamCard'
import teamList from '../data/teamList.json'

function Team() {
  return (
    <section className='services'>
      <div>
        <Heading heading='Meet The Team' />
      </div>
      <div className='card-wrapper'>
        {teamList.map((item, i) => (
          <TeamCard
            key={i}
            image={item.image}
            alt={item.alt}
            name={item.name}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}
export default Team
