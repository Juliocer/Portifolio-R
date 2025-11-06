import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '../Input';
import { Button } from '../Button';
import { Wrapper, Container, Row, Colmn, Menu, Paragrafo } from './styles';

const Formulario = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_k51x7lr', // substitua pelo seu ID
          'template_hvh9t34', // substitua pelo seu ID
          form.current,
          'unpnMW0_xFKtEXxh3' // sua Public Key
        )
        .then(() => {
          alert('Mensagem enviada com sucesso!');
          form.current.reset();
        })
        .catch((error) => {
          console.error('Erro ao enviar:', error);
        });
    }
  };
  
  return (
    <Wrapper>
      <Container>
        <Colmn variant="secundario">
          <Menu>CONTATE-ME</Menu>
          <Paragrafo>Preencha o formulário abaixo e responderei em breve.</Paragrafo>
        </Colmn>
        
        <form ref={form} onSubmit={sendEmail}>
          <Row>
            <Colmn>
              <Paragrafo variant="secundario">Nome completo</Paragrafo>
              <Input name="name" placeholder="Nome Completo" type="text" required />
            </Colmn>
            <Colmn>
              <Paragrafo variant="secundario">E-mail</Paragrafo>
              <Input name="email" placeholder="E-mail" type="email" required />
            </Colmn>
          </Row>
          
          <Paragrafo variant="secundario">Assunto</Paragrafo>
          <Input name="assunto" placeholder="Assunto" type="text" required />

          <Paragrafo variant="secundario">Mensagem</Paragrafo>
          <Input
            name="message"
            placeholder="Mensagem"
            isTextarea 
            type="text" 
            variant="secundario"
            required
          />
          <Row variant="secundario">
            <Button title="Enviar" variant="secundario" type="submit" />
          </Row>
        </form>
      </Container>
    </Wrapper>
  );
};

export { Formulario };

