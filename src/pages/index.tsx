import Head from 'next/head'
import { HomeTemplate } from 'templates/Home'

export default function Home () {
  return (
    <>
      <Head>
        <title>Adriano Silva | Desenvolvedor Fullstack</title>
      </Head>
      <HomeTemplate />
    </>
  )
}
