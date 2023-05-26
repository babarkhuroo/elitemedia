import styled from 'styled-components'

export const StyledProjects = styled.section`
  /* background-color: darkgrey; */
`

export const ProjectContainer = styled.section`
  padding: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    padding: 1rem 0;
  }
`

export const ProjectDiv = styled.div`
  width: 400px;
  background-color: #212121;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 13/9;
    object-fit: cover;
  }
  h3 {
    font-size: 3rem;
    padding: 0.5rem 0;
    text-align: center;
  }
  p {
    padding: 0 5rem;
    text-align: justify;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  .stack {
    width: max-content;
    margin: 20px auto;
    padding: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent1};
    text-align: center;
  }
  ul {
    font-size: 1.5rem;
    padding: 0 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  li {
    padding: 3px 7px;
    font-size: 12px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.background2};
  }
  .links {
    margin: 2.5rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
  a {
    background-color: ${({ theme }) => theme.colors.background1};
    font-size: 1.6rem;
    white-space: nowrap;
    padding: 0.5rem 1.5rem;
    border-radius: 500px;
    transition: background-color 0.3s ease;
  }
  a:hover {
    background-color: ${({ theme }) => theme.colors.accent1};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
    p {
      padding: 0 2rem;
    }
  }
`
