import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 7rem);

  img {
    margin-left: 5rem;
    height: 200px;
    max-width: 100%;
  }  
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--gray-700);
  transform: skewY(-4deg);
  transform-origin: 0%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10%;
    transform: skewY(4deg);
  }
`

export const Info = styled.div`
  
  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: .5rem;

  a {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: var(--white);
    text-decoration: none;
    margin-bottom: 1rem;

    svg {
      margin-right: 1rem;
      fill: var(--yellow);
    }
  }
`
