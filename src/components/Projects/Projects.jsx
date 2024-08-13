import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gePec from "../../Assets/Projects/gePecuariaPropriedades.jpg";
import uniMat from "../../Assets/Projects/universoDaMatInicial.jpg";
import xmen from "../../Assets/Projects/xmen.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xmen}
              isBlog={false}
              title="X-MEN"
              description="Meu primeiro sistema web, um sistema que mostra as imagens dos personagens e quando passa o mouse por cima mostra o nome e um resumo do personagem."
              ghLink="https://github.com/StephanieMarcolino/x-men-sdpc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gePec}
              isBlog={false}
              title="Gestão Pecuária"
              description="Em andamento. Website feito em Vue e Django para gestão de pecuária faz parte de um projeto de pesquisa do IFSC em que estou participando."
              ghLink="https://github.com/CopiniS/gerenciadorPecuaria"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uniMat}
              isBlog={false}
              title="Universo da Matemática"
              description="TCC em andamento. Sistema gamificado para o auxílio do ensino e aprendizagem de matemática."
              ghLink="https://github.com/StephanieMarcolino/universo-da-matematica"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
