import Image from 'next/image'
import { RiFacebookFill, RiInstagramLine, RiMapPinFill, RiPhoneFill, RiTwitterXLine, RiYoutubeFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className='bg-[url("/footer_bg.jpg")] bg-cover'>
      <div className='mx-auto p-10 md:p-20 xl:p-28 flex flex-col gap-20 md:py-28 md:max-w-xl xl:flex-row xl:max-w-full xl:justify-center'>
        <div className='flex flex-col items-center gap-8 text-center lg:flex-1'>
          <Image className="w-24 md:w-28" src="/logo.png" alt="logo" width={205} height={205} />
          <p className='text-white opacity-50 lg:max-w-xs lg:text-start'>Experience the smooth and balanced taste of Organic Colombian Coffee, with a perfect blend of rich flavor and refined notes in every cup.</p>
          <ul className="nav__icons flex space-x-4">
            <li className="text-xl md:text-2xl">
              <a href="#" className='text-green-700 hover:text-white'>
                <RiTwitterXLine />
              </a>
            </li>
            <li className="text-xl md:text-2xl">
              <a href="#" className=' text-green-700 hover:text-white'>
                <RiFacebookFill />
              </a>
            </li>
            <li className="text-xl md:text-2xl">
              <a href="#" className='text-green-700 hover:text-white'>
                <RiInstagramLine />
              </a>
            </li>
            <li className="text-xl md:text-2xl">
              <a href="#" className='text-green-700 hover:text-white'>
                <RiYoutubeFill />
              </a>
            </li>
          </ul>
        </div>
        <div className='text-green-700 flex flex-col gap-8 lg:flex-1 lg:pl-[3%] xl:pl-[6%]'>
          <div className='text-2xl font-bold border-b-2 border-green-900 self-center lg:self-start'>
            Contact Info
          </div>
          <div className='flex text-start gap-3'>
            <div className='min-w-[24px]'>
              <RiMapPinFill className='text-2xl' />
            </div>
            <div>
              <p className='font-bold'>Our location</p>
              <p className='text-white'>Rio de Janeiro, RJ Brazil, 04103 Route</p>
            </div>
          </div>
          <div className='flex text-start gap-3'>
            <div className='min-w-[24px]'>
              <RiPhoneFill className='text-2xl' />
            </div>
            <div>
              <p className='font-bold'>Phones</p>
              <p className='text-white'>07472 849 396</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col text-green-700 gap-8 lg:flex-1 xl:hidden'>
          <div className='text-2xl font-bold border-b-2 border-green-900 self-center lg:self-start'>Subscribe</div>
          <div className='flex flex-col items-center md:flex-row text-start gap-3'>
            <input type="email" placeholder='email' className='p-4 outline-none' />
            <button type="submit" className='btn_primary inline-block border border-green-900 text-white bg-green-800 px-14 py-4 uppercase duration-300 md:-ml-6 lg:-ml-4'>
              <span className="relative z-10">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
      <div className='py-5 border-t border-white/30'>
        <p className='text-sm text-center text-white'><span className='text-green-700'>Copyright</span> &copy; 2024 Sergio Correia. <span className='text-green-700'>All rights reserved.</span></p>
      </div>
    </footer>
  );
};
