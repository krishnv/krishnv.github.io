import portfolio from '../content/portfolio.md'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Impact from './components/Impact'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import Stack from './components/Stack'
import Articles from './components/Articles'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav name={portfolio.name} />
      <main>
        <Hero
          name={portfolio.name}
          title={portfolio.title}
          company={portfolio.company}
          companyPeriod={portfolio.companyPeriod}
          tagline={portfolio.tagline}
          bio={portfolio.bio}
        />
        <Experience experience={portfolio.experience} />
        <Impact impact={portfolio.impact} />
        <Projects projects={portfolio.projects} />
        <Recommendations recommendations={portfolio.recommendations} />
        <Stack stack={portfolio.stack} />
        <Articles articles={portfolio.articles} />
        <Contact contact={portfolio.contact} name={portfolio.name} />
      </main>
    </div>
  )
}
