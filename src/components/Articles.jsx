export default function Articles({ articles = [] }) {
  const filled = articles.filter((a) => a.title)
  if (!filled.length) return null

  return (
    <section id="articles" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Articles
        </h2>
        <div className="space-y-0">
          {filled.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 group py-4 border-b border-gray-200 last:border-0"
            >
              <span className="text-sm text-gray-700 group-hover:text-gray-950 transition-colors font-medium">
                {article.title}
              </span>
              <div className="flex items-center gap-3 shrink-0">
                {article.date && (
                  <span className="text-xs text-gray-500 font-mono">{article.date}</span>
                )}
                <span className="text-gray-400 group-hover:text-gray-700 transition-colors text-xs">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
