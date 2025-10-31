import React from 'react'
import { useNavigate } from 'react-router-dom';

import Logo from "../../assets/Img-de-Julio.jpg";
import CertificadoReact from "../../assets/certificados.jpg/certificado-react.jpg";
import LogicaDeProgramacao from "../../assets/certificados.jpg/certificado-logicaDeProgramacao.jpg";
import HTML from "../../assets/certificados.jpg/certificado-HTML.jpg";
import CSS from "../../assets/certificados.jpg/certificado-CSS.jpg";

import { Wrapper, Container, Colmn, Img, H1, Paragrafo, Row, GaleriadoCertificado, Certificados, ContainerCertificado, ImgCentificado } from './styles';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

const Sobre = () => {

  const navigate = useNavigate();

  const handleClickSobre = () => {
    navigate('/contato')
  }

  const handleClickProjetos = () => {
    navigate('/projetos')
  }

  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Colmn>
            <Img src={Logo} alt='Foto de Júlio César' />
            <H1>Júlio César Santos Franco</H1>
            <Paragrafo>Saiba mais sobre o que eu faço e minha trajetória.</Paragrafo>
            <Paragrafo variant='pequenoParagrafo'>Meu nome é Júlio César, tenho 23 anos e sou natural de Salvador. Morar sozinho me ensinou muito sobre responsabilidade, organização e foco — valores que levo comigo em cada projeto de programação.<br /><br />

              Minha trajetória profissional começou aos 20 anos, na área de telemarketing, onde aprendi sobre comunicação, disciplina e trabalho em equipe. Essa experiência me ajudou a desenvolver habilidades interpessoais que hoje aplico no mundo da tecnologia.<br /><br />

              Enquanto trabalhava, iniciei o curso técnico de Desenvolvimento de Sistemas no Senai Dendezeiro, conciliando estudos e trabalho em uma rotina intensa. Durante esse período, me aprofundei em JavaScript, TypeScript, Node.js, React e bancos de dados, além de estudar temas como usabilidade e acessibilidade.<br /><br />

              Também venho me aprimorando constantemente por meio da plataforma DIO, participando de bootcamps e desafios práticos que fortalecem minhas habilidades e ampliam minha visão sobre o desenvolvimento web moderno.<br /><br />

              Atualmente, estou em busca da minha primeira oportunidade de trabalho na área de desenvolvimento, onde eu possa aplicar meus conhecimentos, continuar aprendendo e contribuir com projetos que impactem positivamente as pessoas.<br /><br />
              Hoje, sigo em constante evolução, sempre buscando aprender novas tecnologias, escrever códigos cada vez melhores e criar soluções digitais que realmente façam a diferença.
            </Paragrafo>
            <Row>
              <Button title="Contate-me" variant='#' onClick={handleClickSobre} />
              <Button title="Veja meu trabalho" variant='primary' onClick={handleClickProjetos}/>

            </Row>
          </Colmn>
          <ContainerCertificado>
            <H1 variant="certificado">Certificados</H1>
            <GaleriadoCertificado>
              <Certificados>
                <ImgCentificado src={CertificadoReact} alt='Certificado React' />
                <Paragrafo></Paragrafo>
                <Paragrafo variant='pequenoParagrafo'></Paragrafo>
              </Certificados>
              <Certificados>
                <ImgCentificado src={LogicaDeProgramacao} alt='Logica De Prógramação' />
                <Paragrafo></Paragrafo>
                <Paragrafo variant='pequenoParagrafo'></Paragrafo>
              </Certificados>
              <Certificados>
                <ImgCentificado src={HTML} alt='HTML' />
                <Paragrafo></Paragrafo>
                <Paragrafo variant='pequenoParagrafo'></Paragrafo>
              </Certificados>
              <Certificados>
                <ImgCentificado src={CSS} alt='CSS' />
                <Paragrafo></Paragrafo>
                <Paragrafo variant='pequenoParagrafo'></Paragrafo>
              </Certificados>
            </GaleriadoCertificado>
          </ContainerCertificado>
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}

export { Sobre }

