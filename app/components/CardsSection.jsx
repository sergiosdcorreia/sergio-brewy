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
  const textRef = useRef(null);

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
        top: '60%',
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

    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: '4000',
        toggleActions: 'play reverse play reverse',
      }
    });

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
        <section id='fragrance' className='cards bg-[url("/hero_bg.jpg")] bg-cover'>
          <h3 ref={textRef} className='cards_text text-white w-[70%] text-center absolute top-[26%] left-[50%] -translate-x-1/2 -translate-y-10 opacity-0'>Experience the vibrant taste of Organic Colombian Coffee, crafted to perfection with a smooth finish and rich aroma. Its balanced notes offer a satisfying blend of flavor and freshness, making every cup truly exceptional.</h3>
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
