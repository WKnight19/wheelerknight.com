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

          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex justify-center">
              <Button
                title="Download Resume"
                leftIcon={<TiDownload />}
                containerClass="bg-red-300 flex-center gap-1"
                onClick={() => window.open('/img/resume.pdf')}
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Summary Section */}
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed">{content.summary}</p>
              </div>

              {/* Highlights Section */}
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-xl font-bold text-red-300">Key Highlights</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  {content.highlights.map((highlight, index) => (
                    <li key={index} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="mt-12">
              <h3 className="mb-6 text-center text-xl font-bold text-red-300">Resume Preview</h3>
              <div className="flex justify-center">
                <div className="w-full max-w-[600px] overflow-hidden rounded-lg bg-zinc-800/50 shadow-xl">
                  <div className="relative aspect-[8.5/11]">
                    <img
                      src="/img/resume.png"
                      alt="Resume Preview"
                      className="absolute inset-0 h-full w-full cursor-pointer object-contain p-4 hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open('/img/resume.pdf', '_blank')}
                    />
                    <div
                      className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 opacity-0 transition-all hover:bg-black/20 hover:opacity-100"
                      onClick={() => window.open('/img/resume.pdf', '_blank')}
                    >
                      <span className="rounded-full bg-red-300/90 px-6 py-3 text-sm font-medium text-black">
                        Open PDF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-400">
                Click on the resume to open the full PDF version
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
