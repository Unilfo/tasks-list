import React from 'react'
import './style.scss'
import {Nav, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/tasks">
                        <Nav.Link>В работе</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/completed">
                        <Nav.Link>Завершены</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/new">
                        <Nav.Link>Новая</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation