import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Download the app
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://play.google.com/store/apps/details?id=com.sparkle.sparkle&hl=en&gl=US&pli=1"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Available on App Store and Google Play soon!
            </a>
          </div>
        </div>
        <div className="justify-center items-center align-bottom tracking-tighter leading-tight text-center lg:text-center py-1">
            <a
              className="mx-3 font-bold "
            >
              Copyright @ 2020 by Sparkle. All rights reserved.
            </a>
        </div>
      </Container>
    </footer>
  )
}