import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import { pageData } from '../data/pageData'

const Skills = () => {
  const { hero, content } = pageData.skills

  return (
    <>
      <About {...hero} />
      <div className="bg-zinc-900 pb-32 pt-12 text-white">
        <div className="container mx-auto px-4">
          <AnimatedTitle title="Technical Skills" containerClass="text-center mb-10" />
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-300">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {content.frontend.map((skill, index) => (
                  <span key={index} className="rounded-full bg-blue-500/20 px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {content.backend.map((skill, index) => (
                    <span key={index} className="rounded-full bg-green-500/20 px-4 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {content.tools.map((tool, index) => (
                    <span key={index} className="rounded-full bg-purple-500/20 px-4 py-2">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="mb-4 text-xl font-bold text-red-300">Currently Learning</h3>
              <div className="flex flex-wrap gap-2">
                {content.learning.map((item, index) => (
                  <span key={index} className="rounded-full bg-yellow-500/20 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
