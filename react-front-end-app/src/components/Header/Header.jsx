// Header component displays logo and navigation links

import { Link } from 'react-router-dom'
import { useState } from 'react' 
import LoginOverlay from "../LoginOverlay/LoginOverlay"
import './Header.css'

// header with a className so css can target it
//  tells react where to go when clicked
function Header({ currentUser, setCurrentUser }) {
    const [showOverlay, setShowOverlay] = useState(false)
    function handleLogout() {
        setCurrentUser(null)
    }
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
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            {currentUser ? (
                <a onClick={handleLogout}>Log Out ({currentUser.username})</a>
            ) : (
                <a onClick={() => setShowOverlay(true)}>Log In</a>
            )}
        </nav>
            <LoginOverlay // ← NEW
            isOpen={showOverlay}
            onClose={() => setShowOverlay(false)}
            onLoginSuccess={setCurrentUser}
        />
        </header>
    )
}

export default Header