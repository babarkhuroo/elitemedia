import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 10% 40% 10% 15%;
  grid-column-gap: calc(15% / 3);
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background1};
  font-size: 2rem;
  padding: 2rem 2rem;
  position: sticky;
  top: 0;
  z-index: 2;

  .logo-container,
  .nav-links,
  .social-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .logo-container {
    justify-content: flex-start;
  }

  .logo {
    font-family: 'Pacifico';
    font-size: 2.1rem;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 50px;
  }

  .nav-links {
    gap: 1rem;
  }

  .social-links {
    grid-column: 4;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 10% 40% 10% 15%;
    grid-template-rows: 1fr 1fr;
    padding: 1rem 2rem 0;

    .nav-links {
      grid-area: 2/1/3/-1;
    }
    .social-links {
      grid-column: 3 / -1;
      justify-content: flex-end;
      gap: 2rem;
    }
  }
`

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`

export const Link = styled.a`
  padding: 8px;
  display: flex;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background2};
    transform: scale(1.2);
    border-radius: 50%;
  }
`
