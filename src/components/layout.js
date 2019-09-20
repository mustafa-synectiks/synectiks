import React from "react"
import Header from "./Header"
// import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  )
}

export default Layout
//Add this in your component file
require("react-dom")
window.React2 = require("react")
console.log(window.React1 === window.React2)
