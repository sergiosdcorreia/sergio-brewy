'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from 'lenis/react'
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CardsSection from './components/CardsSection'
import Quality from './components/Quality'
import Products from './components/Products'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  useEffect(() => {
    const mediaQueries = gsap.matchMedia();

    const scrollTriggerSettings = {
      trigger: '.main',
      start: 'top 10%',
      toggleActions: 'play reverse play reverse',
    }

    const leftXValues = [-800, -900, -400]
    const rightXValues = [800, 900, 400]
    const leftRotationValues = [-30, -20, -35]
    const rightRotationValues = [30, 20, 35]
    const yValues = [100, -150, -400]

    mediaQueries.add('(min-width: 1280px)', () => {
      gsap.utils.toArray('.row').forEach((row, index) => {
        const cardLeft = row.querySelector('.card-left')
        const cardRight = row.querySelector('.card-right')
        
        gsap.to(cardLeft, {
          x: leftXValues[index],
          scrollTrigger: {
            trigger: '.main',
            start: 'top center',
            end: '120% bottom',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress
              cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationValues[index]}deg)`
              cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationValues[index]}deg)`
            }
          }
        })

        gsap.to('.logo', {
          scale: 1,
          duration: .5,
          ease: 'power1.out',
          scrollTrigger: scrollTriggerSettings,
        })

        gsap.to('.line p', {
          y: 0,
          stagger: .1,
          duration: .5,
          ease: 'power1.out',
          scrollTrigger: scrollTriggerSettings,
        })

        gsap.to('.line input', {
          y: 0,
          stagger: .1,
          duration: .5,
          ease: 'power1.out',
          scrollTrigger: scrollTriggerSettings,
        })

        gsap.to('.button-animated', {
          y: 0,
          opacity: 1,
          delay: .25,
          duration: .5,
          ease: 'power1.out',
          scrollTrigger: scrollTriggerSettings,
        })
      })
    })


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const generateRows = () => {
    const rows = []
    for (let i = 1; i <=3; i++) {
      rows.push(
        <div className='row' key={i}>
          <div className='card-image card-left'>
            <Image src={`/product-${2 * i - 1}.jpg`} alt='image_left' width={1024} height={960} />
          </div>
          <div className='card-image card-right'>
            <Image src={`/product-${2 * i}.jpg`} alt='image_right' width={1024} height={960} />
          </div>
        </div>
      )
    }
    return rows
  }
  return (
    <>
    <h1 className='sr-only'>Brewy</h1>
    <ReactLenis root>
      <Header />
      <Hero />
      <About />
      <CardsSection />
      <Quality />
      <Products />
      <section className='main section-footer-animation pt-[300px] hidden'>
        <div className='main-content z-40'>
          <h2 className='sr-only'>Newsletter</h2>
          <div className='logo'>
            <Image src='/cup.png' alt='Cup of coffee' width={5000} height={5000} />
          </div>
          <div className='copy flex flex-col justify-center items-center text-white gap-5 pt-10'>
            <div className='line'>
              <p>Stay updated on the latest about us</p>
            </div>
            <div className='line'>
              <p>and subscribe to our newsletter.</p>
            </div>
            <div className='line text-start'>
              <input type='email' placeholder='email' className='p-3 text-black outline-none' />
            </div>
          </div>
          <div className='btn pt-3'>
            <button className='btn_primary button-animated text-white bg-green-800 px-14 py-4 uppercase duration-300'><span className='relative z-10'>Subscribe</span></button>
          </div>
        </div>
        {generateRows()}
      </section>
      <Footer />
    </ReactLenis>
    </>
  );
}
