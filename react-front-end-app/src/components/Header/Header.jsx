// Header component displays logo and navigation links

import { Link } from 'react-router-dom'

import './Header.css'

// header with a className so css can target it
//  tells react where to go when clicked
function Header () {
    return (
        <header className="header">
        
        <Link to="/">
        <img
          src="/images/PPlogofront.png"
          alt="Pixel Palette logo"
          className="header-logo"
        />
        </Link>

        <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/canvas">Canvas</Link>
            <Link to="/about">About</Link>
        </nav>
        </header>
    )
}

export default Header