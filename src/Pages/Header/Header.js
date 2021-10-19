import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://health-center.vamtam.com/wp-content/uploads/2014/03/logo_footer.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-light" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-light" to="/doctors">All-Doctors</Nav.Link>
                        <Nav.Link as={Link} className="text-light" to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} className="text-light" to="/contact">Contact Us</Nav.Link>
                        <Navbar.Text>
                            <a href="#login" className="text-danger">{user.displayName}</a>
                        </Navbar.Text>
                        {
                            user.email ?
                                <button className="btn btn-danger ms-3" onClick={logOut}>Log out</button> :
                                <Nav.Link as={Link} className="text-light" to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;