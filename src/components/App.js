import React, { Component } from 'react'
import Personal from './ui/Personal'
import Contact from './ui/Contact'
import profileCharacter from '../../imgs/myCharacter.png'
import '../../stylesheets/App.scss'

class App extends Component {

  componentDidMount(){
    // let hiMessage = document.getElementById('hiMessage')
    // let contact = document.getElementById('contact-wrapper')
    const handleFirstReveal = () => {
      let upside = document.getElementById('upside')
      let opacity = upside.style.opacity
      opacity = '0'
      let animate = setInterval(()=>{
          opacity = parseFloat(opacity) + 0.05 + ''
      }, 1000)
      if (parseFloat(opacity) >= 1){
        clearInterval(animate);
      }
    }
      handleFirstReveal()
  }

  render(){
    return(
      <div className="profile-wrapper">
          <div className="profile">
          <div id="upside">
            <div className="img-wrapper">
              <img src={profileCharacter} />
            </div>
            <div className="personal-wrapper">
              <Personal />
            </div>
          </div>
          <div id="hi-wrapper">
            <div id="hiMessage">
              I want to live the world <span>more easy</span>, and I believe that we can have <span>better experience</span> in our life through the web and the app.
            </div>
          </div>
          <div id="contact-wrapper">
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default App
