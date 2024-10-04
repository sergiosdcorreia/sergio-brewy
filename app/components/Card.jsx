import { forwardRef } from 'react'
import Image from 'next/image'

const Card = forwardRef(({ id, frontSrc, frontAlt, frontText, backText }, ref ) => {
  return (
    <div className={`${id} card mx-auto mb-40 md:mx-0 md:mb-0`} id={id} ref={ref}>
      <div className='card-wrapper'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <Image
              priority
              src={frontSrc}
              width={500}
              height={500}
              alt={frontAlt}
            />
            <p className='card_title w-full font-bold text-white text-3xl'>{frontText}</p>
          </div>
          <div className='flip-card-back bg-[url("/bg_image.jpg")] bg-cover'>
            <p className='w-full px-4'>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card