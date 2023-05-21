import React from "react"
import { Link } from "react-router-dom"

import styles from "./styles.module.css"
import myPic from "../../assets/images/123.jpg"
import { ReactComponent as GhIcon } from "../../assets/icons/github.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg"
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg"

const AboutMeCard = () => {
  return (
    <div
      className={`${styles.aboutMeCard} d-flex flex-column align-items-center shadow-lg`}
    >
      <img src={myPic} alt="" className={`${styles.picture} my-4`} />
      <span className="fw-bold lh-2 fs-5 text-center">
        Arlen <br /> Manasov
      </span>
      <hr class="bg-primary border-2 border-top border-primary w-25"></hr>
      <span className="text-uppercase fw-light">Frontend Developer</span>
      <div className="d-flex justify-content-center py-3 bg-light w-100 mt-3">
        <Link to="https://github.com/TossACoinToUrProgrammer" target="blank" className="mx-3">
          <GhIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/arlen-manasov/" target="blank" className="mx-3">
          <LinkedinIcon />
        </Link>
        <Link to="mailto:arlen.manasov@icloud.com" target="blank" className="mx-3">
          <MailIcon />
        </Link>
      </div>
    </div>
  )
}

export default AboutMeCard
