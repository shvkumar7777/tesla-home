import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

// this component is responsible to display header of the tesla website
const Header = () => {
    
    return (
    //   this is outer container to hold the different items in the header section
        <header className="header">
            {/* this will contain the logo inside the div*/}
          <div className="header__logo">
            <img src={TeslaLogo} alt="logo" />
        </div>
            {/* this dic containing the different items in the middle section */}
          <div className="header__items">
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model X</p>
              <p>Model Y</p>
              <p>Solar Roof</p>
              <p>Solar Panels</p>
            </div>
            {/* this deiv will contain the menu or item in the right side */}
          <div className="header__menu">
              <p>Shop</p>
              <p>Account</p>
              <p>Menu</p>
          </div>
      </header>
  )
}

export default Header