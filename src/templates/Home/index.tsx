import { Header } from 'components/Header'
import { Profile } from 'components/Profile'
import { Aboutme } from 'components/Aboutme'
import { Skills } from 'components/Skills'
import { Works } from 'components/Works'
import { Contact } from 'components/Contact'

import { Container } from './style'

export const HomeTemplate = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <Aboutme />
      <Skills />
      <Works />
      <Contact />
    </Container>
  )
}
