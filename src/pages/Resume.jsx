import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import { pageData } from '../data/pageData'
import Button from '../components/Button'
import { TiDownload } from 'react-icons/ti'

const Resume = () => {
  const { hero, content } = pageData.resume

  return (
    <>
      <About {...hero} />
      <div className="bg-zinc-900 pb-32 pt-12 text-white">
        <div className="container mx-auto px-4">
          <AnimatedTitle title="Resume" containerClass="text-center mb-10" />

          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center">
              <Button
                title="Download Resume"
                leftIcon={<TiDownload />}
                containerClass="bg-red-300 flex-center gap-1"
                onClick={() => window.open('/img/resume.pdf')}
              />
            </div>

            <div className="space-y-8">
              {/* Education Section */}
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Education</h3>
                <h4 className="text-lg font-bold">{content.education.degree}</h4>
                <p className="text-blue-300">{content.education.school}</p>
                <p className="mb-2 text-sm text-gray-400">{content.education.period}</p>
                <ul className="list-inside list-disc space-y-1 text-gray-300">
                  {content.education.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Experience Section */}
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Experience</h3>
                {content.experience.map((exp, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-blue-300">{exp.company}</p>
                    <p className="mb-2 text-sm text-gray-400">{exp.period}</p>
                    <ul className="list-inside list-disc space-y-1 text-gray-300">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Certifications Section */}
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Certifications</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {content.certifications.map((cert, index) => (
                    <div key={index} className="rounded-lg bg-zinc-700/30 p-4">
                      <h4 className="font-bold">{cert.name}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                      <p className="text-sm text-blue-300">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
