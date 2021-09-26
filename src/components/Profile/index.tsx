import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

import { Container, Content, Info, Links } from './style'

export const Profile = () => {
  return (
    <Container>
      <img src="/images/hero.png"/>
      <Content>
        <div>
          <Info>
            <h1>Olá, eu me chamo<br />Adriano Silva</h1>
            <p>
              Sou um desenvolvedor <strong>Fullstack</strong><br />
              <strong>NodeJS | ReactJS | React Native</strong>
            </p>
          </Info>

          <Links>
            <a href="https://github.com/Gui-dev" rel="noreferrer" target="_blank">
              <RiGithubLine size={ 32 } color="#FFF"/> Github
            </a>
            <a href="https://www.linkedin.com/in/adriano-silva-56641625/" rel="noreferrer" target="_blank">
              <RiLinkedinLine size={ 32 } color="#FFF"/> Linkedin
            </a>
            <a href="https://www.facebook.com/profile.php?id=100001273895067" rel="noreferrer" target="_blank">
              <RiFacebookLine size={ 32 } color="#FFF"/> Facebook
            </a>
          </Links>
        </div>
      </Content>
    </Container>
  )
}
