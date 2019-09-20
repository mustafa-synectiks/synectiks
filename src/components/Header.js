import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import Social from "../components/social-icons"
import logo from "../img/logo.png"

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <div className="d-flex">
          <a href="/contactus">Contact | </a>
          <div>
            {Social.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
        <Navbar.Brand href="#home">
          <img src={logo} alt="synectiks" />
        </Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Transformation" id="basic-nav-dropdown">
              <NavDropdown.Item href="/devops">
                Devops Transformation
              </NavDropdown.Item>
              <NavDropdown.Item href="/foundation">Foundation</NavDropdown.Item>
              <NavDropdown.Item href="/operations">
                Migrations & Optimization
              </NavDropdown.Item>
              <NavDropdown.Item href="/microservices">
                Microservices Transformation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cloud" id="basic-nav-dropdown">
              <NavDropdown
                title="Cloud Hosted Services"
                id="basic-nav-dropdown"
                className="dropdown-submenu dropright"
              >
                <NavDropdown.Item href="/HostedInfrastructure">
                  Hosted Infrastructure
                </NavDropdown.Item>
                <NavDropdown.Item href="/CloudManagedBackup">
                  Cloud Managed Backup
                </NavDropdown.Item>
                <NavDropdown.Item href="/CloudDisasterRecovery">
                  Cloud Disaster Recovery
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="/privatecloud">
                Private Cloud
              </NavDropdown.Item>
              <NavDropdown.Item href="/hybridcloud">
                Hybrid Cloud
              </NavDropdown.Item>
              <NavDropdown.Item href="/publiccloud">
                Public Cloud
              </NavDropdown.Item>{" "}
              <NavDropdown.Item href="/colocation">Colocation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/applicationservices">
                Application Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/managedservices">
                Managed Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/networkservices">
                Network Services
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="/featured">Featured</NavDropdown.Item>
              <NavDropdown.Item href="/casestudy">
                Success Stories
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
