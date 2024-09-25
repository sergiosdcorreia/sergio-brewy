import Image from 'next/image'
import { RiFacebookFill, RiInstagramLine, RiMapPinFill, RiPhoneFill, RiTwitterXLine, RiYoutubeFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className='bg-[url("/footer_bg.jpg")] bg-cover'>
      <div className='container mx-auto py-20 px-20 flex flex-col gap-20 max-w-sm md:py-28 lg:flex-row lg:max-w-full lg:justify-center'>
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
            <RiMapPinFill className='text-2xl' />
            <div>
              <p className='font-bold'>Our location</p>
              <p className='text-white'>Rio de Janeiro, RJ Brazil, 04103 Route</p>
            </div>
          </div>
          <div className='flex text-start gap-3'>
            <RiPhoneFill className='text-2xl' />
            <div>
              <p className='font-bold'>Phones</p>
              <p className='text-white'>07472 849 396</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col text-green-700 gap-8 lg:flex-1'>
          <div className='text-2xl font-bold border-b-2 border-green-900 self-center lg:self-start'>Subscribe</div>
          <div className='flex text-start gap-3'>
            <input type="email" placeholder='email' className='p-5 rounded-l-full outline-none' />
            <button className='inline-block border border-green-900 text-white bg-green-800 px-14 py-4 rounded-full uppercase duration-300 -ml-14'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='py-5 border-t border-white/30'>
        <p className='text-sm text-center text-white'><span className='text-green-700'>Copyright</span> &copy; 2024 Sergio Correia. <span className='text-green-700'>All rights reserved.</span></p>
      </div>
    </footer>
  );
};
