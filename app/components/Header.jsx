'use client'

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import Image from "next/image"
import gsap from 'gsap'
import { RiCloseLargeLine, RiFacebookFill, RiInstagramLine, RiMenu4Line, RiSearchLine, RiShoppingBagFill, RiTwitterXLine, RiUserFill, RiYoutubeFill } from "react-icons/ri"
import ScrollLink from './ScrollLink';
import CustomEase from "gsap/CustomEase";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(min-width: 1024px)").matches;
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('home')
  
  const menuRef = useRef(null)

  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setIsMenuOpen((prevIsOpen) => {
        return !prevIsOpen;
      });
    }
  }, [isAnimating]);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  const animateMenu = useCallback((open) => {
    if (!menuRef.current) {
      return;
    }

    const menu = menuRef.current
    const links = menu.querySelectorAll(".link")

    setIsAnimating(true);

    if (open) {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        onStart: () => {
          menu.style.pointerEvents = "all";
        },
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      gsap.to(links, {
        y: 0,
        stagger: .1,
        delay: .75,
        duration: 1.5,
        ease: 'power4.out',
      })
    } else {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        delay: 0.25,
        onComplete: () => {
          menu.style.pointerEvents = "none";
          gsap.set(menu, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });

          gsap.set(links, { y: '100%' });

          setIsAnimating(false);
        },
      });
    }
  }, []);

  useEffect(() => {
    gsap.to('#sticky-menu', {
      top: 0,
      duration: 5.5,
      delay: .8,
      ease: 'hop',
    })

    animateMenu(isMenuOpen)

    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
          setIsMenuOpen(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    const pageSectionsLinks = ['home', 'about', 'fragrance', 'quality', 'products']
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
      window.removeEventListener("resize", handleResize)
    }

  }, [isMenuOpen, animateMenu])

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
              <div ref={menuRef} id="nav-menu" className={`absolute top-0 ${isMenuOpen ? 'right-[0]' : 'right-[-100%]'} min-h-[70vh] w-full px-5 md:px-10 bg-white flex flex-col gap-5 duration-500 ease-out overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto z-50`}>
                <div className="flex items-center justify-between h-24 lg:hidden product_animation-container">
                  <Image className="link relative -translate-y-full will-change-transform w-[80px] h-[80px] mt-5" src="/logo_2.png" alt="logo_2" width={205} height={205} />
                  <button id="closeicon" className="link relative -translate-y-full will-change-transform text-3xl cursor-pointer" onClick={toggleMenu}>
                    <RiCloseLargeLine />
                  </button>
                </div>
                <ul className="flex flex-col items-start gap-5 lg:flex-row lg:mt-8">
                  <li onClick={toggleMenu} className='product_animation-container'>
                    <span className="link relative -translate-y-full will-change-transform lg:translate-y-0">
                      <ScrollLink id="home" active={activeSection === 'home' ? true : false }>Home</ScrollLink>
                    </span>
                  </li>
                  <li onClick={toggleMenu} className='product_animation-container'>
                    <span className="link relative -translate-y-full will-change-transform">
                      <ScrollLink id="about" active={activeSection === 'about' ? true : false }>About</ScrollLink>
                    </span>
                  </li>
                  <li onClick={toggleMenu} className='product_animation-container'>
                    <span className="link relative -translate-y-full will-change-transform">
                      <ScrollLink id="fragrance" active={activeSection === 'fragrance' ? true : false }>Fragrance</ScrollLink>
                    </span>
                  </li>
                  <li onClick={toggleMenu} className='product_animation-container'>
                    <span className="link relative -translate-y-full will-change-transform">
                      <ScrollLink id="quality" active={activeSection === 'quality' ? true : false }>Quality</ScrollLink>
                    </span>
                  </li>
                  <li onClick={toggleMenu} className='product_animation-container'>
                    <span className="link relative -translate-y-full will-change-transform">
                      <ScrollLink id="products" active={activeSection === 'products' ? true : false }>Products</ScrollLink>
                    </span>
                  </li>
                </ul>
                <div className="flex items-center my-10 lg:hidden product_animation-container">
                  <p className="link relative -translate-y-full will-change-transform font-bold">Follow us <span className="ml-3 mr-5">-</span></p>
                  <ul className="link relative -translate-y-full will-change-transform nav__icons flex space-x-4">
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
