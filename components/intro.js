import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className=" justify-center flex-col md:flex-row flex items-center mt-6 mb-6 md:mb-8">
      <h1 className="items-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 px-20">
        <img src="https://i.ibb.co/zsY8r3F/Screenshot-2023-03-13-135702.png" alt="Screenshot-2023-03-13-135702" border="0"/>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
       <img src="https://i.ibb.co/prR0BVR/Screenshot-2023-03-13-141822.png" alt="Screenshot-2023-03-13-141822" border="0"/>
      </h4>
    </section>
  )
}
