import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import { pageData } from '../data/pageData'

const Goals = () => {
  const { hero, content } = pageData.goals

  return (
    <>
      <About {...hero} />
      <div className="bg-zinc-900 pt-12 text-white">
        <div className="container mx-auto px-4">
          <AnimatedTitle title="Career Goals" containerClass="text-center mb-6" />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-300">Short Term Goals</h3>
              <ul className="list-inside list-disc space-y-2">
                {content.shortTerm.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-300">Long Term Goals</h3>
              <ul className="list-inside list-disc space-y-2">
                {content.longTerm.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Goals
