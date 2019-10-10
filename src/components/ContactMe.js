import React from "react"
const heightK = {
  height: "500px",
  width: "100%",
}
class ContactM extends React.Component {
  render() {
    return (
      <div style={heightK}>
        <iframe
          src="https://synectiks-website.s3.amazonaws.com/LatestKontact.html"
          width="100%"
          height="480px"
          frameBorder="0"
          scrolling="no"
          overflow="hidden"
        ></iframe>
      </div>
    )
  }
}

export default ContactM
