import React from 'react';
import { Button, Card, CardDeck, Container} from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
      return (
            <div id="blogs">
                  <h1 className="pt-3 text-center font-details-b pb-3" style={{color:"#59D6CD"}}>BLOGS</h1>
          <Container>

                  <CardDeck className = "card-style">
                  
                        <Card className= "focus mt-2 mb-2 " style={{borderColor:"green"}}>
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*ypU_4erZ0E2b2PDQg9P4Zw.jpeg" />
                        <Card.Body>
                              <Card.Title>Importance Of Javascript</Card.Title>
                              <Card.Text>
                              Javascript has been the most used programming language for so many years now. I am learning Javascript, here I created a roughly described important...
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor:"black"}}>
                        <a href="https://mdrakibhossainbd75.medium.com/most-important-topics-of-es6-924f69db5dc7" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                      
                        <Card  className= "focus mt-2 mb-2" style={{borderColor:"green"}}>
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*lvDFebquohDMgpdonDgjNQ.png" />
                        <Card.Body>
                              <Card.Title>All About React </Card.Title>
                              <Card.Text>
                              React Router is the standard routing library for React.The react-router library is now split into three separate packages...
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor:"black"}}>
                        <a href="https://mdrakibhossainbd75.medium.com/basic-fundamental-of-react-js-f2e16b3a400b" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                        <Card  className= "focus mt-2 mb-2" style={{borderColor:"green"}}>
                        
                        <Card.Img variant="top" src="https://miro.medium.com/max/700/1*ypU_4erZ0E2b2PDQg9P4Zw.jpeg" />
                        <Card.Body>
                              <Card.Title>Basic Problems Javascript</Card.Title>
                              <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                              </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{backgroundColor:"black"}}>
                        <a href="https://mdrakibhossainbd75.medium.com/interesting-think-and-problems-of-java-script-9bbc80fbcf6b" target="_blank" rel="noopener noreferrer">
                        <Button className="card-button" variant="outline-info">
                          Read More
                        </Button>
                        </a>
                        </Card.Footer>
                        
                        </Card>
                  </CardDeck>

                  
          </Container>
      </div>
      );
};

export default Blogs;