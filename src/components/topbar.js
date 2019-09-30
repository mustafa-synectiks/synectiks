import React from "react"
import Social from "./social-icons"

const td = {
  textDecoration: "none",
}

const Topbar = () => {
  return (
    <div>
      <a href="/contactus/index.html" style={td}>
        Contact &nbsp; | &nbsp;{" "}
      </a>
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
