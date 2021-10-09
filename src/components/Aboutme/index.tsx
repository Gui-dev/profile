import { Container, Content, Info } from './style'

export const Aboutme = () => {
  return (
    <Container>
      <Content id="aboutme">
        <h1>About me</h1>

        <Info>
          <img src="https://github.com/Gui-dev.png" alt="" />
          <p>
            Sou desenvolvedor Fullstack
            (<strong>NodeJS</strong> | <strong>ReactJS</strong> | <strong>ReactJS</strong>),
            desenvolvendo projetos desde 2019 tanto no frontend quanto no backend.
            Sempre atualizado com as tecnologias atuais do mercado, e sempre me aprimorando
            a cada dia os meus conhecimentos.
          </p>
        </Info>
      </Content>
    </Container>
  )
}
