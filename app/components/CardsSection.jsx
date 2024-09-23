'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Card from './Card'

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
    })

    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${positions[index]}%`,
        rotation: `${rotations[index]}`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
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
        <section className='hero-cards'>
          <h1>
            Keep scrolling to reveal the cards
          </h1>
        </section>
        <section className='cards'>
          {[...Array(4)].map((_, index) => {
            return (
              <Card
                key={index}
                id={`card-${index + 1}`}
                frontSrc='/card-front.png'
                frontAlt='Card Image'
                backText='Your card details appear here'
                ref={(el) => (cardRefs.current[index] = el)}
              />
            )
          })}
        </section>
        <section className='footer-cards'>
          <h1>Footer or Upcoming Section</h1>
        </section>
      </div>
    </>
  );
}
