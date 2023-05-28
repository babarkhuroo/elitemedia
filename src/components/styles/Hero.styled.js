import styled from 'styled-components'

export const StyledHero = styled.section`
  padding: 2rem 4rem;
  display: grid;
  overflow: hidden;
  grid-template-columns: 52% 48%;

  .harsh-image {
    display: flex;
    align-items: end;
  }
  .harsh-image img {
    width: 100%;
  }
  .last-line {
    font-size: 1.9rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

    p.last-line {
      font-size: 16px;
      margin-top: 10px;
    }
  }
`

export const HeroArticle = styled.article`
  z-index: 1;
  max-width: 1040px;
  h2 {
    width: max-content;
    font-size: 65px;
    padding: 58px 0 26px;
  }
  p {
    font-size: 24px;
    max-width: 800px;
    padding-bottom: 24px;
    text-align: justify;
  }
  p span {
    font-weight: 600;
  }
  .underlined-text {
    /* text-decoration: underline; */
    font-weight: 600;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    h2 {
      font-size: 56px;
    }
    p {
      max-width: 670px;
      font-size: 20px;
    }
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    h2 {
      font-size: 28px;
      padding: 26px 0;
    }
    p {
      font-size: 16px;
    }
  }
`
