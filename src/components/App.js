import React, { Component } from 'react'
import Personal from './ui/Personal'
import Contact from './ui/Contact'
import profileCharacter from '../assets/imgs/cean_profile.png'
import '../../stylesheets/App.scss'

class App extends Component {

  componentDidMount(){

    let secondAnimationLoaded = false

    const handleFirstReveal = () => {
      let upside = document.getElementById('upside')
      upside.style.opacity = '0'
      let animateFirst = setInterval(()=>{
          upside.style.opacity = parseFloat(upside.style.opacity) + 0.05+''
          if (parseFloat(upside.style.opacity) >= 1){
            clearInterval(animateFirst)
          }
      }, 80)
    }

    const handleTypingMessage = () => {
      let message = 'I want to live the world easier, and believe that we can have better experience in our life through our product.'
      let i = 0
      let speed = 500
      let writer = () => {
      if ( i < message.length ){
        document.getElementById('hiMessage').innerHTML += message.charAt(i)
        i++
        setTimeout(writer, 30)
      }else{
        secondAnimationLoaded = true
      }
      }
      return writer
    }

    const handleLastReveal = () => {
      let contact = document.getElementById('contact-wrapper')
      contact.style.opacity = '0'
      let animateSecond = setInterval(()=>{
        contact.style.opacity = parseFloat(contact.style.opacity)+ 0.05 + ''
        if( parseFloat(contact.style.opacity)>= 1 ){
          clearInterval(animateSecond)
        }
      }, 50)
    }

    const handleLastRevealTwo = () =>{
      if (secondAnimationLoaded){
        handleLastReveal()
      }
    }

    window.onload = () => {
      handleFirstReveal()
      setTimeout(handleTypingMessage(), 2000)
      setTimeout(()=>handleLastReveal(), 5500)
  }
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
            <div id="hiMessage"></div>
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
