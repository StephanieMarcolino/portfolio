import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [showAlert, setShowAlert] = useState({ visible: false, variant: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.formName.value;
    const email = e.target.formEmail.value;
    const message = e.target.formMessage.value;

    if (!name || !email || !message) {
      setShowAlert({ visible: true, variant: "danger", message: "Por favor, preencha todos os campos!" });
    } else {
      setShowAlert({ visible: true, variant: "success", message: "Formulário enviado com sucesso!" });
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              RESUMO <span className="pink"> SOBRE </span> MIM
            </h1>
            <p className="home-about-body">
              Sou uma estudante de <b className="pink"> Ciência da Computação. </b>
              <br />
              <br />
              Meu campo de interesse são a construção de novas &nbsp;
              <i>
                <b className="pink">Tecnologias e Produtos Web </b> principalmente{" "}
                <b className="pink">Front-End.</b>
              </i>
              <br />
              <br />
              Tenho algum conhecimento em <b className="pink">Node.js</b> e
              <i>
                <b className="pink">
                  {" "}
                  Bibliotecas e Frameworks Modernos de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="pink"> React.js e Vue.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE EM</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/StephanieMarcolino"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/stephanie-marcolino-998550248"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/stephanie_pmarcolino/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTATE-ME</h1>
            <p>
              Sinta-se à vontade para <span className="pink">conectar-se </span>comigo
            </p>
            <p>
              Preencha o formulário abaixo.
            </p>
            {showAlert.visible && (
              <Alert variant={showAlert.variant} onClose={() => setShowAlert({ visible: false })} dismissible>
                {showAlert.message}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome"  />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail"  />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Digite sua mensagem" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
