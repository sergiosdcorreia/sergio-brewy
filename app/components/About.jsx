'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from "next/image"
import { RiFileList2Fill, RiPhoneFill } from "react-icons/ri"

gsap.registerPlugin(ScrollTrigger)

export default function About() {

  useEffect(() => {
    gsap.to('.about_title-1', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.about_title-2', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      duration: .5,
      delay: .4,
      ease: 'power1.out',
    })

    gsap.to('.about_text', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      duration: .5,
      delay: .8,
      ease: 'power1.out',
    })

    gsap.to('.about_image', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 1,
      duration: 1.5,
      delay: .8,
      ease: 'power1.out',
    })

    gsap.to('.about_since', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      rotation: 360,
      scale: 1,
      duration: 1,
      delay: 1.2,
      ease: 'power1.out',
    })

    gsap.to('.about_download', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      duration: 1,
      delay: 1.2,
      ease: 'power1.out',
    })

    gsap.to('.about_phone', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      duration: 1,
      delay: 1.2,
      ease: 'power1.out',
    })

    gsap.to('.about_button-1', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 1,
      duration: .5,
      delay: 1.4,
      ease: 'power1.out',
    })

    gsap.to('.about_button-2', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 1,
      duration: .5,
      delay: 1.6,
      ease: 'power1.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id='about' className='about min-h-[100vh] bg-white bg-cover lg:flex'>
      <div className='flex flex-col justify-center h-100 p-10 lg:gap-20 xl:p-28 lg:w-1/2'>
        <div className='flex flex-col gap-2'>
          <div className='product_animation-container'>
            <h2 className='about_title-1 relative translate-y-[100%] py-3 text-green-700'>Caturra & Maragogipe</h2>
          </div>
          <div className='product_animation-container'>
            <h2 className='about_title-2 relative translate-y-[100%]'>Boutique Plantation Coffee</h2>
          </div>

          <div className='product_animation-container'>
            <p className='about_text relative translate-y-[100%] mt-5'>The smooth richness of Organic Colombian Coffee is perfectly balanced, offering a deep, bold flavor with a hint of sweetness. Enjoy the harmonious blend that awakens your senses with every sip.</p>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='product_animation-container'>
            <div className='about_download flex gap-5 items-center relative translate-y-[100%]'>
              <RiFileList2Fill className='text-2xl text-green-700' />
              <a className='font-bold text-green-700' href="#">Download price</a>
            </div>
          </div>
          <div className='product_animation-container'>
            <div className='about_phone flex gap-5 items-center relative translate-y-[100%]'>
              <RiPhoneFill className='text-2xl text-green-700' />
              <a className='font-bold text-green-700' href="#">07472 849 396</a>
            </div>
          </div>
        </div>
        <div className='flex gap-20'>
          <button className='about_button-1 btn_primary opacity-0'><span className='relative z-10'>Read More</span></button>
          <button className='about_button-2 btn_secondary opacity-0'><span className='relative z-10'>Read More</span></button>
        </div>
      </div>
      <div className='relative p-10 lg:gap-20 xl:p-28 lg:w-1/2'>
        <Image className='about_image opacity-0 object-contain' src='/about_image.png' alt="about_image" width={1000} height={866} />
        <div className='absolute about_since scale-0 top-[30%] left-[15%] lg:left-[10%] bg-white h-40 w-40 lg:h-44 lg:w-44 rounded-full grid place-content-center text-center border-2 border-green-900'>
          <div>
            <h3>since</h3>
            <h2 className='text-green-700'>1955</h2>
          </div>
        </div>
      </div>
    </section>
  )
}