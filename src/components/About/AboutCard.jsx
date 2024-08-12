import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos! Eu sou <span className="purple">Stephanie Pereira Marcolino</span>, 
            tenho 21 anos e sou estudante de Ciência da Computação. 
            <br />
            Tenho afinidade com a área de front-end, onde posso unir criatividade e tecnologia 
            para criar experiências envolventes. Tenho facilidade em aprender novas tecnologias 
            e me comprometo sempre com os projetos que assumo.
            <br />
            <br />
            Além de programar, algumas atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ler livros de romance
            </li>
            <li className="about-activity">
              <ImPointRight /> Fazer crochê
            </li>
            <li className="about-activity">
              <ImPointRight /> Cozinhar
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
