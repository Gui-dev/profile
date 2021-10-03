import styled from 'styled-components'

type ContainerProps = {
  isOpenMenu: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  margin: 1rem 10%;

  img {
    height: 10rem;
    width: 10rem;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ isOpenMenu }) => isOpenMenu ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, .92);
    z-index: 2;

    a {
      display: block;
      font-size: 1.8rem;
      color: var(--white);
      text-decoration: none;
      margin-bottom: 3rem;

      &:hover {
        color: var(--yellow);
        transform: scaleX(1.1);
      }
    }

    button {
      position: absolute;
      top: 5rem;
      right: 3rem;
    }
  }
`
