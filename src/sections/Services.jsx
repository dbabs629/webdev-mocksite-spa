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
        addWrapperClass='card-wrapper hidden lg:grid [&>*]:cursor-pointer [&>*:hover]:scale-105 [&>*:active]:scale-105 [&>*:hover]:bg-blue-500 [&>*:active]:bg-blue-500 [&>*:focus]:bg-blue-500 [&>*:hover]:saturate-200 [&>*:active]:saturate-200 [&>*:focus]:saturate-200 [&>*:hover]:text-white [&>*:active]:text-white'
      />
    </>
  )
}
export default Services
