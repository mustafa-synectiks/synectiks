import React from "react"
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

const tweet = {
  color: "#38A1F3",
  width: "1.2em",
  height: "1.5em",
}
const fb = {
  color: "#3B5998",
  width: "1.2em",
  height: "1.5em",
}
const lin = {
  color: "#0077B5",
  width: "1.2em",
  height: "1.5em",
}

export default [
  {
    icon: <FaFacebookSquare style={fb} />,
    url: "https://www.facebook.com/synectikscloud/",
  },
  {
    icon: <FaTwitterSquare style={tweet} />,
    url: "https://twitter.com/synectiks",
  },
  {
    icon: <FaLinkedin style={lin} />,
    url: "https://www.linkedin.com/company/synectiks/",
  },
]
