import React from 'react'
import "./Header.scss"
import {RiShoppingCartLine} from "react-icons/ri"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <NavLink to="/" className='header-logo'>
            <img src="https://www.pngmart.com/files/22/Jordan-Logo-PNG-Image.png" width={50} />
        </NavLink>
        <nav className='nav'>
        <div>
          <NavLink to="products">
            Products
          </NavLink>
        </div>
        </nav>
        <div className='header-cart'>
            <RiShoppingCartLine />
            <span>1</span>
        </div>
    </header>
  )
}

export default Header