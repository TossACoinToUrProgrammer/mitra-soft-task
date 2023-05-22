import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import styles from "./styles.module.css"
import AboutMeCard from "../../components/about-me-card/AboutMeCard"
import { myLocation, myPhoneNumber } from "../../constants"

const AboutMePage = () => {
  return (
    <Container fluid className={`${styles.aboutMePage} d-flex py-4 px-0 position-relative`}>
      <Col sm="5" className={`${styles.leftBg} position-absolute top-0 bottom-0`}></Col>
      <Container className="position-relative d-flex justify-content-center align-items-center pb-5">
        <div className="me-3">
          <AboutMeCard />
        </div>
        <Col sm="3">
          <h1>Hello!</h1>
          <p>
            I'm Frontend developer from Kyrgyzstan, ready for remote work.<br />
            Participated in 7 projects, playing Key developer role in 4 of 
            them.<br />
            Proficient in working with Agile methodologies SCRUM.<br />
            <br />
            My hobbies are playing table tennis, online chess and videogames :)
          </p>
        </Col>
      </Container>
        <div className={styles.footer}>
          <Container className="d-flex justify-content-end">
            <div className="text-center me-5">
              <b>Location</b> <br />
              <span>{myLocation}</span>
            </div>
            <div className="text-center">
              <b>Phone number</b> <br />
              <span>{myPhoneNumber}</span>
            </div>
        </Container>
        </div>
    </Container>
  )
}

export default AboutMePage
