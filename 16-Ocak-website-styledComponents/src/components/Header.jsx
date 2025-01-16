import React from 'react'
import DisplaySSS from './styles/DisplaySSS'
import ImageSSS, { LogoSSS } from './styles/ImageSSS'
import ButtonSSS, { ButtonD } from './styles/ButonSSS'

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LogoSSS src="./images/logomeat.jpg" alt="" />
        <div>
          <ButtonSSS>Reserve a Table</ButtonSSS>
          <ButtonSSS>Order Now</ButtonSSS>
        </div>
      </DisplaySSS>
      <div>
      <h1>Discover Deals</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi expedita eveniet. Qui consequatur sit amet ut quia repudiandae minus!</p>
      <ButtonSSS>Today's Specials</ButtonSSS>
      <ButtonD>Contact Us</ButtonD>
    </div>
    <ImageSSS src="./images/hero.jpg" alt="" />
    </div>
   
  )
}

export default Header