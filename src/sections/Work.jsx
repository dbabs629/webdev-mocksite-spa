import workList from '../data/workList.json'
import SectionContent from '../components/SectionContent'

function Work() {
  return (
    <>
      <SectionContent
        sectionId='work'
        heading='Our Work'
        contentDataList={workList}
        scrollEnabled={true}
        addSliderClass='slider-wrapper lg:hidden'
        addWrapperClass='card-wrapper hidden lg:grid [&>*]:relative [&>*]:bg-transparent [&>*]:cursor-pointer [&>*:hover]:scale-105 [&>*:active]:scale-105 [&>*]:saturate-50 [&>*:hover]:saturate-200 [&>*:active]:saturate-200'
      />
    </>
  )
}
export default Work
