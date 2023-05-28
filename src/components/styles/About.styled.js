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

  div:nth-child(4) .light-box .p1,
  div:nth-child(4) .light-box .p2,
  div .light-box .p3 {
    display: none;
  }

  div:nth-child(4) .light-box .p3 {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    text-align: justify;
    padding: 0 10px;
  }

  h2,
  h4,
  h3 {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 3rem;
    font-weight: 100;
  }

  h3 {
    font-size: 3.5rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    padding: 1rem 0;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 28px;
  }
`

export const ProjectDiv = styled.div`
  width: 400px;
  min-height: 730px;
  background-color: #212121;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
  h3 {
    /* font-size: 3rem; */
    padding: 0.5rem 0;
    text-align: center;
  }
  p {
    padding: 0 4rem;
    /* text-align: justify; */
    font-style: italic;
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
    margin-bottom: 30px;
    text-align: center;
    /* display: flex; */
    /* justify-content: center; */
    /* flex-wrap: wrap; */
    /* gap: 10px; */
  }
  li {
    padding: 5px 10px;
    border-radius: 10px;
    /* background-color: ${({ theme }) => theme.colors.background2}; */
  }

  .light-box {
    background-color: #fff;
    color: #283593;
    padding: 20px;
    margin-top: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .light-box .p1 {
    text-align: center;
    font-weight: bold;
    font-style: unset;
    margin-bottom: 0;
  }
  .light-box .p2 {
    text-align: center;
    color: #283593;
    font-size: 5rem;
    font-weight: 700;
    font-style: unset;
  }
  .light-box .p2 span {
    font-size: 2rem;
  }
  .light-box div a {
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    width: max-content;
    margin: 0 auto;
    padding: 10px 25px;
    border-radius: 5px;
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
    .light-box .p2 {
      font-size: 36px;
    }
    .light-box div a {
      font-size: 22px;
    }
  }
`
