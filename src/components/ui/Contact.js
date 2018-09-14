import React from 'react'
import '../../../stylesheets/Contact.scss'

const Contact = () => {
  return(
    <React.Fragment>
      <div className="contact-mail">
        <a href="mailto:sigus128@gmail.com">Mail</a>
      </div>
      <div className="contact-github">
        <a href="https://github.com/mobidiic">GitHub</a>
      </div>
      <div className="contact-portfolio">
        <a href="https://github.com/mobidiic">Portfolio</a>
      </div>
    </React.Fragment>
  )
}

export default Contact
