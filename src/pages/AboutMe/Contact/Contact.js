import React from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';
import './Contact.css';
import emailjs from "emailjs-com";







const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
  
     emailjs.sendForm('gmail', 'template_5w8y5ir', e.target, 'user_4HxcALaX05a5XrfPqgId7')   
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    
}

    return (
        <div id="contact">

        <h1 className="pt-3 text-center font-details-b pb-3" style={{color:"#59D6CD"}}>CONTACT ME</h1>
        <form onSubmit={sendEmail} className = " p-3 mx-auto contact-form">
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-primary" value="Send Message"></input>
                        </div>
                    </div>
                </form>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mdrakibhossainbd75@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="mdrakibhossainbd75@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/rakib-hossain-425725a1/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/mdrakibhossainbd/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://mdrakibhossainbd75.medium.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-info" title="Let's check some blogs!">
                    <i className="fab fa-medium"></i> Medium.com
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.facebook.com/rakib.hossain.739" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
        
      </div>
    );
};

export default Contact;