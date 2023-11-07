import styled, { css } from "styled-components";
import MainTitle from "../Title";


// import MainTitle from "../Title";

export const Title = styled(MainTitle)`
  color: none;
  display: inline;
  ${({ $read }) => css`
      color: ${$read ? 'line-through' : 'none'};
  `}
`;

export const Container = styled.article`
  margin-bottom: 24px;

  ${({ $removed }) => css`
      opacity: ${$removed ? 0.5 : 1};
      color: ${$removed ? '#f00' : '#fff'} !important;
  `}
`;


export const Subtitulo = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7px;
`;

//Css-in-JS