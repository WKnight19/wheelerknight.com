import AnimatedTitle from '../components/AnimatedTitle'
import About from '../components/About'
import Button from '../components/Button'
import { TiLocationArrow } from 'react-icons/ti'

const ContactMe = () => {
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
          <div className="mx-auto max-w-2xl rounded-lg bg-zinc-800/50 p-8">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-zinc-700/50 p-3 outline-none ring-red-300 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-zinc-700/50 p-3 outline-none ring-red-300 focus:ring-2"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  className="w-full rounded-lg bg-zinc-700/50 p-3 outline-none ring-red-300 focus:ring-2"
                  placeholder="Your message..."
                />
              </div>
              <Button
                title="Send Message"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-red-300 flex-center gap-1 w-full justify-center"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe
