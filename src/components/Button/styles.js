import styled, { css } from "styled-components";

export const Button = styled.button`
    ${({ $theme }) => css`
      background: ${$theme === 'dark' ? '#000' : '#fff'};
      color: ${$theme === 'dark' ? '#fff' : '#000'}
  `}
`