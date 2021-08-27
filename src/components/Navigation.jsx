import React, {Fragment} from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {withRouter} from 'react-router-dom';

const Navigation = () => {

    const showLinks = () => {
        return <Fragment>
            <Nav.Link href="/about" >
                <span>
                    About
                </span>
            </Nav.Link>
            <Nav.Link href="/education">
                <span>
                    Education
                </span>
            </Nav.Link>
            <Nav.Link href="/experience">
                <span>
                    Experience 
                </span>
            </Nav.Link>
            <Nav.Link href="/projects">
                <span>
                    Projects
                </span>
            </Nav.Link>
            <Nav.Link href="/recognition">
                <span>
                    Recognition
                </span>
            </Nav.Link>
        </Fragment>
    }

    return (
        <div className="navbar">
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand className="f3 fw7 ml4" href="/">
                    <span>
                        Akshay Sathiya
                    </span>
                </Navbar.Brand>
                <Nav className="ml-auto mr4">
                    {showLinks()}
                </Nav>
            </Navbar>
        </div>
    )
}

export default (withRouter(Navigation)); 