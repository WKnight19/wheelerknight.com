import { TbMessageCircleFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { TiLocationArrow } from 'react-icons/ti'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'
import PropTypes from 'prop-types'

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
)

const Contact = () => {
  const navigate = useNavigate()

  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/sub-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox
            src="/img/sub-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-1 translate-y-40"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src="/img/main.webp" clipClass="sword-man-clip-path md:scale-125" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Let&#39;s Get in touch.</p>
          <AnimatedTitle
            title="Contact Me within the website"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <Button
            id="contact-button"
            title="Contact Me"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-red-300 flex-center gap-1 mt-10"
            onClick={() => navigate('/contact')}
          />{' '}
        </div>
      </div>
    </div>
  )
}

ImageClipBox.propTypes = {
  src: PropTypes.string,
  clipClass: PropTypes.string,
}

export default Contact
