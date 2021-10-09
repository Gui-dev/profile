import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--gray-100);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;

  > h1 {
    font-size: 3rem;
    font-weight: bold;
    color: var(--gray-900);
    padding: 1rem 1.5rem;
    border: 1px solid var(--gray-900);
    border-radius: .4rem;
  }
`

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const Skill = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  height: 30rem;
  width: 100%;
  background-color: var(--gray-700);

  > div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--gray-100);
      margin-top: 3rem;
    }
    
    svg {
      margin-top: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  p {   
    font-size: 1.4rem;
    line-height: 2.2rem;
    margin: 1.5rem 10%;
  }
`
