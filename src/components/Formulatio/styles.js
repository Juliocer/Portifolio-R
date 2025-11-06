import styled, { css } from "styled-components";
import Breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: #f8f6f6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  @media ${Breakpoints.desktop} {
    width: 90%;
  }

  @media ${Breakpoints.tablet} {
    padding: 4rem 0;
  }

  @media ${Breakpoints.mobileM} {
    padding: 3rem 0;
  }
`;

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

  /* 🔹 Responsividade */
  @media ${Breakpoints.tablet} {
    flex-direction: column;
    gap: 0;
    align-items: center;
  }

  @media ${Breakpoints.mobileM} {
    gap: 0;
  }
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

  @media ${Breakpoints.tablet} {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    margin-bottom: 1rem;
  }
`;

export const Menu = styled.h1`
  font-family: "Open-Sans";
  font-style: normal;
  font-size: 3rem;
  color: #000;
  margin: 0 0 1rem 0;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
    `}

  @media ${Breakpoints.tablet} {
    font-size: 2.4rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 2rem;
  }
`;

export const Paragrafo = styled.p`
  font-family: "Open-Sans";
  font-style: normal;
  font-size: 1.5rem;
  color: #000;
  margin: 0;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      margin: 0 0 0.5rem 0;
    `}

  @media ${Breakpoints.tablet} {
    font-size: 1.3rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1.1rem;
  }
`;
