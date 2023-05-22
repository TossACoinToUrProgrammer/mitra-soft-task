import React from "react"
import { Container } from "react-bootstrap"

import styles from "./styles.module.css"
import { myLocation, myPhoneNumber } from "../../constants"

const AboutMeFooter = () => {
  return (
    <div className={styles.footer}>
      <Container className="d-flex justify-content-center justify-content-md-end">
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
  )
}

export default AboutMeFooter
