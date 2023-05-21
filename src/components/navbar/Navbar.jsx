import React, { useEffect } from "react"
import { Container, Navbar as NavbarBootstrap, Offcanvas, Nav} from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import avatarPng from "../../assets/images/user.png"

const Navbar = () => {
  const location = useLocation()

  useEffect(() => {
    // close menu on location change
    const button = document.querySelector(".offcanvas .btn-close")
    button.click()
  }, [location])

  return (
    <NavbarBootstrap bg="light" expand="true">
      <Container>
        <NavbarBootstrap.Toggle />
        <NavbarBootstrap.Brand>Mitra Soft Task</NavbarBootstrap.Brand>
        <NavbarBootstrap.Offcanvas placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/" className="nav-link">
                Post List
              </Link>
              <Link to="/about-me" className="nav-link">
                About Me
              </Link>
            </Nav>
          </Offcanvas.Body>
          <div className="d-flex p-4">
            <img src={avatarPng} alt="avatar placeholder" className="me-3 block w-25" />
            <div className="d-flex flex-column justify-content-center">
              <span>Arlen Manasov</span>
              <span>
                <Link to="mailto:arlen.manasov@icloud.com" className="text-decoration-none">
                  arlen.manasov@icloud.com
                </Link>
              </span>
            </div>
          </div>
        </NavbarBootstrap.Offcanvas>
      </Container>
    </NavbarBootstrap>
  )
}

export default Navbar
