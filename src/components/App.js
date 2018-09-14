import React, { Component } from 'react'
import Personal from './ui/Personal'
import Hi from './ui/Hi'
import Contact from './ui/Contact'
import profileExample from '../../imgs/profileExample.png'
import '../../stylesheets/App.scss'

class App extends Component {
  render(){
    return(
      <div className="profile-wrapper">
        <div className="upside">
          <div className="img-wrapper">
            <img src={profileExample} />
          </div>
          <div className="personal-wrapper">
            <Personal />
          </div>
        </div>
        <div className="hi-wrapper">
          <Hi />
        </div>
        <div className="contact-wrapper">
          <Contact />
        </div>
      </div>
    )
  }
}

export default App
