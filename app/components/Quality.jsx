import Image from 'next/image'

export default function Quality() {

  return (
    <section id='quality' className='lg:flex p-20 md:p-28 min-h-[100vh] bg-white pt-[200px] lg:pt-[300px]'>
      <div className='flex flex-col gap-12 lg:flex-row lg:gap-20 lg:items-center'>
        <div className='flex flex-col gap-12 flex-1'>
          <div className='flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
            <Image src='/quality_01.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
            <div>
              <h4>Pure Grades</h4>
              <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
            </div>
          </div>
          <div className='flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
            <Image src='/quality_02.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
            <div>
              <h4>Wide Assortment</h4>
              <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
            </div>
          </div>
          <div className='flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
            <Image src='/quality_03.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
            <div>
              <h4>Proper Roasting</h4>
              <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
            </div>
          </div>
        </div>
        <div className='flex-1 hidden lg:block'>
          <Image src='/cup.png' alt='quality' width={5000} height={5000} className='object-contain' />
        </div>
        <div className='flex flex-col gap-12 flex-1'>
          <div className='flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
            <Image src='/quality_04.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
            <div>
              <h4>High Quality</h4>
              <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
            </div>
          </div>
          <div className='flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
            <div className='w-20 lg:w-28'>
              <Image src='/quality_05.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
            </div>
            <div>
              <h4>Excelent Grinding</h4>
              <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
            </div>
          </div>
          <div className='flex items-start gap-5 lg:flex-col lg:items-center lg:text-center'>
            <Image src='/quality_06.png' alt='quality_image' width={263} height={225} className='max-w-[263px] w-20 lg:w-28' />
            <div>
              <h4>Awesome Aroma</h4>
              <p>Enjoy the rich, bold flavor of Organic Colombian Coffee, meticulously crafted for a smooth and satisfying experience.</p>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};
