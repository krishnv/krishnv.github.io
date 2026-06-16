import {
  siPython, siOpenjdk, siPostgresql, siAngular, siReact, siStreamlit,
  siSpringboot, siLangchain, siN8n, siSnowflake, siGit, siSpring,
} from 'simple-icons'

const ICON_MAP = {
  'Python':         siPython,
  'Java':           siOpenjdk,
  'SQL':            siPostgresql,
  'Angular':        siAngular,
  'React':          siReact,
  'Streamlit':      siStreamlit,
  'Spring Boot':    siSpringboot,
  'LangChain':      siLangchain,
  'n8n':            siN8n,
  'Snowflake':      siSnowflake,
  'Git':            siGit,
}

function TechBadge({ name }) {
  const icon = ICON_MAP[name]
  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-800 rounded-lg text-sm font-medium bg-white hover:border-gray-500 hover:shadow-sm transition-all">
      {icon && (
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill={`#${icon.hex}`}
          aria-hidden="true"
          className="shrink-0"
        >
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </span>
  )
}

export default function Stack({ stack = [] }) {
  const filled = stack.filter((s) => s.items?.length)
  if (!filled.length) return null

  return (
    <section id="stack" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-10">
        Stack
      </h2>
      <div className="space-y-8">
        {filled.map((group, i) => (
          <div key={i} className="grid md:grid-cols-4 gap-4 items-start">
            <span className="text-xs font-semibold text-gray-500 pt-2">{group.category}</span>
            <div className="md:col-span-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
