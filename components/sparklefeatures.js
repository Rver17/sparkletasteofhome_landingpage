import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function SparkleFeatures() {
  return (
    <div className="bg-[#0286ff]">
        <Container>
            <div className="py-28 flex flex-col lg:flex-row items-center text-2xl justify-center">
                <div>
                <section id="features" className="flex-col md:flex-row flex items-center md:justify-between">
                <img src="https://i.ibb.co/K2Wf5nj/sparkletext.png" width={250}/>
                  <h1 className="text-white font-bold">
                    advocates that best tasting foods are
                  </h1>
                </section>
                <h1 className="text-white font-bold text-center">
                found at home. New and exciting promos await millions of customers in this future super app.
                </h1>
                </div>
            </div>
        </Container>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 py-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.sparkle.sparkle&hl=en&gl=US&pli=1"
              className="mx-3 bg-[#0286ff] hover:bg-white hover:text-black border border-white font-bold py-4 px-20 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-amber-500 text-5xl"
            >
              FEATURE 1
            </a>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 py-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.sparkle.sparkle&hl=en&gl=US&pli=1"
              className="mx-3 bg-[#0286ff] hover:bg-white hover:text-black border border-white font-bold py-4 px-20 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-amber-500 text-5xl"
            >
              FEATURE 2
            </a>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 py-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.sparkle.sparkle&hl=en&gl=US&pli=1"
              className="mx-3 bg-[#0286ff] hover:bg-white hover:text-black border border-white font-bold py-4 px-20 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-amber-500 text-5xl flex"
            >
              FEATURE 3
            </a>
            
        </div>
    </div>
  )
}