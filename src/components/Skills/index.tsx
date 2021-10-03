import { FaNodeJs, FaReact } from 'react-icons/fa'

import { Container, Content, SkillContainer, Skill } from './style'

export const Skills = () => {
  return (
    <Container>
      <Content>
        <h1 id="skills">Skills</h1>
        <span>Using now</span>
        <SkillContainer>
          <Skill>
            <div>
              <FaNodeJs size={ 52 } color="green"/>
              <h1>NodeJS</h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
            </p>
          </Skill>

          <Skill>
            <div>
              <FaReact size={ 52 } color="#61DBFB"/>
              <h1>ReactJS</h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
            </p>
          </Skill>

          <Skill>
            <div>
              <FaReact size={ 52 } color="#7fffd4"/>
              <h1>React Native</h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At incidunt nam dignissimos explicabo illo quae vitae!
              Modi debitis consectetur velit sed totam enim corporis
              cupiditate ducimus aperiam illum. Doloremque, sit!
            </p>
          </Skill>
        </SkillContainer>
      </Content>
    </Container>
  )
}
