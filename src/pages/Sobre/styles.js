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
  padding: 8rem 0 2rem 0;

  @media ${Breakpoints.laptop} {
    width: 90%;
  }

  @media ${Breakpoints.tablet} {
    padding: 6rem 0 2rem 0;
  }

  @media ${Breakpoints.mobileM} {
    padding: 4rem 0 1rem 0;
  }
`;

export const Colmn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  @media ${Breakpoints.tablet} {
    gap: 1rem;
  }

  @media ${Breakpoints.mobileM} {
    gap: 0.8rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media ${Breakpoints.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const H1 = styled.h1`
  font-family: "Open-Sans";
  font-style: normal;
  font-size: 3rem;
  color: #000;
  margin: 0;

  ${({ variant }) =>
    variant === "certificado" &&
    css`
      text-align: center;
      font-size: 2.5rem;
      padding: 1rem 0;
    `}

  @media ${Breakpoints.tablet} {
    font-size: 2.2rem;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1.8rem;
  }
`;

export const Paragrafo = styled.p`
  font-family: "Open-Sans";
  font-style: normal;
  font-size: 1.5rem;
  color: #000;
  margin: 0;

  ${({ variant }) =>
    variant === "pequenoParagrafo" &&
    css`
      font-size: 1.3rem;
      text-align: center;
      white-space: pre-line;
      width: 90%;
      padding: 0 0 1rem 0;
    `}

  @media ${Breakpoints.tablet} {
    font-size: 1.3rem;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1.1rem;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 17rem;
  border-radius: 1rem;

  @media ${Breakpoints.tablet} {
    width: 14rem;
  }

  @media ${Breakpoints.mobileM} {
    width: 12rem;
  }
`;

export const ImgCentificado = styled.img`
  width: 17rem;
  border-radius: 0.8rem;

  @media ${Breakpoints.tablet} {
    width: 14rem;
  }

  @media ${Breakpoints.mobileM} {
    width: 12rem;
  }
`;

export const ContainerCertificado = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${Breakpoints.tablet} {
    padding: 3rem 0;
  }

  @media ${Breakpoints.mobileM} {
    padding: 2rem 0;
  }
`;

export const GaleriadoCertificado = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media ${Breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${Breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Breakpoints.mobileM} {
    grid-template-columns: 1fr;
  }
`;

export const Certificados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;
