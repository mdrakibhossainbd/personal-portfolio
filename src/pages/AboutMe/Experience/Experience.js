import React from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import Tilt from "react-tilt";
import './Experience.css';


const Experience = () => {
    return (
        <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3" style={{color:"#59D6CD"}}>EXPERIENCE</h1>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  {/* <Card.Img variant="top" className="img-resize" src={} alt="Accenture logo" /> */}
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    {/* <Card.Title className="text-center">Associate Software Engineer</Card.Title> */}
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">Front End Web Developer (Certified)</strong>
                      <br/>
                  
                      <strong>Duration:</strong> Jun 2019 - November 2020
                      <br />
                      <strong className="body-title-style ">Word Press Designer (Certified)</strong>
                      <br/>
                      <strong>Duration:</strong> September 2018 - November 2020
                      <br/>
                      <strong className="body-title-style ">Graphics Designer (Certified)</strong>
                      <br/>
                      <strong>Duration:</strong> March 2020 - Jun 2020
                      {/* <strong>Itbzinc</strong> <br/> <small>N Miami Ave suite 230, Miami, FL 33127</small>
                      <br />
                      <strong>Duration:</strong> March 2019 - May 2020
                      <br/>
                      <strong>Job Type:</strong> Full-Time
                      <br/>
                      // <strong>Job Nature:</strong> Remote */}
                      
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
    );
};

export default Experience;