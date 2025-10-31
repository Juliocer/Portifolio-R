import React from 'react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import LogoReact from '../../assets/certificados.jpg/certificado-react.jpg'
import LogoHtml from '../../assets/certificados.jpg/certificado-HTML.jpg'

import { Wrapper, Container, Row, Menu, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo } from './styles'

const Projetos = () => {
  return (
    <>
      <Nav />
      <Wrapper variant="secundario" >
        <Container>
          <Menu> Projetos </Menu>
          <Container variant='secundario'>
            <Row variant='secundario'>
              <ImageBackground src={LogoReact} />
              <ImageBackground src={LogoReact} />
              <ImageBackground src={LogoReact} />
            </Row>
            <Content>
              <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                <div>
                  <h4>Júlio César</h4>
                  <p>Há 8 minutos</p>
                  <a>Link para o Git</a>
                </div>
              </UserInfo>
              <PostInfo>
                <h4>Projeto para curso de HTML E CSS</h4>
                <p>Projeto feito o curso de HTML e CSS no bootcamp dio Global avanade...<strong>Saiba Mais</strong></p>
              </PostInfo>
              <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                  16
                </p>
              </HasInfo>
            </Content>
          </Container>
          
        </Container>
      </Wrapper>

      <Footer />
    </>
  )
}

export { Projetos }
