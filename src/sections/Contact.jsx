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
        addWrapperClass='card-wrapper sm:flex sm:flex-row sm:justify-around [&>*]:flex-row [&>*]:sm:flex-col [&>*]:justify-start [&>*]:px-6 [&>*]:py-2 [&>*]:mx-auto [&>*]:text-start [&>*]:sm:text-center [&>*]:max-h-40 [&>*]:sm:max-h-48'
      />
    </>
  )
}
export default Contact
