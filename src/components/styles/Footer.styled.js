import styled from 'styled-components'

export const StyledFooter = styled.footer`
  max-width: 1080px;
  width: 85%;
  padding: 1rem;
  margin: 20px auto;
  & + .float-whatsapp {
    position: fixed;
    left: 30px;
    bottom: 30px;
  }
  & + .float-whatsapp a {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-color: #2ccd47;
    padding: 10px;
    border-radius: 50%;
  }
  & + .float-whatsapp svg {
    width: 3rem;
    height: 3rem;
  }
  section {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  h4 {
    padding-top: 40px;
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 600px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
  }
  h4 + a {
    font-size: 18px;
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.75);
    position: relative;
    left: 0px;
    transition: left 0.3s ease;
  }
  a:hover {
    left: 6px;
    color: #fff;
  }
  .btn-container {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 600;
    padding: 2rem 5rem;
    border: none;
    border-radius: 500px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.accent1};
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  button:hover {
    background-color: rgb(136, 14, 79);
  }
  ul {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
  .social-links a {
    padding: 8px;
    display: flex;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background2};
      transform: scale(1.2);
      border-radius: 50%;
    }
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    h4 + a {
      font-size: 16px;
    }
    .btn-container {
      flex-direction: column;
      gap: 3rem;
      margin-bottom: 0;
    }
    button {
      font-size: 20px;
      width: 100%;
      padding: 1rem 0;
    }
  }
`
