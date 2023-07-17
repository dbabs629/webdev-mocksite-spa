import servicesList from '../data/servicesList.json'
import SectionContent from '../components/SectionContent'

function Services() {
  return (
    <>
      <SectionContent
        sectionId='services'
        heading='Services'
        contentDataList={servicesList}
        scrollEnabled={true}
        addSliderClass='slider-wrapper lg:hidden'
        addWrapperClass='card-wrapper hidden lg:grid'
      />
    </>
  )
}
export default Services
