import PropTypes from 'prop-types'
import React from 'react'
import bookcover from '../images/bookCovers/1.jpg'
import SEO from '../components/SEO'

const Header = props => (
  
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <SEO title="Home"></SEO>
    <div className="logo">
      <span className="icon fa-wheelchair"></span>
    </div>
    <div className="content">
      <div className="inner">
        <img src={bookcover} alt="Mark V King's book cover" />
        <div className="description">
          <h1>It Only Takes One</h1>
          <p>
            How one skiing accident changed a 16 year old boy's life forever.
            However, through the ups and downs, this is not a tragedy, it's the
            story of one man's remarkable perseverance and will to lead a
            fulfilling life despite being given one hour to live. Thirty nine
            years later, Mark V. King is an advocate for people with
            disabilities and is one of the longest living ventilator dependent
            c1 quadriplegics in the United States. This is his story.
          </p>
          <a href="https://www.amazon.com/Snow-Skiis-Wheelchair-Quadriplegia-Failed/dp/1090608683">
            <button>BUY AT AMAZON</button>
          </a>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('aboutMe')
            }}
          >
            Who I Am
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('resources')
            }}
          >
            Resources
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
        <li>
        <button onClick={() => {
              props.onOpenArticle('blog')
            }}>Blog</button>
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
