import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import Logo from "../../assets/Img-de-Julio.jpg";
import LogoS from "../../assets/Img-de-Julio-Cesar.jpg";

import {
    Container,
    Row,
    Colmn,
    Wrapper,
    H1,
    Paragrafo,
    Img,
} from "./styles";

const Header = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleClickSobre = () => navigate("/sobre");
    const handleClickProjetos = () => navigate("/projetos");

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Wrapper>
            <Container>
                <Colmn>
                    <H1>Olá, me chamo Júlio César.</H1>
                    <Paragrafo>
                        Desenvolvedor de software baseado no Brasil. Crio soluções funcionais
                        e modernas, unindo design, desempenho e usabilidade. Vamos transformar
                        suas ideias em realidade digital!
                    </Paragrafo>
                    <Row
                        style={{
                            gap: "1rem",
                            flexWrap: "wrap",
                            justifyContent: isMobile ? "center" : "flex-start",
                        }}
                    >
                        <Button title="Saiba mais" variant="secundario" onClick={handleClickSobre} />
                        <Button title="Veja meu trabalho" variant="primary" onClick={handleClickProjetos} />
                    </Row>
                </Colmn>

                <Row>
                    <Img
                        src={isMobile ? LogoS : Logo}
                        alt="Foto de Júlio César"
                    />
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
