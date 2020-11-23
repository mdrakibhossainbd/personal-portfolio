import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './AboutMe.css';
import resume from '../../assets/rakibResumeFinal.pdf';

const AboutMe = () => {
    return (
        <div id="about">
        <div className="about">  
          <h1 className="pt-3 text-center font-details pb-3" style={{color:"#59D6CD"}}>ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={3}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <a class="btn btn-danger btn-lg m-1" download="Resume of Md Rakib Hossain" href={resume} role="button" target="_blank">Download Resume</a>
                </Row>
              </Col>
              <Col xs={12} md={9}>
                <Row className="align-items-start p-2 my-details rounded">
                  <h4 className= "text-center">Hello! I am <strong style={{color:"red"}}>Md Rakib Hossain</strong></h4>
                  <br />A passionate programmer, born and brought up in Bangladesh. I am a Web Developer with React.js, Express.js, Node.js, and MongoDB as my tech stack.
                  <br />
                  <br />
                  I am Working with team, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                  <br />
                  I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                   
                    
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default AboutMe;