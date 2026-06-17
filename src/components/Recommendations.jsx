export default function Recommendations({ recommendations = [] }) {
  const filled = recommendations.filter((r) => r.text)
  if (!filled.length) return null

  return (
    <section id="recommendations" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold text-sage-600 uppercase tracking-widest mb-10">
          Recommendations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {filled.map((rec, i) => (
            <div key={i} className="bg-white border border-sage-200 rounded-xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed mb-5">"{rec.text}"</p>
              <div className="flex items-center gap-3">
                {rec.avatar && (
                  <img src={rec.avatar} alt={rec.name} className="w-9 h-9 rounded-full object-cover" />
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{rec.name}</p>
                  {rec.role && <p className="text-xs text-sage-600 mt-0.5">{rec.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
