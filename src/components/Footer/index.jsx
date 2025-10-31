import React from 'react'

import { Wrapper, Container, Colmn, Row, Menu, Paragrafo, Link, Img } from './styles';
import Git from '../../assets/icone/github.png';
import Linkedin from '../../assets/icone/linkedin.png';
import Telefone from '../../assets/icone/telefonica.png';
import Email from '../../assets/icone/email.png';
import Endereco from '../../assets/icone/endereco.png';


const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Colmn>
            <Menu>Júlio César</Menu>
            <Link variant='secundario' href="https://github.com/Juliocer" target="_blank" rel="noopener noreferrer" alt='Icone do GitHub'>
              <Img src={Git} alt='Logo do Git' />
              <Paragrafo variant='secundario' >GitHub</Paragrafo>
            </Link>
            <Link variant='secundario' href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-santos-franco/" target="_blank" rel="noopener noreferrer" alt='Icone do Linkedin'>
              <Img src={Linkedin} alt='Logo do Linkedin' />
              <Paragrafo variant='secundario' >Linkedin</Paragrafo>
            </Link>
          </Colmn>
          <Colmn>
            <Row variant='secundario' >
              <Link href='' alt='Icone do GitHub'><Img src={Telefone} alt='Logo de um telefone' /></Link>
              <Paragrafo variant='secundario'>(71) 986277091</Paragrafo>
            </Row>
            <Row variant='secundario' >
              <Link href='' alt='Icone do GitHub'><Img src={Email} alt='Logo do Git' /></Link>
              <Paragrafo variant='secundario'>contatodejuliocesar@gmail.com</Paragrafo>
            </Row>
            <Row variant='secundario' >
              <Link href='' alt='Icone do GitHub'><Img src={Endereco} alt='Logo do Git' /></Link>
              <Paragrafo variant='secundario'>R. Luiz Régis Pacheco, 246 - Uruguai, Salvador - BA, 40451-360</Paragrafo>
            </Row>
          </Colmn>
        </Row>
        <Colmn>
          <Paragrafo variant='secundario'> © 2025 Júlio César — Todos os direitos reservados. </Paragrafo>
        </Colmn>
      </Container>
    </Wrapper>
  )
}

export { Footer }




