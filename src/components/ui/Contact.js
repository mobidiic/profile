import React from 'react'
import '../../../stylesheets/Contact.scss'

const Contact = () => {
  return(
    <React.Fragment>
      <div className="contact-mail">
        <span className="dot">&#8226;</span><a href="mailto:sigus128@gmail.com">Mail</a>
      </div>
      <div className="contact-github">
        <span className="dot">&#8226;</span><a href="https://medium.com/@cean_park">Medium</a>
      </div>
      <div className="contact-portfolio">
        <span className="dot">&#8226;</span><a href="https://mobidiic.github.io/portfolio/">Portfolio</a>
      </div>
    </React.Fragment>
  )
}

export default Contact
