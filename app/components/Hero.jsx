'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {

  useEffect(() => {
    gsap.utils.toArray('.hero_title').forEach((title, index) => {
      gsap.to(title, {
        opacity: 1,
        delay: .25,
        duration: 1.5,
        ease: 'power1.out',
      })
    })

    gsap.utils.toArray('.hero_text').forEach((text, index) => {
      gsap.to(text, {
        opacity: 1,
        delay: 1.25,
        duration: 1.5,
        ease: 'power1.out',
      })
    })

    gsap.to('.hero_image', {
      opacity: 1,
      scale: 1,
      delay: 2.5,
      duration: 2,
      ease: 'power1.out',
    })
  }, [])

  return (
    <section className='hero-cards h-[120vh]'>
    <div className='bg-[url("/hero_bg.jpg")] bg-cover h-[80vh]'>
      <div className='container mx-auto pt-40 pb-[40%] flex flex-col justify-center items-center gap-3 text-center md:pb-[30%]'>
        <h1 className='hero_title text-green-700 mt-[10%] opacity-0'>Organic</h1>

        <h1 className="hero_title opacity-0">Colombian Coffee</h1>

        <h4 className='hero_text text-white mt-5 md:w-[70%] opacity-0'>Experience the rich essence of Colombia with a coffee crafted to perfection.</h4>
        <h4 className='hero_text text-white md:w-[70%] opacity-0'>Smooth and bold, each sip delivers a unique blend of flavor and aroma that awakens your senses.</h4>
      </div>
    </div>
    <div className='relative h-[40vh] bg-green-800 bg-[url("/coffee_pattern.png")] bg-repeat bg-[length:400px_400px] z-20 shadow-2xl'>
      <div className='relative w-full h-0 pb-[30%]'>
        <Image src='/coffee-bean.png' alt='coffee_bean' width={2049} height={1531} className='hero_image absolute -top-1/2 lg:-top-1/3 left-1/2 transform -translate-x-1/2 w-[60%] md:w-[70%] lg:w-[700px] object-contain opacity-0 scale-0' />
      </div>
    </div>
  </section>
  );
};
