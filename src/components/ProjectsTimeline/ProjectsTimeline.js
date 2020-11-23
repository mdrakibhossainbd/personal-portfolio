import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Image from "react-bootstrap/Image";
import { Accordion, Card } from 'react-bootstrap';
import './ProjectsTimeline.css';


//project 

import project1 from "../../assets/img/projects/1.PNG";
import project7 from "../../assets/img/projects/travelguru.PNG";
import project4 from "../../assets/img/projects/E-Commerce website.webp";
import project5 from "../../assets/img/projects/Reb Onion Restaurent app.webp";
import project6 from "../../assets/img/projects/powerx-1 - Copy.png";
import project9 from "../../assets/img/projects/calculator.PNG";
import project8 from "../../assets/img/projects/pinmatcher.PNG";
import project2 from "../../assets/img/projects/Doctors Portal.webp";
import project3 from "../../assets/img/projects/athena.png";
import project10 from "../../assets/img/projects/Volunteer Network.webp";


//skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";

import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";


const ProjectsTimeline = () => {
    return (
        <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3" style={{color:"#59D6CD"}}>PROJECTS</h1>
      <Timeline>
        <Events >
        {/* Project: 1*/}
        <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Creative Agency IT Solution"
            src={project1}
            alt="Creative Agency IT Solution"
            
          >
            <div className="d-flex justify-content-between flex-column mt-1" >
              <div >
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a full-stack MERN IT Solution web app where anyone can choose their desired service from the website.They can give their valuable feedback about the services.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Registered user can order desired services and can give their feedback</li>
                          <li>Responsive Design</li>
                          <li>Fully functional admin panel where admin can check order details</li>
                          <li>Admin controls order status and new service details</li>

                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
               
                <UrlButton
                  href="https://github.com/mdrakibhossainbd/assignment11-clint"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://agency-creative.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          {/* Project: 2  */}
          <ImageEvent
            date="20/09/2020"
            className="text-center"
            text="Doctors Portal"
            src={project2}
            alt="Doctors Portal"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A full-stack web app where patients can fix an appointment for dental checkup and they can check the available time schedule for desired doctors through the system.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Appointments tracking enabled</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Styled with React Bootstrap</li>
                          <li>Fully functional Administration panel</li>

                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/mdrakibhossainbd/doctors-portal-project"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://doctors-portal-e49b5.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          {/* Project: 3 */}

          <ImageEvent
            date="10/09/2020"
            className="text-center"
            text="Red Onion Restaurant App"
            src={project5}
            alt="Red Onion Restaurant App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A full-stack restaurant web app where anyone can order their favorite food from the menu and have options for breakfast, lunch, and dinner. Online paying system using their credit card and enjoy the most delicious food.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Authenticated users can order foods.</li>
                          <li>Stripe payment method is available for testing purposes only</li>

                          <li>Automated calculation and functionalities are added for the cart</li>


                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/mdrakibhossainbd/red-onion-project"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://red-onion-project-c2459.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

           {/* Project: 4 */}

          {/* <ImageEvent
            date="20/09/2020"
            className="text-center"
            text="Ema-John Website"
            src={project4}
            alt="Ema-John Website"
            
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A full-stack e-commerce web app where anyone can order their favorite product from the shop. They have options for lots of items. Pay online using their credit card and get the product.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>Registered user can choose products from numerous products collection</li>
                        <li>Single product display with full requirements</li>
                        <li>Dynamic shopping cart and checkout procedure</li>
                          <li>Online payment system</li>


                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent> */}

          {/* Project: projects 5 */}

          <ImageEvent
            date="05/09/2020"
            className="text-center"
            text="Travel Guru"
            src={project7}
            alt="Travel Guru"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Travel Guru is a travel app where anyone can choose their desired destination for their trip and also have booking system.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>Showing destination details for new user  </li>
                          <li>Available hotel booking for registered user</li>
                          <li>Authenticated users can choose a place</li>
                          <li>Google map integrated</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/mdrakibhossainbd/hotel-project "
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://frosty-aryabhata-3947f8.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: 6   Power X-Gym*/}

          <ImageEvent
            date="24/11/2020"
            className="text-center"
            text="Power X-Gym"
            src={project6}
            alt="Power X-Gym"
          >
             
             <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Full Stack single page website
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User Can see the offering courses</li>
                          <li>when user select the courses then it will add the price chart section</li>
                          <li>It has admin panel. user can select their required courses</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          
                           
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/mdrakibhossainbd/power-x-gym-project"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>

              <UrlButton
                  href="https://power-x-gym-project.web.app/
                  "
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          {/* Project: 7 Volunteer Network*/}

          <ImageEvent
            date="15/10/2020"
            className="text-center"
            text="Volunteer Network"
            src={project10}
            alt="Volunteer Network"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A full-stack web app where anyone can be a part of volunteer activities.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Registered user can choose volunteer activities</li>
                          <li>User can participate in multiple activities</li>
                          <li>Fully functional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/mdrakibhossainbd/volenteer-network-project
                  "
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              <UrlButton
                  href="https://volunteer-network-cb543.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>

                
              </div>
            </div>
          </ImageEvent>



           
            {/* Project: 8 Athena Power Project*/}

          <ImageEvent
            date="17/11/2020"
            className="text-center"
            text="Athena Power Project"
            src={project3}
            alt="Athena Power Project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A full-stack web app where anyone can be a part of Athena Agency .
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Visitor can see the offering course status</li>
                          <li>Visitor can select their course</li>
                          <li>Student can select their course and see the price list</li>
                          <li>In this website has contact list user can send text for farther information</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/mdrakibhossainbd/Athena-design-project
                  "
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              <UrlButton
                  href="https://athena-design-main.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>

                
              </div>
            </div>
          </ImageEvent>

          {/* Project: 9*/}

          <ImageEvent
            date="13/06/2020"
            className="text-center"
            text="Pin Matcher"
            src={project8}
            alt="Pin Matcher"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Pin Matcher 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Registered user can open the door lock</li>
                          <li>Full functional. user can set the password</li>
                          <li>When password match then door will be open</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                        
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              
                <UrlButton
                  href="https://github.com/mdrakibhossainbd/assignment-pin-matcher-master"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://mdrakibhossainbd.github.io/assignment-pin-matcher-master/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

           {/* Project: 10*/}

          <ImageEvent
            date="03/04/2020"
            className="text-center"
            text="Calcunlator"
            src={project9}
            alt="Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                      style={{backgroundColor:"rebeccapurple"}}
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Simple React Calculator
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can calculate math metical  value</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          
                        
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/mdrakibhossainbd/simple-calculator"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              
              <UrlButton
                  href="https://mdrakibhossainbd.github.io/simple-calculator/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>



        </Events>
      </Timeline>
    </div>
    );
};

export default ProjectsTimeline;