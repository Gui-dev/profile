import { FaNodeJs, FaReact } from 'react-icons/fa'

import { Container, Content, SkillContainer, Skill } from './style'

export const Skills = () => {
  return (
    <Container>
      <Content>
        <h1 id="skills">Skills</h1>
        <SkillContainer>
          <Skill>
            <div>
              <FaNodeJs size={ 52 } color="green"/>
              <h1>NodeJS</h1>
            </div>
            <p>
            Tenho uma experiência avançada com o back-end como criação de ambiente de desenvolvimento,
            express, postgres, mongoDB typeorm, deploys, etc.
            </p>
          </Skill>

          <Skill>
            <div>
              <FaReact size={ 52 } color="#61DBFB"/>
              <h1>ReactJS | NextJS</h1>
            </div>
            <p>
              Minha maior experiência é com o desenvolvimento front-end,
              projetos responsivos, mobile first, SEO,
              deploy com CI/CD.
            </p>
          </Skill>

          <Skill>
            <div>
              <FaReact size={ 52 } color="#7fffd4"/>
              <h1>React Native</h1>
            </div>
            <p>
              Tenho uma experiência avançada  com o desenvolvimento mobile,
              criando apps tanto para Android quanto para IOS.
            </p>
          </Skill>
        </SkillContainer>
      </Content>
    </Container>
  )
}
