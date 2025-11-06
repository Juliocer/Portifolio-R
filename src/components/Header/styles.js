import styled from "styled-components";
import Breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: #f8f6f6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Tablet e abaixo */
  @media ${Breakpoints.tablet} {
    flex-direction: column-reverse;
    padding: 6rem 0 4rem 0;
    gap: 3rem;
  }

  /* Mobile médio e abaixo */
  @media ${Breakpoints.mobileM} {
    flex-direction: column-reverse;
    padding: 0 0 0 0;
    gap: 2rem;
  }
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 8rem 0 5rem 0;

  /* Laptop e abaixo */
  @media ${Breakpoints.laptop} {
    width: 90%;
  }

  /* Tablet e abaixo */
  @media ${Breakpoints.tablet} {
    flex-direction: column;
    width: 90%;
    padding: 6rem 0 4rem 0;
    gap: 3rem;
  }

  /* Mobile médio e abaixo */
  @media ${Breakpoints.mobileM} {
    flex-direction: column;
    width: 95%;
    padding: 3rem 0 3rem 0;
    gap: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* Tablet e abaixo → muda para coluna */
  @media ${Breakpoints.tablet} {
    flex-direction: column;
  }

  /* Mobile médio e abaixo */
  @media ${Breakpoints.mobileM} {
    flex-direction: column;
  }
`;

export const Colmn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media ${Breakpoints.tablet} {
    align-items: center;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    align-items: center;
    text-align: center;
  }
`;

export const H1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: #000;
  margin: 0;

  @media ${Breakpoints.laptop} {
    font-size: 2.6rem;
  }

  @media ${Breakpoints.tablet} {
    font-size: 2.3rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 2rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileS} {
    font-size: 1.8rem;
  }
`;

export const Paragrafo = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #000;
  margin: 0;
  width: 40rem;
  line-height: 1.5;

  @media ${Breakpoints.laptop} {
    width: 60%;
    font-size: 1.4rem;
  }

  @media ${Breakpoints.tablet} {
    width: 80%;
    font-size: 1.3rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    width: 90%;
    font-size: 1.1rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileS} {
    width: 95%;
    font-size: 1rem;
  }
`;

export const Img = styled.img`
  width: 17rem;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media ${Breakpoints.laptop} {
    width: 15rem;
  }

  @media ${Breakpoints.tablet} {
    width: 13rem;
  }

  @media ${Breakpoints.mobileM} {
    width: 11rem;
  }

  @media ${Breakpoints.mobileS} {
    width: 9rem;
  }
`;