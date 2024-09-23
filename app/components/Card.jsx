import { forwardRef } from 'react'
import Image from 'next/image'

const Card = forwardRef(({ id, frontSrc, frontAlt, backText }, ref ) => {
  return (
    <div className='card' id={id} ref={ref}>
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
          </div>
          <div className='flip-card-back'>
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card