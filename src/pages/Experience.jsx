import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import { pageData } from '../data/pageData'

const Experience = () => {
  const { hero, content } = pageData.experience

  return (
    <>
      <About {...hero} />
      <div className="bg-zinc-900 pt-12 text-white">
        <div className="container mx-auto px-4">
          <AnimatedTitle title="Experience" containerClass="text-center mb-6" />
          <div className="mx-auto max-w-3xl space-y-8">
            {content.positions.map((position, index) => (
              <div key={index} className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="text-xl font-bold text-red-300">{position.title}</h3>
                <p className="text-lg text-blue-300">{position.company}</p>
                <p className="text-sm text-gray-400">{position.period}</p>
                <p className="mt-2">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
