'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from 'lenis/react'
import Header from './components/Header'
import Hero from './components/Hero'
import CardsSection from './components/CardsSection'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: '.main',
      start: 'top top',
      toggleActions: 'play reverse play reverse',
    }

    const leftXValues = [-800, -900, -400]
    const rightXValues = [800, 900, 400]
    const leftRotationValues = [-30, -20, -35]
    const rightRotationValues = [30, 20, 35]
    const yValues = [100, -150, -400]

    gsap.utils.toArray('.row').forEach((row, index) => {
      const cardLeft = row.querySelector('.card-left')
      const cardRight = row.querySelector('.card-right')
      
      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: '.main',
          start: 'top center',
          end: '150% bottom',
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

      gsap.to('.button-animated', {
        y: 0,
        opacity: 1,
        delay: .25,
        duration: .5,
        ease: 'power1.out',
        scrollTrigger: scrollTriggerSettings,
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
            <img src={`/product-${2 * i - 1}.jpg`} alt='' />
          </div>
          <div className='card-image card-right'>
            <img src={`/product-${2 * i}.jpg`} alt='' />
          </div>
        </div>
      )
    }
    return rows
  }
  return (
    <>
    <ReactLenis root>
      <Header />
      <Hero />
      <CardsSection />
      <section className='main section-footer-animation'>
        <div className='main-content z-40'>
          <div className='logo'>
            <Image src='/cup.png' alt='Cup of coffee' width={5000} height={5000} />
          </div>
          <div className='copy text-white'>
            <div className='line'>
              <p>Stay updated with our newsletter</p>
            </div>
            <div className='line'>
              <p>on the latest about our coffee.</p>
            </div>
            <div className='line'>
              <p>Sign it now!</p>
            </div>
          </div>
          <div className='btn'>
            <button className='btn_primary button-animated'><span className='relative z-10'>Newsletter</span></button>
          </div>
        </div>
        {generateRows()}
      </section>
      <section className='footer section-footer-animation'>
        <p>Copyright 2024 - Sergio Correia</p>
      </section>
    </ReactLenis>
    </>
  );
}
