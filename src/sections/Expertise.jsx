import expertiseList from '../data/expertiseList.json'
import SectionContent from '../components/SectionContent'

function Expertise() {
  return (
    <>
      <SectionContent
        sectionId='expertise'
        heading='Expertise'
        contentDataList={expertiseList}
        scrollEnabled={false}
        addSliderClass='slider-wrapper'
        addWrapperClass='card-wrapper'
      />
    </>
  )
}
export default Expertise
