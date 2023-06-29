function Heading({ heading }) {
  return (
    <div className='w-full mx-auto mb-16 space-y-3 text-center tracking-widest'>
      <h2 className='smooth text-2xl font-bold text-slate-800 md:text-3xl lg:text-4xl'>
        {heading}
      </h2>
      <div className='relative mx-auto w-16 h-1 bg-orange-500 rounded-full animation-heading'>
        <span className='absolute top-0 left-0 bottom-0 right-0 bg-white w-2 h-1 rounded-sm animation-dot' />
      </div>
    </div>
  )
}
export default Heading
