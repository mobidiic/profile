import React, { Component } from 'react'
import Personal from './ui/Personal'
import Contact from './ui/Contact'
import profileExample from '../../imgs/profileExample.png'
import '../../stylesheets/App.scss'

class App extends Component {
  render(){
    return(
      <div className="profile-wrapper">
          <div className="profile">
          <div className="upside">
            <div className="img-wrapper">
              <img src={profileExample} />
            </div>
            <div className="personal-wrapper">
              <Personal />
            </div>
          </div>
          <div className="hi-wrapper">
            <div>
              I want to live the world more easy and funny way. and I believe that in the near future, we may live in very different ways, due to technology.
            </div>
          </div>
          <div className="contact-wrapper">
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default App
