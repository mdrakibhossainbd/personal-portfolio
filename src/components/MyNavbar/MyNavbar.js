import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './MyNavbar.css';

const MyNavbar = () => {
    return (
        <Navbar fixed = "top" collapseOnSelect expand="lg" className="animate-navbar nav-theme justify-content-between"
        variant="dark">
            <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#blogs">Blogs</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1VF4GcmpcTqQ6UXakt0WgbLibL3vuHE4C/view?usp=sharing" class="text-white"><button type="button" class="btn btn-outline-info">My Resume</button></a>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;