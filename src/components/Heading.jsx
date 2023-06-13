function Heading({ heading }) {
  return (
    <div className='w-full mx-auto mb-16 space-y-3 text-center tracking-widest'>
      <h2 className='smooth text-2xl font-bold text-slate-800 md:text-3xl lg:text-4xl'>
        {heading}
      </h2>
      <div className='relative mx-auto w-16 h-1 bg-orange-500 rounded-full'>
        <span className='absolute top-0 left-3 bottom-0 right-0 bg-white w-1 h-1' />
      </div>
    </div>
  )
}
export default Heading
