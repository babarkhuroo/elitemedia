import styled from 'styled-components'

export const BreakLine = styled.hr`
  margin: ${(props) => (props.margin ? '20px auto' : '0px')};
  width: ${(props) => (props.width ? '50px' : '64px')};
  height: ${(props) => (props.height ? '3px' : '6px')};
  border: none;
  border-radius: ${(props) => (props.border ? '0px' : '10px')};
  background-color: ${({ theme }) => theme.colors.accent1};
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`

export const Title = styled.h3`
  font-size: 65px;
  margin-bottom: 16px;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 56px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 28px;
  }
`
