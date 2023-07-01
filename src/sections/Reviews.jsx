import reviewsList from '../data/reviewsList.json'
import SectionContent from '../components/SectionContent'

function Reviews() {
  return (
    <>
      <SectionContent
        sectionId='reviews'
        heading='Client Reviews'
        contentDataList={reviewsList}
        scrollEnabled={true}
        addSliderClass='slider-wrapper'
        addWrapperClass='card-wrapper hidden'
      />
    </>
  )
}
export default Reviews
