// import { Link } from "react-rounter-dom"

import { Footer } from "../../components/Footer"
import { Formulario } from "../../components/Formulatio"
import { Header } from "../../components/Header"
import { Nav } from "../../components/Nav"
import { Section } from "../../components/Section"

const Home = () => {
    return (<>
        <Nav />
        <Header />
        <Section title="Projetos" paragrafo="Projeto de Estudos" titleRepositorio="Projeto" paragrafoRepositorio="Descrição do projeto" linkRepositorio="Link do repositorio"/>
        <Formulario />
        <Footer />
    </>)
}

export {Home}