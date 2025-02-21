import {
  FaDiscord,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const socialLinks = [
  {
    href: 'https://discordapp.com/users/wheelzmcgee199067',
    icon: <FaDiscord />,
  },
  { href: 'https://www.instagram.com/wheelerknight/', icon: <FaInstagram /> },
  { href: 'https://github.com/WKnight19', icon: <FaGithub /> },
  {
    href: 'https://www.linkedin.com/in/wheeler-knight-8202b7274',
    icon: <FaLinkedin />,
  },
]

const Footer = () => {
  return (
    <footer className="w-screen bg-red-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">@wheelerknight.com (2025)</p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black mr-3 transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
