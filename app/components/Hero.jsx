'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {

  useEffect(() => {
    gsap.to('.hero_title', {
      y: 0,
      stagger: .5,
      duration: 1.2,
      ease: 'power1.out',
    })

    gsap.to('.hero_text', {
      y: 0,
      stagger: .5,
      delay: 1,
      duration: 1,
      ease: 'power1.out',
    })
  }, [])

  return (
    <section id='home' className='hero-cards min-h-[120vh]'>
      <div className='bg-[url("/hero_bg.jpg")] bg-cover min-h-[80vh]'>
        <div className='container relative top-64 mx-auto pb-[40%] flex flex-col justify-center items-center gap-3 text-center md:pb-[30%]'>
          <div className='product_animation-container'>
            <h1 className='hero_title text-green-700 relative translate-y-[-100%] will-change-transform leading-tight'>Organic</h1>
          </div>
          <div className='product_animation-container'>
            <h1 className="hero_title relative translate-y-[-100%] will-change-transform leading-tight">Colombian Coffee</h1>
          </div>

          <div className='product_animation-container w-full md:w-[70%] overflow-hidden px-5'>
            <h4 className='hero_text text-white pt-5 relative translate-y-[-100%] will-change-transform'>Experience the rich essence of Colombia with a coffee crafted to perfection.</h4>
          </div>
          <div className='product_animation-container max-w-full md:w-[70%] overflow-hidden px-5'>
            <h4 className='hero_text text-white relative translate-y-[-100%] will-change-transform'>Smooth and bold, each sip delivers a unique blend of flavor and aroma that awakens your senses.</h4>
          </div>
        </div>
      </div>
      <div className='relative min-h-[40vh] bg-green-800 bg-[url("/coffee_pattern.png")] bg-repeat bg-[length:400px_400px] z-20 shadow-2xl'>
        <div className='relative'>
          <Image src='/coffee-bean.png' alt='coffee_bean' width={2049} height={1531} className='hero_image relative mx-auto bottom-14 max-w-[20vh] md:max-w-[40vh] lg:max-w-[45vh] xl:max-w-[50vh] object-contain' />
        </div>
      </div>
    </section>
  );
};
