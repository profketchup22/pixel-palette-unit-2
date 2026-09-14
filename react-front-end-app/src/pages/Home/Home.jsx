
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home-card">
             <img
                src="/images/PPlogofront.png"
                alt="Pixel Palette logo"
                className="home-logo"
             />

                <p className="home-subtitle">
                    A simple, nostalgic drawing app inspired by the 90s. Pick up a brush, place some stamps, and start creating!
                </p>
                <Link to="/canvas">
                <Button label="Start Creating" type="button" />
                </Link>
            </div>
        </div>
    )
    
}

export default Home