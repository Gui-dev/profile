import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  console.log(isDarkMode)

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>Gui Silva- Portfólio</title>
        <meta name="description" content="Desenvolvedor web Fullstack em Javascript(React, Node e React Native)" />
      </Head>

      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="flex justify-between mb-12 py-10">
            <strong className="text-xl font-burtons dark:text-teal-700">developedbyme</strong>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={handleDarkMode}
                />
              </li>
              <li>
                <a
                  className="text-white ml-8 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 border-none rounded-md"
                  href="#resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h1 className="font-medium text-5xl text-teal-600 py-2 md:text-6xl">Gui Silva</h1>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer Fullstack (React, Node and React Native)</h3>
            <p className="text-md text-gray-800 mx-auto py-5 leading-8 max-w-lg md:text-xl dark:text-gray-300">
              Developer provind services for programming and design content
              needs. Join me down below and let&apos;s get craking
            </p>
          </div>

          <div className="flex justify-center gap-16 text-5xl text-gray-600 py-3">
            <a
              href="https://github.com/Gui-dev"
              target="_blank"
              rel="noreferrer"
              title="Ir para o Github"
            >
              <AiFillGithub className="hover:text-gray-900 dark:hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/adriano-silva-56641625"
              target="_blank"
              rel="noreferrer"
              title="Ir para o Linkedin"
            >
              <AiFillLinkedin className="hover:text-cyan-800" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              title="Ir para o Instagram"
            >
              <AiFillInstagram className="hover:text-[#C13584]" />
            </a>
          </div>

          <div
            className="relative flex items-center justify-center h-80 w-80 mt-20 mx-auto
              bg-gradient-to-b from-teal-500 rounded-full overflow-hidden md:h-96 md:w-96"
          >
            <Image src="/devme.png" layout="fill" objectFit="cover" />
          </div>

        </section>

        <section>
          <div className="mt-8">
            <h1 className="text-3xl py-1 dark:text-white">Services I offer</h1>
            <p className="text-md text-gray-800 leading-8 py-2 dark:text-gray-300">
              Since the begenning of my journey as a developer,<br />
              I made these <span className="text-teal-500">projects</span> for
              <span className="text-teal-500"> study</span>
            </p>
            <p className="text-md text-gray-800 leading-8 py-2 dark:text-gray-300">
              I offer the following services, including
              <span className="text-teal-500"> programming</span> and
              <span className="text-teal-500"> design</span>
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center my-10 p-10 rounded-xl shadow-lg dark:bg-white">
              <Image src="/design.png" height={100} width={100} />
              <h2 className="font-semibold text-lg pt-8 pb-2">Beautiful Designs</h2>
              <p className="py-2">
                Creating elegant designs suited for your needs following core design theory
              </p>
              <h3 className="text-teal-600 py-4">Design tools I use</h3>
              <p className="text-gray-800 py-1">Krita</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Blender</p>
            </div>

            <div className="text-center my-10 p-10 rounded-xl shadow-lg dark:bg-white">
              <Image src="/code.png" height={100} width={100} />
              <h2 className="font-semibold text-lg pt-8 pb-2">Code</h2>
              <p className="py-2">
                Creating beautiful frontend websites with React,
                API&apos;s using Typescript on the backend,
                and mobile apps with React Native
              </p>
              <h3 className="text-teal-600 py-4">Programming Languages I Use</h3>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node</p>
              <p className="text-gray-800 py-1">React Native</p>
            </div>
          </div>
        </section>

        <section className="w-full" id="resume">
          <div>
            <h1 className="text-3xl py-1 dark:text-white">Portfolio</h1>
            <p className="text-md text-gray-800 leading-8 py-2 dark:text-gray-300">
              Since the begenning of my journey as a developer,<br />
              I made these <span className="text-teal-500">projects</span> for
              <span className="text-teal-500"> study</span>
            </p>
            <p className="text-md text-gray-800 leading-8 py-2 dark:text-gray-300">
              I offer the following services, including
              <span className="text-teal-500"> programming</span> and
              <span className="text-teal-500"> design</span>
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3">
              <Image
                src="/web7.png"
                height={660}
                width={1024}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex-1 basis-1/3">
              <Image
                src="/web8.png"
                height={660}
                width={1024}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex-1 basis-1/3">
              <Image
                src="/web9.png"
                height={660}
                width={1024}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex-1 basis-1/3">
              <Image
                src="/web10.png"
                height={660}
                width={1024}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
