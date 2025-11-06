import styled, { css } from "styled-components";
import Breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  @media ${Breakpoints.desktop} {
    width: 90%;
  }

  @media ${Breakpoints.tablet} {
    width: 95%;
    padding: 2rem 0;
  }

  @media ${Breakpoints.mobileM} {
    width: 100%;
    padding: 1.5rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  padding: 0.5rem;

  @media ${Breakpoints.tablet} {
    flex-direction: column;
  }

  @media ${Breakpoints.mobileM} {
    padding: 0.25rem;
  }
`;

export const Colmn = styled.div`
  display: flex;
  flex-direction: column;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      padding-left: 0.5rem;
      flex: 1;
    `}

  @media ${Breakpoints.tablet} {
    align-items: center;
    text-align: center;
  }
`;

export const ContainerMenu = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media ${Breakpoints.tablet} {
    padding: 0 0 2rem 0;
    flex-direction: column;
    align-items: center;
  }

  @media ${Breakpoints.mobileM} {
    padding: 0 0 1.5rem 0;
  }
`;

export const Menu = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 3rem;
  color: #000;
  margin: 0 0 1rem 0;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      margin: 0 0;
      font-size: 1.5rem;
    `}

  @media ${Breakpoints.tablet} {
    font-size: 2rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1.8rem;
  }

  @media ${Breakpoints.mobileS} {
    font-size: 1.25rem;
  }
`;

export const Paragrafo = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  color: #000;
  margin: 0;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      margin: 1rem 0 1rem 0;
    `}

  @media ${Breakpoints.tablet} {
    font-size: 1.3rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1.1rem;
  }
`;

export const ContainerRepositorio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f8f6f6;
  padding: 0.5rem;
  gap: 1rem;

  @media ${Breakpoints.tablet} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Imagem = styled.img`
  width: 10rem;
  height: auto;
  background-color: #000;

  @media ${Breakpoints.tablet} {
    width: 8rem;
  }

  @media ${Breakpoints.mobileM} {
    width: 6rem;
  }
`;

export const Link = styled.a`
  width: 50%;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3rem;
  color: #000;
  text-decoration: none;
  text-align: center;
  border: 1px solid #000;
  padding: 0.2rem 1rem;
  border-radius: 0.3rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }

  @media ${Breakpoints.tablet} {
    width: 70%;
  }

  @media ${Breakpoints.mobileM} {
    width: 90%;
    font-size: 1.1rem;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const PageButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#323232" : "#000")};
  border: none;
  color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #565656;
    transform: scale(1.05);
  }

  @media ${Breakpoints.mobileM} {
    width: 40px;
    height: 40px;
  }
`;
