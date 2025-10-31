import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: #f8f6f6;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;
    padding: 8rem 0 5rem 0;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: space-between;
  width: 100%;

  ${({ variant }) =>
        variant === "secundario" &&
        css`
      align-items: flex-end;
      width: 100%;
    `}
`;


export const Colmn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;

  ${({ variant }) =>
        variant === "secundario" &&
        css`
      margin: 1rem 0 2rem 0;
      align-items: center;
    `}
`;

export const Menu = styled.h1`
    font-family: 'Open-Sans';
    font-size: 2rem;
    color: #000;
    margin: 0 0 2rem 0;
    
`

export const Paragrafo = styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    color: #000;
    margin: 0;

    ${({ variant }) => variant === "secundario" && css`
        margin: 0 0 .5rem 0;
    ` }
`