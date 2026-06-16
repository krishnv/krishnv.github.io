const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'impact', label: 'Impact' },
  { id: 'work', label: 'Work' },
  { id: 'recommendations', label: 'Recommendations' },
  { id: 'stack', label: 'Stack' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ name }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-sm tracking-tight text-gray-900">{name}</span>
        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
