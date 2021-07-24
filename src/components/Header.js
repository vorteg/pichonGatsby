import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      
         <img className="logo" src={logo} alt="" />   
           
    </div>
    <div className="content">
      <div className="inner">
        <h1>Pichones Corp</h1>
        <p>
          Software Specialists.{' '}
          <a href="#">Focus in</a>{' '}<br />
          developing your needs to  {' '}
          <a href="#">achieve your business</a> objectives.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
