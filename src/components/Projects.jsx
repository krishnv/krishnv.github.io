export default function Projects({ projects = [] }) {
  const filled = projects.filter((p) => p.name)
  if (!filled.length) return null

  return (
    <section id="work" className="py-20 px-6 bg-sage-50 border-y border-sage-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold text-sage-600 uppercase tracking-widest mb-10">
          Work
        </h2>
        <div className="space-y-12">
          {filled.map((project, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-6 pb-12 border-b border-sage-100 last:border-0">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg leading-snug">{project.name}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sage-600 hover:text-sage-800 transition-colors mt-1 inline-block"
                  >
                    ↗ View
                  </a>
                )}
                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-sage-100 text-sage-700 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="md:col-span-2 space-y-4">
                {project.problem && (
                  <div>
                    <span className="text-xs font-semibold text-sage-600 uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">{project.problem}</p>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <span className="text-xs font-semibold text-sage-600 uppercase tracking-wider">Approach</span>
                    <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">{project.approach}</p>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <span className="text-xs font-semibold text-sage-600 uppercase tracking-wider">Outcome</span>
                    <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">{project.outcome}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
