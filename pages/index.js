import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import styles from '../styles/index.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Edulogy</title>
        <meta name="description" content="Learn fast with Edulogy!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? (
          <main className={styles.halftone}>
            <Header />
            <Hero />
            {/* <Features /> */}
          </main>
        ) : (
          // pre-launch
          <main className={styles.halftone + " flex flex-col items-center justify-center min-h-screen p-8"}>
            <h1 className='text-4xl md:text-6xl font-semibold'>Learn 10X Better</h1>
            <p className='md:text-xl mt-4 text-gray-700 max-w-4xl text-center'><span className='text-gray-900'>Edulogy</span> helps you learn better whatever it is that you want to learn with it's amazing AI capabilties to summarize, elaborate and explain with examples.</p>

            <a href='https://discord.gg/6qK6jJ7Hn5' target="_blank" className='bg-gray-900 hover:bg-gray-700 transition-all duration-300 ease-in text-white mt-8 px-24 py-2 rounded-lg flex flex-row items-center justify-center' type="submit">
              <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>
              Join Discord!
            </a>
          </main>
      )}
      
    </>
  )
}
