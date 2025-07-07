import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import apartment from "../../Assets/Projects/apartment.png";
import earthstore from "../../Assets/Projects/earthstoree.png";
import igniteway from "../../Assets/Projects/igniteway.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={earthstore}
              isBlog={false}
              title="earthstore"
              description="e commerce for shoe and listing pricing its basically freelance project of our team."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://earthstoree.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igniteway}
              isBlog={false}
              title="igniteway"
              description="its my team project for our team for know ore about other tech stack : next js with typescript and tailwind css."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="igniteway.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Apartment web software"
              description="a web software for manage their apartment and building  tech stack : MERN stack "
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apartment}
              isBlog={false}
              title="job posting "
              description="a website exact same like linkedin tech stack NEXT JS , react js express , mongo db and node js"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Website"
              description="A E-commerce website for buy and sell tech stack MERN stack."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
