'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import gsap from 'gsap'
import { RiCloseLargeLine, RiFacebookFill, RiInstagramLine, RiMenu4Line, RiSearchLine, RiShoppingBagFill, RiTwitterXLine, RiUserFill, RiYoutubeFill } from "react-icons/ri"
import ScrollLink from './ScrollLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home')
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.to('#sticky-menu', {
      top: 0,
      duration: 1,
      delay: 1.5,
      ease: 'power1.out',
    })

    const pageSectionsLinks = ['home', 'about', 'fragrance']
    let sectionElements = []

    pageSectionsLinks.map((id) => {
      const section = document.getElementById(id)
      sectionElements.push(section)
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    });

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        observer.unobserve(section);
      });
    }

  }, [])

  return (
    <>
      <header id="navbar" className='w-100 text-black lg:text-white'>
        <nav className="max-w-[1920px">
          <div id="sticky-menu" className="fixed w-full top-[-250px] left-0 z-50 bg-black/70 pb-10">
            <div className="flex items-center justify-between h-24 px-5 md:px-10 lg:mx-auto lg:h-auto lg:flex-col">
              <div className="flex-1 lg:hidden"></div>
              <div className="flex-1 grid place-items-center lg:place-items-start lg:flex-initial lg:w-full lg:grid-cols-3">
                <div className="hidden lg:flex items-center py-10 place-self-start">
                  <p className="font-bold">Follow us <span className="ml-3 mr-5">-</span></p>
                  <ul className="nav__icons flex space-x-4">
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-white lg:text-green-700'>
                        <RiTwitterXLine />
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-white lg:text-green-700'>
                        <RiFacebookFill />
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-white lg:text-green-700'>
                        <RiInstagramLine />
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-white lg:text-green-700'>
                        <RiYoutubeFill />
                      </a>
                    </li>
                  </ul>
                </div>
                <Image className="w-20 place-self-center lg:w-[80px] lg:h-[80px]" src="/logo.png" alt="logo" width={205} height={205} />
                <ul className="nav__icons hidden lg:flex space-x-8 place-self-end self-center">
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-white lg:text-green-700'>
                        <RiUserFill />
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='relative text-white lg:text-green-700'>
                        <RiShoppingBagFill />
                        <span className='font-bold absolute -top-2 -right-6 bg-white text-black text-xs w-6 h-6 rounded-full grid place-items-center'>0</span>
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-white lg:text-green-700'>
                        <RiSearchLine />
                      </a>
                    </li>
                  </ul>
              </div>
              <div id="nav-menu" className={`absolute top-0 ${isMenuOpen ? 'right-[0]' : 'right-[-100%]'} min-h-[70vh] w-full px-5 md:px-10 bg-white flex flex-col gap-5 duration-500 ease-out overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto z-50`}>
                <div className="flex items-center justify-between h-24 lg:hidden">
                  <Image className="w-[80px] h-[80px] mt-5" src="/logo_2.png" alt="logo_2" width={205} height={205} />
                  <button id="closeicon" className="text-3xl cursor-pointer" onClick={toggleMenu}>
                    <RiCloseLargeLine />
                  </button>
                </div>
                <ul className="flex flex-col items-start gap-5 lg:flex-row lg:mt-8">
                  <li onClick={toggleMenu}>
                    <ScrollLink id="home" active={activeSection === 'home' ? true : false }>Home</ScrollLink>
                  </li>
                  <li onClick={toggleMenu}>
                    <ScrollLink id="about" active={activeSection === 'about' ? true : false }>About</ScrollLink>
                  </li>
                  <li onClick={toggleMenu}>
                    <ScrollLink id="fragrance" active={activeSection === 'fragrance' ? true : false }>Fragrance</ScrollLink>
                  </li>
                  <li onClick={toggleMenu}>
                    <ScrollLink id="quality">Quality</ScrollLink>
                  </li>
                  <li onClick={toggleMenu}>
                    <ScrollLink id="products">Products</ScrollLink>
                  </li>
                </ul>
                <div className="flex items-center py-10 lg:hidden">
                  <p className="font-bold">Follow us <span className="ml-3 mr-5">-</span></p>
                  <ul className="nav__icons flex space-x-4">
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-black lg:text-green-700'>
                        <RiTwitterXLine />
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-black lg:text-green-700'>
                        <RiFacebookFill />
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-black lg:text-green-700'>
                        <RiInstagramLine />
                      </a>
                    </li>
                    <li className="border-2 border-black lg:border-green-900 h-8 w-8 rounded-full grid place-items-center">
                      <a href="#" className='text-black lg:text-green-700'>
                        <RiYoutubeFill />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute bottom-16 -right-5 -rotate-[30deg] opacity-20 pointer-events-none lg:hidden">
                  <Image className="w-72" src="/coffee_leaf.png" alt="bg_leaf" width={205} height={205} />
                </div>
              </div>
              <button id="hamburger" className="flex-1 text-white text-3xl flex justify-end cursor-pointer lg:hidden" onClick={toggleMenu}>
                <RiMenu4Line />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
