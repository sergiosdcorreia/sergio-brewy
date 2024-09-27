'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Quality() {
  const containerRef = useRef(null)
  const qualityLeftRef = useRef([])
  const qualityRightRef = useRef([])
  const coffeeCupRef = useRef(null)

  useEffect(() => {
    const mediaQueries = gsap.matchMedia()

    const qualityContainer = containerRef.current
    const qualityLeft = qualityLeftRef.current
    const qualityRight = qualityRightRef.current

    const coffeeCup = coffeeCupRef.current

    mediaQueries.add('(min-width: 1024px)', () => {
      
      qualityLeft.forEach((quality, index) => {
        gsap.to(quality, {
          scrollTrigger: {
            trigger: qualityContainer,
            start: 'top 600',
            end: 'bottom bottom',
            scrub: .1,
          },
          left: '0%',
          ease: 'none',
        })
      })

      qualityRight.forEach((quality, index) => {
        gsap.to(quality, {
          scrollTrigger: {
            trigger: qualityContainer,
            start: 'top 600',
            end: 'bottom bottom',
            scrub: .1,
          },
          left: '0%',
          ease: 'none',
        })
      })

      gsap.to(coffeeCup, {
        scrollTrigger: {
          trigger: qualityContainer,
          start: 'top 200',
          end: 'bottom bottom',
          scrub: .1,
        },
        scale: 1,
        rotation: 360,
        ease: 'none',
      })
    })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const setQualityLeftRef = (el, index) => {
    if (el && !qualityLeftRef.current.includes(el)) {
      qualityLeftRef.current[index] = el
    }
  }

  const setQualityRightRef = (el, index) => {
    if (el && !qualityRightRef.current.includes(el)) {
      qualityRightRef.current[index] = el
    }
  }

  return (
    <section ref={containerRef} id='quality' className='quality_main lg:flex p-20 md:p-28 min-h-[100vh] bg-white pt-[200px] lg:pt-[300px]'>
      <div className='flex flex-col gap-12 lg:flex-row lg:gap-20 lg:items-center'>
        <div className='flex flex-col gap-12 flex-1'>
          <div className='relative w-full h-[10vh] lg:h-[18vh]'>
            <div ref={(el) => setQualityLeftRef(el, 0)} className='quality-left quality-left-1 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
              <Image src='/quality_01.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
              <div>
                <h4>Pure Grades</h4>
                <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
              </div>
            </div>
          </div>
          <div className='relative w-full h-[10vh] lg:h-[18vh]'>
            <div ref={(el) => setQualityLeftRef(el, 1)} className='quality-left quality-left-2 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
              <Image src='/quality_02.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
              <div>
                <h4>Wide Assortment</h4>
                <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
              </div>
            </div>
          </div>
          <div className='relative w-full h-[10vh] lg:h-[18vh]'>
            <div ref={(el) => setQualityLeftRef(el, 2)} className='quality-left quality-left-3 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
              <Image src='/quality_03.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
              <div>
                <h4>Proper Roasting</h4>
                <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={coffeeCupRef} className='quality-coffee-cup flex-1 hidden lg:block scale-0'>
          <Image src='/cup.png' alt='quality' width={5000} height={5000} className='object-contain' />
        </div>
        <div className='flex flex-col gap-12 flex-1'>
          <div className='relative w-full h-[10vh] lg:h-[18vh]'>
            <div ref={(el) => setQualityRightRef(el, 0)} className='quality-right quality-right-1 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
              <Image src='/quality_04.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
              <div>
                <h4>High Quality</h4>
                <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
              </div>
            </div>
          </div>
          <div className='relative w-full h-[10vh] lg:h-[18vh]'>
            <div ref={(el) => setQualityRightRef(el, 1)} className='quality-right quality-right-2 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
              <div className='w-20 lg:w-28'>
                <Image src='/quality_05.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
              </div>
              <div>
                <h4>Excellent Grinding</h4>
                <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
              </div>
            </div>
          </div>
          <div className='relative w-full h-[10vh] lg:h-[18vh]'>
            <div ref={(el) => setQualityRightRef(el, 2)} className='quality-right quality-right-3 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
              <Image src='/quality_06.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
              <div>
                <h4>Awesome Aroma</h4>
                <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};
