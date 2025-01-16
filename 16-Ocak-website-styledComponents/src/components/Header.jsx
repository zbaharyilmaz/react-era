import React from 'react'
import DisplaySSS from './styles/DisplaySSS'
import ImageSSS, { LogoSSS } from './styles/ImageSSS'
import ButtonSSS, { ButtonD } from './styles/ButonSSS'

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LogoSSS src="./images/logo.png" alt="" />
        <div>
          <ButtonSSS>Take Courses</ButtonSSS>
          <ButtonSSS>Talk with Mentor</ButtonSSS>
        </div>
      </DisplaySSS>
      <div>
      <h1>The IT Career Starts Here</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi expedita eveniet. Qui consequatur sit amet ut quia repudiandae minus!</p>
      <ButtonSSS>Start Your New Career</ButtonSSS>
      <ButtonD>Details</ButtonD>
    </div>
    <ImageSSS src="./images/hero.jpg" alt="" />
    </div>
   
  )
}

export default Header