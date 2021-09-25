import { Header } from 'components/Header'
import { Profile } from 'components/Profile'

import { Container } from './style'

export const HomeTemplate = () => {
  return (
    <Container>
      <Header />
      <Profile />
    </Container>
  )
}
