import { RiCodeLine, RiFacebookLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

import { Container, Content, Info, Links } from './style'

export const Profile = () => {
  return (
    <Container>
      <RiCodeLine size={100} color="#FFF"/>
      <Content>
        <div>
          <Info>
            <h1>Hello, me chamo<br /><strong>Adriano Silva</strong></h1>
            <p>
              Sou um desenvolvedor <strong>Fullstack</strong><br />
              <strong>NodeJS | ReactJS | React Native</strong>
            </p>
          </Info>

          <Links>
            <a href="https://github.com/Gui-dev" rel="noreferrer" target="_blank">
              <RiGithubLine size={ 32 } color="#FFF"/>
            </a>
            <a href="https://www.linkedin.com/in/adriano-silva-56641625/" rel="noreferrer" target="_blank">
              <RiLinkedinLine size={ 32 } color="#FFF"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100001273895067" rel="noreferrer" target="_blank">
              <RiFacebookLine size={ 32 } color="#FFF"/>
            </a>
          </Links>
        </div>
      </Content>
    </Container>
  )
}
