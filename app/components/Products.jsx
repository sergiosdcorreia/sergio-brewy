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
      },
      y: 0,
      duration: .6,
      ease: 'power1.out',
    })

    gsap.to('.product_title', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top 35%',
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
      },
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to('.product_image-2', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -20%',
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
      },
      opacity: 1,
      delay: 1.8,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to('.stars-1', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: .2,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_1-text', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: .4,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_1-price', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: .6,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_1-button', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      opacity: 1,
      delay: .8,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.stars-2', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 1,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_2-text', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 1.2,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_2-price', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 1.4,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_2-button', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      opacity: 1,
      delay: 1.6,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.stars-3', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 1.8,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_3-text', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 2,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_3-price', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 2.2,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_3-button', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      opacity: 1,
      delay: 2.4,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.stars-4', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 2.6,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_4-text', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 2.8,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_4-price', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      y: 0,
      delay: 3,
      duration: .5,
      ease: 'power1.out',
    })

    gsap.to('.product_4-button', {
      scrollTrigger: {
        trigger: '.prod-container',
        start: 'top -30%',
      },
      opacity: 1,
      delay: 3.2,
      duration: .5,
      ease: 'power1.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

  }, [])

  return (
    <section id='products' className='prod-container p-5 md:p-20 lg:p-28 min-h-[100vh] bg-white flex flex-col justify-center pt-32 md:pt-36 lg:pt-56'>
      <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
        <h2 className='sr-only'>Products</h2>
        <div className='product_animation-container'>
          <p className='product_subtitle relative text-base font-bold sm:text-lg translate-y-[100%] text-green-700'>Online Store</p>
        </div>
        <div className='product_animation-container'>
          <h3 className='product_title relative text-3xl font-bold md:text-5xl translate-y-[100%]'>Popular Products</h3>
        </div>
        <div className='product_animation-container'>
          <p className='py-5 product_intro_text relative translate-y-[100%]'>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience. Aliquam eget sapien sed orci accumsan interdum at ac mi.</p>
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
              <h4 className='ethiopia-arabica relative translate-y-[100%]'>Ethiopia Arabica</h4>
            </div>
            <div className='product_animation-container'>
              <p className='discover-the-origins relative translate-y-[100%] lg:max-w-96'>Discover the origins of our Organic Colombian Coffee, crafted with care and dedication to perfection. Each sip reveals the true essence of quality, bringing you an exceptional coffee experience.</p>
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
      <div className='py-20 md:py-28'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col items-center gap-3'>
            <Image src='/product_02.png' alt='product_image' width={321} height={507} className='product_image-1 opacity-0 max-w-[321px] p-5 md:p-0 hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            <div className='product_animation-container'>
              <div className='stars-1 text-yellow-500 relative translate-y-[100%]'>
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
              </div>
            </div>

            <div className='product_animation-container text-center'>
              <div className='product_1-text relative translate-y-[100%]'>
                <h4>Peru Whole Bean</h4>
              </div>
            </div>
            <div className='product_animation-container text-center'>
              <div className='product_1-price relative translate-y-[100%]'>
                <h4 className='text-green-700'>£39.99</h4>
              </div>
            </div>
            <button className='product_1-button opacity-0 btn_primary'><span className='relative z-10'>Add to cart</span></button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <Image src='/product_03.png' alt='product_image' width={321} height={507} className='product_image-2 opacity-0 max-w-[321px] p-5 md:p-0 hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            <div className='product_animation-container'>
              <div className='stars-2 text-yellow-500 relative translate-y-[100%]'>
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
              </div>
            </div>

            <div className='product_animation-container text-center'>
              <div className='product_2-text relative translate-y-[100%]'>
              <h4>Ethiopia Whole Bean</h4>
              </div>
            </div>
            <div className='product_animation-container text-center'>
              <div className='product_2-price relative translate-y-[100%]'>
                <h4 className='text-green-700'>£39.99</h4>
              </div>
            </div>
            <button className='btn_primary product_2-button opacity-0'><span className='relative z-10'>Add to cart</span></button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <Image src='/product_04.png' alt='product_image' width={321} height={507} className='product_image-3 opacity-0 max-w-[321px] p-5 md:p-0 hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            <div className='product_animation-container'>
              <div className='stars-3 text-yellow-500 relative translate-y-[100%]'>
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
              </div>
            </div>

            <div className='product_animation-container text-center'>
              <div className='product_3-text relative translate-y-[100%]'>
                <h4>Columbia Whole Bean</h4>
              </div>
            </div>
            <div className='product_animation-container text-center'>
              <div className='product_3-price relative translate-y-[100%]'>
                <h4 className='text-green-700'>£39.99</h4>
              </div>
            </div>
            <button className='btn_primary product_3-button opacity-0'><span className='relative z-10'>Add to cart</span></button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <Image src='/product_05.png' alt='product_image' width={321} height={507} className='product_image-4 opacity-0 max-w-[321px] p-5 md:p-0 hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
            <div className='product_animation-container'>
              <div className='stars-4 text-yellow-500 relative translate-y-[100%]'>
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
                <RiStarFill className='inline-block' />
              </div>
            </div>

            <div className='product_animation-container text-center'>
              <div className='product_4-text relative translate-y-[100%]'>
                <h4>Nicaragua Whole Bean</h4>
              </div>
            </div>
            <div className='product_animation-container text-center'>
              <div className='product_4-price relative translate-y-[100%]'>
                <h4 className='text-green-700'>£39.99</h4>
              </div>
            </div>
            <button className='btn_primary product_4-button opacity-0'><span className='relative z-10'>Add to cart</span></button>
          </div>
        </div>
      </div>
  </section>
  );
};
