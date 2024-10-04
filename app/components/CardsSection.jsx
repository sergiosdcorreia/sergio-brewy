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
    const mediaQueries = gsap.matchMedia()
    const cards = cardRefs.current
    const totalScrollHeight = window.innerHeight * 3
    const positions = [14, 38, 62, 86]
    const rotations = [-15, -7.5, 7.5, 15]
    const mdPositionsX = [25, 75, 25, 75]
    const mdPositionsY = [35, 35, 75, 75]
    const mdRotations = [-7.5, 7.5, -7.5, 7.5]

    mediaQueries.add('(max-width: 767px)', () => {

      cards.forEach((card) => {
        const frontEl = card.querySelector('.flip-card-front')
        const backEl = card.querySelector('.flip-card-back')
        const frontRotation = -180
        const backRotation = 180 - 180
  
        gsap.to(frontEl, {
          scrollTrigger: {
            trigger: card,
            start: 'top 40%',
            toggleActions: 'play pause resume reverse',
          },
          rotateY: frontRotation,
          duration: 1,
          ease: 'power1.out'
        })
        gsap.to(backEl, {
          scrollTrigger: {
            trigger: card,
            start: 'top 40%',
            toggleActions: 'play pause resume reverse',
          },
          rotateY: backRotation,
          duration: 1,
          ease: 'power1.out'
        })
      })

      gsap.to('.cards_text', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          toggleActions: 'play reverse play reverse',
        }
      });
    })

    mediaQueries.add('(min-width: 768px) and (max-width: 1023px)', () => {
      ScrollTrigger.create({
        trigger: containerRef.current.querySelector('.cards'),
        start: 'top top',
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      })

      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${mdPositionsX[index]}%`,
          rotation: `${mdRotations[index]}`,
          top: `${mdPositionsY[index]}%`,
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

      gsap.to('.cards_text', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 500',
          end: '3000',
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
              const cardRotation = mdRotations[index] * (1 - animationProgress)
  
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
    })

    mediaQueries.add('(min-width: 1024px)', () => {
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
  
      gsap.to('.cards_text', {
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
        <section id='fragrance' className='cards bg-[url("/hero_bg.jpg")] bg-cover py-20 md:py-0'>
          <div className='product_animation-container mb-20 md:mb-0'>
            <h3 className='cards_text text-white w-full p-5 md:p-0 md:w-[70%] text-center md:relative md:pt-64 lg:pt-80 md:top-[26%] md:left-[50%] md:-translate-x-1/2 -translate-y-[100%] opacity-0'>Experience the vibrant taste of Organic Colombian Coffee, crafted to perfection with a smooth finish and rich aroma. Its balanced notes offer a satisfying blend of flavor and freshness, making every cup truly exceptional.</h3>
          </div>
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
