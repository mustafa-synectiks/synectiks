import React from "react"
import Social from "./social-icons"
import { FaEnvelope } from "react-icons/fa"

const Topbar = () => {
  return (
    <div>
      <a href="/contactus/index.html" className="topCont">
        CONTACT
      </a>
      <small className="text-white topFont py-2 px-4 mx-4 tbl tbr">
        <strong>QUESTIONS? 609 608 0429 X 102</strong>
      </small>
      <span className="tbr pr-4 py-2 mr-4">
        <FaEnvelope className="social mr-1" />
        <small className="text-white topFont">
          <strong>info@synectiks.com</strong>
        </small>
      </span>
      {Social.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Topbar
