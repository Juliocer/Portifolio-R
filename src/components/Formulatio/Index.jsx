import React from 'react';
import { Input } from '../Input'
import { Button } from '../Button'

import { Wrapper, Container, Row, Colmn, Menu, Paragrafo } from './styles';

const Formulario = () => {
  return (
    <Wrapper>
      <Container>
        <Colmn variant="secundario">
          <Menu> CONTATE-ME </Menu>
          <Paragrafo>Preencha o formulário abaixo e responderei à sua consulta em breve. Obrigado.</Paragrafo>
        </Colmn>
        <form>
          <Row>
            <Colmn>
              <Paragrafo variant='secundario'>Primeiro nome*</Paragrafo>
              <Input placeholder="Primeiro nome" type="text" />
            </Colmn>
            <Colmn>
              <Paragrafo variant='secundario'>Sobrenome*</Paragrafo>
              <Input placeholder="Sobrenome" type="text" />
            </Colmn>
          </Row>
          <Paragrafo variant='secundario'>Email*</Paragrafo>
          <Input placeholder="Nome completo" type="text" />
          <Paragrafo variant='secundario'>Message*</Paragrafo>
          <Input placeholder="Nome completo" type="text" variant="secundario" />
          <Row variant="secundario"> <Button title='Enviar' variant='secundario' /> </Row>
        </form>
      </Container>
    </Wrapper>
  )
}


export { Formulario }
