import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import Button from '../components/Button'
import { TiLocationArrow } from 'react-icons/ti'
import { FaDiscord, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

import PropTypes from 'prop-types'

const ContactInfo = ({ icon, label, value, link }) => (
  <div className="flex items-center gap-3 rounded-lg bg-zinc-700/30 p-4">
    <div className="text-xl text-red-300">{icon}</div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-red-300 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
)

const ContactMe = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: '', type: '' })

    try {
      await emailjs.sendForm(
        'service_k4kygrd', // Replace with your EmailJS service ID
        'template_l8hd7en', // Replace with your EmailJS template ID
        formRef.current,
        'RXCwRK3xFYMQ3vwts' // Replace with your EmailJS public key
      )

      setMessage({
        text: 'Message sent successfully! I will get back to you soon.',
        type: 'success',
      })
      formRef.current.reset()
    } catch (error) {
      setMessage({
        text: 'Failed to send message. Please try again.',
        type: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      label: ' Personal Email',
      value: 'wheelerknight19@gmail.com',
      link: 'wheelerknight19@gmail.com',
    },
    {
      icon: <FaEnvelope />,
      label: ' School Email',
      value: 'wbknight1@crimson.ua.edu',
      link: 'wbknight1@crimson.ua.edu',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '(256) 290-8916',
    },
    {
      icon: <FaDiscord />,
      label: 'Discord',
      value: 'wheelzmcgee199067',
      link: 'https://discordapp.com/users/wheelzmcgee199067',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'wheeler-knight',
      link: 'https://www.linkedin.com/in/wheeler-knight-8202b7274',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'WKnight19',
      link: 'https://github.com/WKnight19',
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      value: '@wheelerknight',
      link: 'https://www.instagram.com/wheelerknight/',
    },
  ]

  return (
    <>
      <About
        welcomeText="Get in Touch"
        title="Let's C<b>o</b>nnect"
        headerText="Contact | Wheeler Knight"
        description="Reach out to discuss opportunities, collaborations, or just to say hello"
        imageSrc="/img/contact-hero.webp"
      />
      <div className="bg-zinc-900 pb-32 pt-12 text-white">
        <div className="container mx-auto px-4">
          <AnimatedTitle title="Contact Me" containerClass="text-center mb-10" />

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-lg bg-zinc-800/50 p-8">
                <h3 className="mb-6 text-xl font-bold text-red-300">Send Me a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full rounded-lg bg-zinc-700/50 p-3 outline-none ring-red-300 focus:ring-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full rounded-lg bg-zinc-700/50 p-3 outline-none ring-red-300 focus:ring-2"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      className="w-full rounded-lg bg-zinc-700/50 p-3 outline-none ring-red-300 focus:ring-2"
                      placeholder="Your message..."
                    />
                  </div>

                  {message.text && (
                    <div
                      className={`rounded-lg p-3 text-sm ${
                        message.type === 'success'
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {message.text}
                    </div>
                  )}

                  <Button
                    title={loading ? 'Sending...' : 'Send Message'}
                    leftIcon={<TiLocationArrow />}
                    containerClass="bg-red-300 flex-center gap-1 w-full justify-center disabled:opacity-50"
                    disabled={loading}
                  />
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-red-300">Contact Information</h3>
                <div className="grid gap-4">
                  {contactDetails.map((detail, index) => (
                    <ContactInfo key={index} {...detail} />
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

ContactInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ContactMe
