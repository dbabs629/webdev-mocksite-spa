import Heading from '../components/Heading'
import contactList from '../data/contactList.json'
import Card from '../components/Card'
import SectionContent from '../components/SectionContent'

function Contact() {
  return (
    <>
      <SectionContent
        sectionId='contact'
        heading='Contact Us'
        contentDataList={contactList}
        scrollEnabled={false}
        addSliderClass='slider-wrapper'
        addWrapperClass='card-wrapper'
      />
    </>
  )
}
export default Contact
