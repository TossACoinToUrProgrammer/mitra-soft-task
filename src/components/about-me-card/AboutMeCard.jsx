import React from "react"
import { Link } from "react-router-dom"

import styles from "./styles.module.css"
import myPic from "../../assets/images/123.jpg"
import { ReactComponent as GhIcon } from "../../assets/icons/github.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg"
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg"
import { myGithub, myLinkedin, myEmail } from "../../constants"



const AboutMeCard = () => {
  return (
    <div
      className={`${styles.aboutMeCard} d-flex flex-column align-items-center shadow-lg`}
    >
      <div className={`${styles.picture} my-4`}>
        <img src={myPic} alt="" />
      </div>
      <span className="fw-bold lh-2 fs-5 text-center">
        Arlen <br /> Manasov
      </span>
      <hr className="bg-primary border-2 border-top border-primary w-25"></hr>
      <span className="text-uppercase fw-light">Frontend Developer</span>
      <div className="d-flex justify-content-center py-3 bg-light w-100 mt-3">
        <Link to={myGithub} target="blank" className="mx-3">
          <GhIcon />
        </Link>
        <Link to={myLinkedin} target="blank" className="mx-3">
          <LinkedinIcon />
        </Link>
        <Link to={`mailto:${myEmail}`} target="blank" className="mx-3">
          <MailIcon />
        </Link>
      </div>
    </div>
  )
}

export default AboutMeCard
