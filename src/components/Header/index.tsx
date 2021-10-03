import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi'

import { Container } from './style'

export const Header = () => {
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    setIsOpenMenu(false)
  }, [router.asPath])

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }

  const handleCloseMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <Container isOpenMenu={isOpenMenu}>
      <img src="/images/logo.svg" alt="Algumas formas geometricas" />
      <div>
        <button onClick={ handleOpenMenu }>
          <HiOutlineMenuAlt1 size={ 32 } color="#FFF"/>
        </button>
        <nav>
          <button onClick={ handleCloseMenu }>
            <HiOutlineX size={ 32 } color="#FFF"/>
          </button>
          <Link href="#aboutme">
            <a href="#aboutme">About Me</a>
          </Link>
          <Link href="#skills">
            <a href="#skills">Skills</a>
          </Link>
          <Link href="#works">
            <a href="#works">Works</a>
          </Link>
          <Link href="#contact">
            <a href="#contact">Contact Me</a>
          </Link>
        </nav>
      </div>
    </Container>
  )
}
