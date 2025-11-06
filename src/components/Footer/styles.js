import styled, { css } from "styled-components";
import Breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f6f6;
  padding: 2rem 0;

  @media ${Breakpoints.tablet} {
    padding: 1.5rem 0;
  }

  @media ${Breakpoints.mobileM} {
    padding: 1rem 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  @media ${Breakpoints.laptop} {
    padding: 1.5rem 1rem;
  }

  @media ${Breakpoints.tablet} {
    padding: 2rem 1rem;
  }

  @media ${Breakpoints.mobileM} {
    padding: 1.5rem 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  border-bottom: 0.063rem solid #000;
  margin: 1rem 0;
  gap: 2rem;
  flex-wrap: wrap;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      border: none;
      cursor: pointer;
      width: 100%;
      margin: 0 0 0.5rem 0;
      gap: 0.5rem;
    `}

  @media ${Breakpoints.tablet} {
    flex-direction: column;
    border-bottom: none;
    gap: 1.5rem;
    align-items: center;
  }

  @media ${Breakpoints.mobileM} {
    text-align: center;
    gap: 1rem;
  }
`;

export const Colmn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex: 1;
  gap: 0.5rem;

  @media ${Breakpoints.tablet} {
    width: 100%;
    align-items: center;
  }

  @media ${Breakpoints.mobileM} {
    text-align: center;
  }
`;

export const Menu = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  color: #000;
  margin: 0 0 1rem 0;

  @media ${Breakpoints.tablet} {
    font-size: 1.3rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1.1rem;
  }
`;

export const Paragrafo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.4rem;
  color: #000;
  margin: 0 0 0.5rem 0;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      font-size: 1.2rem;
    `}

  @media ${Breakpoints.tablet} {
    font-size: 1.1rem;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1rem;
  }
`;

export const Link = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
  line-height: 25px;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      width: 100%;
      gap: 0.5rem;
    `}

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  @media ${Breakpoints.tablet} {
    font-size: 1.1rem;
    justify-content: center;
  }

  @media ${Breakpoints.mobileM} {
    flex-direction: column;
    gap: 0.3rem;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 1.25rem;

  @media ${Breakpoints.tablet} {
    width: 1.1rem;
  }

  @media ${Breakpoints.mobileM} {
    width: 1rem;
  }
`;
