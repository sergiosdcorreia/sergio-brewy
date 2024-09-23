'use client'

// import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './Card'

gsap.registerPlugin(ScrollTrigger)

export default function CardsSection() {
  return (
    <>
      <div className='container-cards'>
        <section className='hero-cards'>
          <h1>
            Keep scrolling to reveal the cards
          </h1>
        </section>
        <section className='cards'>
          {[...Array(4)].map((_, index) => {
            return (
              <Card
                key={index}
                id={`card-${index + 1}`}
                frontSrc='/card-front.png'
                frontAlt='Card Image'
                backText='Your card details appear here'
              />
            )
          })}
        </section>
        <section className='footer-cards'>
          <h1>Footer or Upcoming Section</h1>
        </section>
      </div>
    </>
  );
}
