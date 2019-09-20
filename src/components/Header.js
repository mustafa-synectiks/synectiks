import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import logo from "../img/logo.png"

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Transformation" id="basic-nav-dropdown">
              <NavDropdown.Item href="/devops">Devops</NavDropdown.Item>
              <NavDropdown.Item href="/foundation">Foundation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cloud" id="basic-nav-dropdown">
              <NavDropdown
                title="Cloud Hosted Services"
                id="basic-nav-dropdown"
                className="dropdown-submenu dropright"
              >
                <NavDropdown.Item href="/devops">Nested</NavDropdown.Item>
                <NavDropdown.Item href="/devops">Nested</NavDropdown.Item>
                <NavDropdown.Item href="/devops">Nested</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="/devops">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>{" "}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/devops">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="/devops">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>{" "}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="/devops">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>{" "}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
