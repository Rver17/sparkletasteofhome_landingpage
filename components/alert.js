import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import jQuery from 'jquery'
import Animate from 'animate.css-react'
import 'animate.css/animate.css'

export default function Alert({ preview }) {
  return (
    <div>
      <Container>
        <div className="text-sm bg-[#0286ff]">
            <section className="flex-col md:flex-row flex items-center md:justify-between py-5">
            <a href="/" className="snap-proximity">
              <img src='https://www.sparkles.com.ph/static/sparkle_logo_white-1c6a7b75f399e53f0fb6f0f4217540ef.png' alt="Sparkle Logo" width={300} height={82}/>{' '}
            </a>
            <Animate animationEnter="slideInDown">
            <div className="items-right align-middle text-right lg:text-center py-1 font-bold text-white " >
              <h1 className="md:justify-between text-right flex justify-between align-middle text-2xl">
                <a href="#home" className=" text-right md:text-right text-2xl text mt-5 md:pl-8">
                  HOME{' '}
                </a>
                <a href="#features" className="text-right md:text-right text-2xl text mt-5 md:pl-8 scroll-link" >
                  FEATURES{' '}
                </a>
                <a href="#home" className="text-right md:text-right text-2xl mt-5 md:pl-8">
                  CONTACT{' '}
                </a>
                <a href="#about-us" className="text-right md:text-right text-2xl mt-5 md:pl-8">
                  ABOUT US{' '}
                </a>
              </h1>
              
            </div>
            </Animate>
            </section>
        </div>
        
      </Container>
    </div>
  )
}
