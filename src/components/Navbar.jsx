// Music by Bensound.com/royalty-free-music
// License code: H4LMBTBZXCUSVSUT

import clsx from 'clsx'
import gsap from 'gsap'
import { useWindowScroll } from 'react-use'
import { useEffect, useRef, useState } from 'react'
import { FcMusic } from 'react-icons/fc'
import { TbMessageCircleFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import Button from './Button'

const navItems = [
  { title: 'Projects', path: '/projects' },
  { title: 'Experience', path: '/experience' },
  { title: 'Skills', path: '/skills' },
  { title: 'About', path: '/about' },
  { title: 'Resume', path: '/resume' },
  { title: 'Goals', path: '/goals' },
]

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isIndicatorActive, setIsIndicatorActive] = useState(false)

  // Refs for audio and navigation container
  const audioElementRef = useRef(null)
  const navContainerRef = useRef(null)

  const { y: currentScrollY } = useWindowScroll()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev)
    setIsIndicatorActive((prev) => !prev)
  }

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play()
    } else {
      audioElementRef.current.pause()
    }
  }, [isAudioPlaying])

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true)
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false)
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true)
      navContainerRef.current.classList.add('floating-nav')
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img src="/img/logo.png" alt="logo" className="w-12" />
            </Link>
            <Link to="/contact">
              <Button
                id="contact-button"
                title="Contact Me"
                leftIcon={<TbMessageCircleFilled />}
                containerClass="bg-red-300 md:flex hidden flex-center gap-2"
              />
            </Link>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path} className="nav-hover-btn">
                  {item.title}
                </Link>
              ))}
            </div>

            <button onClick={toggleAudioIndicator} className="ml-10 flex items-center space-x-0.5">
              <FcMusic className="mr-1 mb-1 justify-center" />

              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx('indicator-line', {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
