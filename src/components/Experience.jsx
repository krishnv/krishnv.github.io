export default function Experience({ experience = [] }) {
  if (!experience.length) return null
  return (
    <section id="experience" className="py-20 px-6 bg-sage-50 border-y border-sage-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold text-sage-600 uppercase tracking-widest mb-10">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-sage-200" />
          <div className="space-y-10 pl-8">
            {experience.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-sage-500 ring-4 ring-sage-50" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <span className="font-semibold text-gray-900">{item.role}</span>
                    {item.company && (
                      <span className="text-gray-600"> · {item.company}</span>
                    )}
                  </div>
                  {item.period && (
                    <span className="text-xs text-sage-600 font-mono shrink-0 pt-0.5">{item.period}</span>
                  )}
                </div>
                {item.achievement && (
                  <p className="text-sm text-gray-700 leading-relaxed">{item.achievement}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
