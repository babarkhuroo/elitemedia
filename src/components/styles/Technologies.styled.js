import styled from 'styled-components'

export const StyledTechnologies = styled.section`
  h2 {
    font-size: 28px;
  }
  h2 span {
    font-size: 22px;
    background-color: #212121;
    padding: 0 5px;
    border-radius: 5px;
  }
  p {
    font-size: 24px;
    max-width: 70%;
    padding-bottom: 15px;
    font-style: italic;
    padding-left: 20px;
  }
  ul {
    // display: flex;
    font-size: 2rem;
    gap: 4rem;
    margin-bottom: 30px;
    padding-left: 40px;
  }
  li {
    // max-width: 320px;
    display: flex;
    flex-direction: column;
    list-style: disc;
  }
  span.bold {
    font-weight: bold;
  }
  div {
    max-width: 80%;
  }
  h4 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .skills {
    font-size: 18px;
    max-width: 100%;
    color: rgba(255, 255, 255, 0.75);
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    p {
      font-size: 20px;
      max-width: 90%;
    }
    li {
      // max-width: 40%;
    }
    h4 {
      font-size: 24px;
    }
    .skills {
      font-size: 16px;
    }
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    h2 {
      font-size: 20px;
    }
    h2 span {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      max-width: 100%;
    }
    ul {
      flex-direction: column;
      gap: 0;
      margin-bottom: 30px;
    }
    li {
      max-width: 100%;
      flex-direction: row;
      font-size: 16px;
    }
    div {
      margin-left: 1rem;
    }
    h4 {
      font-size: 20px;
    }
    .skills {
      font-size: 14px;
    }
  }
`
