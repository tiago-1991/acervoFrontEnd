import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
class BarraNavegacao extends Component {
    render() {
        return (
            <header>
                 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#">SpringApp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/discos">Discos</Nav.Link>
                        </Nav>
                    </Navbar>
            </header>
        );  
    }
}

export default BarraNavegacao;