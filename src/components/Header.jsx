import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

const Header = () => {
    
  return (
      <div className="header">
          <div className="header__logo">
            <img src={TeslaLogo} alt="logo" />
          </div>
          <div className="header__items">
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model X</p>
              <p>Model Y</p>
              <p>Solar Roof</p>
              <p>Solar Panels</p>
          </div>
          <div className="header__menu">
              <p>Shop</p>
              <p>Account</p>
              <p>Menu</p>
          </div>
      </div>
  )
}

export default Header