import Heading from './Heading'
import Card from './Card'
import CardSlider from './CardSlider'

function SectionContent({
  sectionId,
  heading,
  contentDataList,
  scrollEnabled,
  addSliderClass,
  addWrapperClass,
}) {
  return (
    <section id={sectionId}>
      <div>
        <Heading heading={heading} />
      </div>
      {scrollEnabled && (
        <div className={`${addSliderClass}`}>
          <CardSlider list={contentDataList} />
        </div>
      )}
      <div className={`${addWrapperClass}`}>
        {contentDataList.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            alt={item.alt}
            title={item.title}
            text={item.text}
            job={item.job}
          />
        ))}
      </div>
    </section>
  )
}
export default SectionContent
