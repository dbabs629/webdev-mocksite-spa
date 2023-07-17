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
        addWrapperClass='card-wrapper hidden lg:grid'
      />
    </>
  )
}
export default Work
