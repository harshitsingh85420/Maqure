import React from 'react';
import './CSS/main.css'

const Header2 = () => {
  return (
    <div class="header-main">

      <div class="container">

        <div class="header-logo">
          <h1 class="logo">MAQURE</h1>
          <ul class="desktop-menu-category-list">
<li class="menu-category">
  <a href="#" class="menu-title">Buyers</a>
</li>
<li class="menu-category">
  <a href="#" class="menu-title">Suppliers</a>

</li>
<li class="menu-category">
  <a href="#" class="menu-title">About Us</a>
</li>
</ul>
</div>

<div class="header-search-container">
<div class="header-wrapper">
    <div class="search_box">
        <div class="dropdown">
            <div class="default_option">All Categories</div>  
            <ul class="dropdown-list">
              <li class="dropdown-item">All</li>
              <li class="dropdown-item">Recent</li>
              <li class="dropdown-item">Popular</li>
           </ul>
        </div>
        <div class="search_field">
          <input type="text" class="input" placeholder="Search"/>
          <i class="fas fa-search"></i>
      </div>
    </div>
</div>
</div>

<div class="header-user-actions">
        <ul class="desktop-menu-category-list">
        <li class="menu-category">
            <a href="#" class="menu-title">Sell on Maqure</a>
          </li>

          <li class="menu-category">
            <a href="#" class="menu-title">Log In</a>

          </li>
          <li class="menu-category">
            <button class="menu-button">Free Sign Up</button>
            
          </li>
        </ul>
        </div>

      </div>

    </div>
    
  )
}

export default Header2