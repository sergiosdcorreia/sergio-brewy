'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Card from './Card'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function CardsSection() {
  const containerRef = useRef(null)
  const cardRefs = useRef([])

  useGSAP(() => {
    const cards = cardRefs.current
    const totalScrollHeight = window.innerHeight * 3
    const positions = [14, 38, 62, 86]
    const rotations = [-15, -7.5, 7.5, 15]

    ScrollTrigger.create({
      trigger: containerRef.current.querySelector('.cards'),
      start: 'top top',
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
      markers: true,
    })

    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${positions[index]}%`,
        rotation: `${rotations[index]}`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 400',
          end: () => `+=${window.innerHeight}`,
          scrub: .5,
          id: `spread-${index}`
        }
      })
    })


    cards.forEach((card, index) => {
      const frontEl = card.querySelector('.flip-card-front')
      const backEl = card.querySelector('.flip-card-back')

      const staggerOffset = index * .05
      const startOffset = 1 / 3 + staggerOffset
      const endOffset = 2 / 3 + staggerOffset

      ScrollTrigger.create({
        trigger: containerRef.current.querySelector('.cards'),
        start: 'top top',
        end: () => `+=${totalScrollHeight}`,
        scrub: 1,
        id: `rotate-flip-${index}`,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3)
            const frontRotation = -180 * animationProgress
            const backRotation = 180 - 180 * animationProgress
            const cardRotation = rotations[index] * (1 - animationProgress)

            gsap.to(frontEl, { rotateY: frontRotation, ease: 'power1.out' })
            gsap.to(backEl, { rotateY: backRotation, ease: 'power1.out' })
            gsap.to(card, {
              xPercent: -50,
              yPercent: -50,
              rotate: cardRotation,
              ease: 'power1.out'
            })
          }
        }
      })
    })
  }, { scope: containerRef})

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className='container-cards'>
        <section className='hero-cards h-[150vh]'>
          <div className='bg-[url("/hero_bg.jpg")] bg-cover h-[70vh]'>
            <div className='container mx-auto pt-40 pb-[40%] flex flex-col justify-center items-center gap-3 text-center md:pb-[30%]'>
              <h1 className='text-green-700 mt-[10%]'>Organic</h1>

              <h1>Colombian Coffee</h1>

              <p className='text-white mt-5 md:w-[70%]'>Experience the rich essence of Colombia with a coffee crafted to perfection. Smooth and bold, each sip delivers a unique blend of flavor and aroma that awakens your senses.</p>
            </div>
          </div>
          <div className='relative h-[35vh] bg-green-800 bg-[url("/coffee_pattern.png")] bg-repeat bg-[length:400px_400px] z-20'>
            <div className='relative w-full h-0 pb-[50%]'>
              <Image src='/coffee-bean.png' alt='coffee_bean' width={2049} height={1531} className='absolute -top-1/2 lg:-top-1/3 left-1/2 transform -translate-x-1/2 w-[60%] md:w-[70%] lg:w-[700px] object-contain' />
            </div>
          </div>
        </section>
        <section className='cards bg-[url("/hero_bg.jpg")] bg-cover'>
          {['Arabica Green', 'Arabica Roasted', 'Robusta Roasted', 'Mixed Sorts'].map((frontText, index) => {
            return (
              <Card
                key={index}
                id={`card-${index + 1}`}
                frontSrc={`/coffee-${index + 1}.jpg`}
                frontAlt='Card Image'
                frontText={frontText}
                backText='Enjoy the smooth, full-bodied flavor of Organic Colombian Coffee, perfectly balanced for a rich and satisfying experience.'
                ref={(el) => (cardRefs.current[index] = el)}
              />
            )
          })}
        </section>
      </div>
    </>
  );
}
