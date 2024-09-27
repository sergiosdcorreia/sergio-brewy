import Image from "next/image"
import { RiFileList2Fill, RiPhoneFill } from "react-icons/ri"

export default function About() {
  return (
    <section id='about' className='min-h-[100vh] bg-white bg-cover lg:flex'>
      <div className='flex flex-col justify-center h-100 p-10 lg:gap-20 xl:p-28 lg:w-1/2'>
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
      <div className='relative p-10 lg:gap-20 xl:p-28 lg:w-1/2'>
        <Image className='object-contain' src='/about_image.png' alt="about_image" width={1000} height={866} />
        <div className='absolute top-[30%] left-[15%] lg:left-[10%] bg-white h-40 w-40 lg:h-44 lg:w-44 rounded-full grid place-content-center text-center border-2 border-green-900'>
          <div>
            <h3>since</h3>
            <h2 className='text-green-700'>1955</h2>
          </div>
        </div>
      </div>
    </section>
  )
}