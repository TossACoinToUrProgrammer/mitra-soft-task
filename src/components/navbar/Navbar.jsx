import React, { useEffect } from "react"
import { Container, Navbar as NavbarBootstrap, Offcanvas, Nav} from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

import styles from './styles.module.css'
import avatarPng from "../../assets/images/user.png"
import { myEmail } from "../../constants"

const Navbar = () => {
  const location = useLocation()

  useEffect(() => {
    // close menu on location change
    const button = document.querySelector(".offcanvas .btn-close")
    button.click()
  }, [location])

  return (
    <NavbarBootstrap className={styles.navbar} expand="true">
      <Container>
        <NavbarBootstrap.Toggle />
        <NavbarBootstrap.Brand className="text-white">Mitra Soft Task</NavbarBootstrap.Brand>
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
                <Link to={`mailto:${myEmail}`} className="text-decoration-none">
                  {myEmail}
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
