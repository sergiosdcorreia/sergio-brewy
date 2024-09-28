'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { RiCheckLine, RiStarFill } from 'react-icons/ri'

gsap.registerPlugin(ScrollTrigger)

export default function Products() {

  useEffect(() => {

    gsap.to('.product_subtitle', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 35%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      duration: .6,
      ease: 'power1.out',
    })

    gsap.to('.product_title', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 35%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: .2,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_intro_text', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 35%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: .3,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.product_image', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 1,
      delay: 1,
      duration: .8,
      ease: 'power1.out',
    })

    gsap.to('.stars', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 1,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.ethiopia-arabica', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 1.2,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.discover-the-origins', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 1.4,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.pure-grade', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 1.6,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.amazing-vanilla', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 1.8,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.strong-roasting', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 2,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.ultra-grinding', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 2.2,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.price', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 2.8,
      duration: .4,
      ease: 'power1.out',
    })

    gsap.to('.popular-buttons', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      delay: 3.2,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to('.product_image-1', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -20%',
        toggleActions: 'play reverse play reverse',
        markers: true,
      },
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to('.product_image-2', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -20%',
        toggleActions: 'play reverse play reverse',
        markers: true,
      },
      opacity: 1,
      delay: .6,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to('.product_image-3', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -20%',
        toggleActions: 'play reverse play reverse',
        markers: true,
      },
      opacity: 1,
      delay: 1.2,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to('.product_image-4', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -20%',
        toggleActions: 'play reverse play reverse',
        markers: true,
      },
      opacity: 1,
      delay: 1.8,
      duration: 1,
      ease: 'power1.out',
    })

  }, [])

  return (
    <section id='products' className='prod-container p-10 md:p-20 lg:p-28 min-h-[100vh] bg-white flex flex-col justify-center pt-[200px] lg:pt-[300px]'>
      <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
        <div className='product_animation-container'>
          <h4 className='product_subtitle text-green-700'>Online Store</h4>
        </div>
        <div className='product_animation-container'>
          <h2 className='product_title'>Popular Products</h2>
        </div>
        <div className='py-5'>
          <div className='product_animation-container'>
            <p className='product_intro_text product_text-animated'>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience. Aliquam eget sapien sed orci accumsan interdum at ac mi.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-start lg:items-start lg:gap-20 lg:mt-10'>
        <div className='product_image grid place-items-end lg:flex-1 opacity-0'>
          <Image src='/product_01.png' alt='products_image' width={973} height={985} className='max-w-[500px]' />
        </div>

        <div className='flex flex-col items-center justify-center gap-10 text-center lg:flex-1 lg:text-start lg:items-start'>
          <div className='space-y-3 lg:pt-10'>
            <div className='product_animation-container'>
              <div className='stars relative text-yellow-500 translate-y-[100%]'>
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
              </div>
            </div>

            <div className='product_animation-container'>
              <h3 className='ethiopia-arabica relative translate-y-[100%]'>Ethiopia Arabica</h3>
            </div>
            <div className='product_animation-container'>
              <p className='discover-the-origins relative translate-y-[100%]'>Discover the origins of our Organic Colombian Coffee, crafted with care and dedication to perfection. Each sip reveals the true essence of quality, bringing you an exceptional coffee experience.</p>
            </div>
          </div>

          <div className='product_animation-container pl-16'>
            <div className='product_animation-container'>
              <div className='pure-grade relative flex items-center gap-5 translate-y-[100%]'>
                <RiCheckLine className='text-green-700 font-bold text-xl' />
                <p>Pure Grade</p>
              </div>
            </div>
            <div className='product_animation-container'>
              <div className='amazing-vanilla relative flex items-center gap-5 translate-y-[100%]'>
                <RiCheckLine className='text-green-700 font-bold text-xl' />
                <p>Amazing Vanilla Aroma</p>
              </div>
            </div>
            <div className='product_animation-container'>
              <div className='strong-roasting relative flex items-center gap-5 translate-y-[100%]'>
                <RiCheckLine className='text-green-700 font-bold text-xl' />
                <p>Strong Roasting</p>
              </div>
            </div>
            <div className='product_animation-container'>
              <div className='ultra-grinding relative flex items-center gap-5 translate-y-[100%]'>
                <RiCheckLine className='text-green-700 font-bold text-xl' />
                <p>Ultra Grinding</p>
              </div>
            </div>
          </div>
          <div className='product_animation-container'>
            <div className='price relative flex items-center gap-5 translate-y-[100%]'>
              <p className='text-2xl line-through font-bold'>£19.99</p>
              <p className='text-2xl font-bold text-red-500'>£16.99</p>
            </div>
          </div>
          <div className='product_animation-container'>
            <div className='popular-buttons relative flex flex-col md:flex-row gap-5 translate-y-[100%]'>
              <button className='btn_primary'><span className='relative z-10'>Add to cart</span></button>
              <button className='btn_secondary'><span className='relative z-10'>More Info</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='md:py-28'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col items-center gap-3'>
            <div className='product_image-1 opacity-0'>
              <Image src='/product_02.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            </div>
            <div className='text-yellow-500'>
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
            </div>

            <div className='text-center'>
              <h4>Peru Whole Bean</h4>
              <h4 className='text-green-700'>£39.99</h4>
            </div>
            <button className='btn_primary'><span className='relative z-10'>Add to cart</span></button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <div className='product_image-2 opacity-0'>
              <Image src='/product_03.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            </div>
            <div className='text-yellow-500'>
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
            </div>

            <div className='text-center'>
              <h4>Ethiopia Whole Bean</h4>
              <h4 className='text-green-700'>£39.99</h4>
            </div>
            <button className='btn_primary'><span className='relative z-10'>Add to cart</span></button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <div className='product_image-3 opacity-0'>
              <Image src='/product_04.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            </div>
            <div className='text-yellow-500'>
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
            </div>

            <div className='text-center'>
              <h4>Columbia Whole Bean</h4>
              <h4 className='text-green-700'>£39.99</h4>
            </div>
            <button className='btn_primary'><span className='relative z-10'>Add to cart</span></button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <div className='product_image-4 opacity-0'>
              <Image src='/product_05.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            </div>
            <div className='text-yellow-500'>
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
            </div>

            <div className='text-center'>
              <h4>Nicaragua Whole Bean</h4>
              <h4 className='text-green-700'>£39.99</h4>
            </div>
            <button className='btn_primary'><span className='relative z-10'>Add to cart</span></button>
          </div>
        </div>
      </div>
  </section>
  );
};
