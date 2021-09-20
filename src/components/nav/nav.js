import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import {Nav, Navbar} from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="me-auto">
                <Nav.Link as={Link} className="nav-link" to="/">
                    В работе
                </Nav.Link>

                <Nav.Link as={Link} className="nav-link" to="/completed">
                    Завершены
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation