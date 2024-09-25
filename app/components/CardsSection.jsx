'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Card from './Card'
import Image from 'next/image'
import { RiFileList2Fill, RiPhoneFill } from 'react-icons/ri'

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
      delay: .25,
      duration: 0.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: '3000',
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
        <section className='h-[100vh] bg-white bg-cover flex'>
          <div className='flex flex-col justify-center h-100 p-20 lg:gap-20 lg:w-1/2'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-green-700'>Caturra & Maragogipe</h2>
              <h2>Boutique Plantation Coffee</h2>
              <p className='mt-5'>The smooth richness of Organic Colombian Coffee is perfectly balanced, offering a deep, bold flavor with a hint of sweetness. Enjoy the harmonious blend that awakens your senses with every sip.</p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex gap-5 items-center'>
                <RiFileList2Fill className='text-2xl text-green-700' />
                <a className='font-bold text-green-700' href="#">Download price</a>
              </div>
              <div className='flex gap-5 items-center'>
                <RiPhoneFill className='text-2xl text-green-700' />
                <a className='font-bold text-green-700' href="#">07472 849 396</a>
              </div>
            </div>
            <div className='flex gap-20'>
              <button className='btn_primary'><span className='relative z-10'>Read More</span></button>
              <button className='btn_secondary'><span className='relative z-10'>Read More</span></button>
            </div>
          </div>
          <div className='relative p-20 lg:w-1/2'>
            <Image className='object-contain' src='/about_image.png' alt="about_image" width={1000} height={866} />
            <div className='absolute top-[30%] left-[15%] lg:left-[10%] bg-white h-40 w-40 lg:h-44 lg:w-44 rounded-full grid place-content-center text-center border-2 border-green-900'>
              <div>
                <h3>since</h3>
                <h2 className='text-green-700'>1955</h2>
              </div>
            </div>
          </div>
        </section>
        <section className='cards bg-[url("/hero_bg.jpg")] bg-cover'>
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
