import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import { pageData } from '../data/pageData'

const Projects = () => {
  const { hero, content } = pageData.projects

  return (
    <>
      <About {...hero} />
      <div className="bg-zinc-900 pt-12 text-white">
        <div className="container mx-auto px-4">
          <AnimatedTitle title="Projects" containerClass="text-center mb-6" />
          <div className="grid gap-8 md:grid-cols-2">
            {content.featured.map((project, index) => (
              <div key={index} className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-2 text-xl font-bold text-red-300">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
