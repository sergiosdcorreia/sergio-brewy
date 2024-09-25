import Image from 'next/image'

export default function Hero() {
  return (
    <section className='hero-cards h-[120vh]'>
    <div className='bg-[url("/hero_bg.jpg")] bg-cover h-[80vh]'>
      <div className='container mx-auto pt-40 pb-[40%] flex flex-col justify-center items-center gap-3 text-center md:pb-[30%]'>
        <h1 className='text-green-700 mt-[10%]'>Organic</h1>

        <h1>Colombian Coffee</h1>

        <h4 className='text-white mt-5 md:w-[70%]'>Experience the rich essence of Colombia with a coffee crafted to perfection.</h4>
        <h4 className='text-white md:w-[70%]'>Smooth and bold, each sip delivers a unique blend of flavor and aroma that awakens your senses.</h4>
      </div>
    </div>
    <div className='relative h-[40vh] bg-green-800 bg-[url("/coffee_pattern.png")] bg-repeat bg-[length:400px_400px] z-20 shadow-2xl'>
      <div className='relative w-full h-0 pb-[30%]'>
        <Image src='/coffee-bean.png' alt='coffee_bean' width={2049} height={1531} className='absolute -top-1/2 lg:-top-1/3 left-1/2 transform -translate-x-1/2 w-[60%] md:w-[70%] lg:w-[700px] object-contain' />
      </div>
    </div>
  </section>
  );
};
