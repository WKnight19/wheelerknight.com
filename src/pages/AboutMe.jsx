import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import { pageData } from '../data/pageData'

const AboutMe = () => {
  const { hero, content } = pageData.about

  return (
    <>
      <About {...hero} />
      <div className="bg-zinc-900 pb-32 pt-12 text-white">
        <div className="container mx-auto px-4">
          <AnimatedTitle title="About Me" containerClass="text-center mb-10" />
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {content.skills.map((skill, index) => (
                    <span key={index} className="rounded-full bg-blue-500/20 px-4 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {content.interests.map((interest, index) => (
                    <span key={index} className="rounded-full bg-red-500/20 px-4 py-1">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg bg-zinc-800/50 p-6 text-center">
              <h3 className="mb-4 text-xl font-bold text-red-300">Education & Location</h3>
              <p className="mb-4 text-lg">{content.education}</p>
              <p className="text-gray-400">{content.location}</p>
            </div>
            {/* New Personal Section */}
            <div className="mt-12">
              <h2 className="mb-8 text-center text-2xl font-bold text-red-300">Personal Life</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {Object.entries(content.personal).map(([key, item]) => (
                  <div key={key} className="group overflow-hidden rounded-lg bg-zinc-800/50">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold text-red-300">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
