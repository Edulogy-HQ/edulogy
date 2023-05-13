import Image from 'next/image'
import study from '../public/study.svg'
import Spline from '@splinetool/react-spline';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Hero() {
  const { data: session } = useSession()

  return (
    <section className="text-gray-600 body-font px-10">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-gray-900">Learn 10x Better With Edulogy!</h1>
          <div className="sm:text-xl text-md mb-8 leading-relaxed">
            <p className='my-2'>Harness the power of AI to learn anything and everything faster and better!</p>
            <p className='my-2'>Just upload your notes to our server and ask our chatbot to summarise, simplify or explain the topic to you. Feel free to ask all your queries about the topic!</p>
          </div>
          <div className="flex justify-center">
            {session ? (
              <a href="/play" className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Dashboard</a>
            ) : (
              <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Sign Up</button>
            )}
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <Image className="object-cover object-center rounded" src={study} alt="Hero Image, credits to storyset.com" />
        </div>
      </div>
    </section>

  )
}