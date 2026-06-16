export default function Hero({ name, title, company, companyPeriod, tagline, bio }) {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
        {company}{companyPeriod ? `, ${companyPeriod}` : ''}
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-950 leading-none mb-6">
        {name}
      </h1>
      {title && (
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">{title}</p>
      )}
      {tagline && (
        <blockquote className="border-l-2 border-gray-400 pl-4 mb-8">
          <p className="text-lg text-gray-800 italic">"{tagline}"</p>
        </blockquote>
      )}
      {bio && (
        <p className="text-base text-gray-700 max-w-2xl leading-relaxed">{bio}</p>
      )}
    </section>
  )
}
