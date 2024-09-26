'use client'

import Image from 'next/image'
import gsap from 'gsap'
import { RiCheckLine, RiStarFill } from 'react-icons/ri';

export default function Products() {

  return (
    <section id='products' className='p-20 min-h-[100vh] bg-white flex flex-col justify-center pt-[200px] lg:pt-[300px]'>
      <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
        <h4 className='text-green-700'>Online Store</h4>
        <h2>Popular Products</h2>
        <p className='py-5'>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience. Aliquam eget sapien sed orci accumsan interdum at ac mi.</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-start lg:items-start lg:gap-20 lg:mt-10'>
        <div className='grid place-items-end lg:flex-1'>
          <Image src='/product_01.png' alt='products_image' width={973} height={985} className='max-w-[500px]' />
        </div>

        <div className='flex flex-col items-center justify-center gap-10 text-center lg:flex-1 lg:text-start lg:items-start'>
          <div className='space-y-3 lg:pt-10'>
            <div className='text-yellow-500'>
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
              <RiStarFill className='inline-block' />
            </div>

            <h3>Ethiopia Arabica</h3>

            <p>Discover the origins of our Organic Colombian Coffee, crafted with care and dedication to perfection. Each sip reveals the true essence of quality, bringing you an exceptional coffee experience.</p>
          </div>

          <div className='pl-16'>
            <div className='flex items-center gap-5'>
              <RiCheckLine className='text-green-700 font-bold text-xl' />
              <p>Pure Grade</p>
            </div>
            <div className='flex items-center gap-5'>
              <RiCheckLine className='text-green-700 font-bold text-xl' />
              <p>Amazing Vanilla Aroma</p>
            </div>
            <div className='flex items-center gap-5'>
              <RiCheckLine className='text-green-700 font-bold text-xl' />
              <p>Strong Roasting</p>
            </div>
            <div className='flex items-center gap-5'>
              <RiCheckLine className='text-green-700 font-bold text-xl' />
              <p>Ultra Grinding</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <p className='text-2xl line-through font-bold'>£19.99</p>
            <p className='text-2xl font-bold text-red-500'>£16.99</p>
          </div>
          <div className='flex flex-col md:flex-row gap-5'>
            <button className='btn_primary'><span className='relative z-10'>Add to cart</span></button>
            <button className='btn_secondary'><span className='relative z-10'>More Info</span></button>
          </div>
        </div>
      </div>
      <div className='p-20 md:py-28'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col items-center gap-3'>
            <Image src='/product_02.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
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
            <Image src='/product_03.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
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
            <Image src='/product_04.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
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
            <Image src='/product_05.png' alt='product_image' width={321} height={507} className='max-w-[321px] hover:scale-110 hover:-rotate-6 duration-300 cursor-pointer md:w-[80%]' />
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
