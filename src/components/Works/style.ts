import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--gray-400);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5rem 10%;
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: var(--gray-900);
    padding: 1rem 1.5rem;
    border: 1px solid var(--gray-900);
    border-radius: .4rem;
  }
`
