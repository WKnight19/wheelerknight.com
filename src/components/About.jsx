import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import PropTypes from 'prop-types'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = ({
  welcomeText = 'Welcome to my portfolio!',
  title = 'Disc<b>o</b>ver my skills, experience and pr<b>o</b>jects',
  headerText = 'About Me  |  Wheeler Knight',
  description = 'I am an aspiring software developer from Alabama, looking for a summer internship to jumpstart my career and refine my skills.',
  imageSrc = '/img/about.webp',
}) => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    })
  })

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-28 flex flex-col items-center gap-5">
        <p className="font-general text-base uppercase md:[text-10px]">{welcomeText}</p>

        <AnimatedTitle title={title} containerClass="mt-5 !text-black text-center" />

        <div className="about-subtext">
          <p>{headerText}</p>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={imageSrc}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  welcomeText: PropTypes.string,
  title: PropTypes.string,
  headerText: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default About
