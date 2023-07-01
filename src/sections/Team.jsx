import teamList from '../data/teamList.json'
import SectionContent from '../components/SectionContent'

function Team() {
  return (
    <>
      <SectionContent
        sectionId='team'
        heading='Meet the Team'
        contentDataList={teamList}
        scrollEnabled={false}
        addSliderClass='slider-wrapper'
        addWrapperClass='card-wrapper'
      />
    </>
  )
}
export default Team
