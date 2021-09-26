import { useState } from 'react'
import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi'

import { Container } from './style'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }

  const handleCloseMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <Container isOpenMenu={isOpenMenu}>
      <h1>Logo</h1>
      <div>
        <button onClick={ handleOpenMenu }>
          <HiOutlineMenuAlt1 size={ 32 } color="#FFF"/>
        </button>
        <nav>
          <button onClick={ handleCloseMenu }>
            <HiOutlineX size={ 32 } color="#FFF"/>
          </button>
          <a href="#aboutme" onClick={ handleCloseMenu }>About Me</a>
          <a href="#skills" onClick={ handleCloseMenu }>Skills</a>
          <a href="#works" onClick={ handleCloseMenu }>Works</a>
          <a href="#contact" onClick={ handleCloseMenu }>Contact Me</a>
        </nav>
      </div>
    </Container>
  )
}
