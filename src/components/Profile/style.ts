import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 7rem);
  
  > svg {
    margin-top: 3rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  margin-top: -3rem;
  height: 100%;
  width: 100%;
  background-color: var(--gray-700);
  clip-path: polygon(0 23%, 100% 12%, 100% 100%, 0% 100%);
`

export const Info = styled.div`
  width: 100%;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 7rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 2rem;

  a {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: var(--white);
    text-decoration: none;
    margin-bottom: 1rem;

    svg {
      fill: var(--yellow);
      margin-left: 1rem;
 
      &:hover {
        fill: var(--white);
      }
    }
  }
`
