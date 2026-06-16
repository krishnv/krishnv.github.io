import { useState } from 'react'

export default function Impact({ impact = [] }) {
  const filled = impact.filter((i) => i.metric)
  if (!filled.length) return null

  return (
    <section id="impact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filled.map((item, i) => (
            <MetricCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricCard({ metric, label, context }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative bg-white border border-gray-200 rounded-xl p-6 cursor-default overflow-hidden transition-shadow hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`transition-all duration-300 ${
          hovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <p className="text-4xl font-bold text-gray-950 tracking-tight">{metric}</p>
        {label && <p className="text-sm text-gray-600 mt-1.5 leading-snug">{label}</p>}
      </div>
      <div
        className={`absolute inset-0 p-6 flex items-center bg-gray-950 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        <p className="text-sm text-gray-200 leading-relaxed">{context}</p>
      </div>
    </div>
  )
}
