'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: '.main',
      start: 'top 25%',
      toggleActions: 'play reverse play reverse',
    }

    const leftXValues = [-800, -900, -400]
    const rightXValues = [800, 900, 400]
    const leftRotationValues = [-30, -20, -35]
    const rightRotationValues = [30, 20, 35]
    const yValues = [100, -150, -400]

    gsap.utils.toArray('.row').forEach((row, index) => {
      const cardLeft = row.querySelector('.card-left')
      const cardRight = row.querySelector('.card-right')
      
      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: '.main',
          start: 'top center',
          end: '150% bottom',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress
            cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationValues[index]}deg)`
            cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationValues[index]}deg)`
          }
        }
      })
    })
  }, [])

  const generateRows = () => {
    const rows = []
    for (let i = 1; i <=3; i++) {
      rows.push(
        <div className='row' key={i}>
          <div className='card card-left'>
            <img src={`/img-${2 * i - 1}.jpg`} alt='' />
          </div>
          <div className='card card-right'>
            <img src={`/img-${2 * i}.jpg`} alt='' />
          </div>
        </div>
      )
    }
    return rows
  }
  return (
    <>
    <ReactLenis root>
      <section className='hero'>
        <div className='logo'>
          <p>Image</p>
        </div>
      </section>
      <section className='main'>
        <div className='main-content'>
          <div className='logo'>
            <p>This is a logo!</p>
          </div>
          <div className='copy'>
            <div className='line'>
              <p>Let&apos;s build some projects together.</p>
            </div>
            <div className='line'>
              <p>For a better web.</p>
            </div>
            <div className='line'>
              <p>Get in touch!</p>
            </div>
          </div>
          <div className='btn'>
            <button>Hire me!</button>
          </div>
        </div>
        {generateRows()}
      </section>
      <section className='footer'>
        <p>Copyright 2024 - Sergio Correia</p>
      </section>
    </ReactLenis>
    </>
  );
}
