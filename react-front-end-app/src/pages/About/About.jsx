import './About.css'
import SuggestionForm from '../../components/SuggestionForm/SuggestionForm'

function About() {
    return (
        <div className="about-page">

            <div className="about-card">

                <section className="about-section">
                    <h1 className="about-title">🎨What is Pixel Palette?</h1>
                    <p className="about-text">
                    Pixel Palette is a nostalgic digital drawing game 
                    thats easy enough for kids, but deep enough to make 
                    something you're actually proud of. Whether you're 
                    eight years old drawing cute aliens or an adult 
                    looking for a fun creative outlet, Pixel Palette 
                    is for you. No experience needed just start creating.
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="about-subtitle">🖌️How To Use It</h2>
                    <ol className="about-steps">
                        <li>🎨 Pick a color from the swatches in the toolbar</li>
                        <li>📏 Adjust your brush size with the slider</li>
                        <li>✏️ Draw freely on the canvas</li>
                        <li>💌 Switch to stamp mode to place carefully curated images</li>
                        <li>🗑️ Hit clear to refresh and start anew anytime</li>
                    </ol>
                </section>

                <section className="about-section">
                    <h2 className="about-subtitle">Pixel Palette in Action 📸</h2>
                    <div className="about-photos-grid">
                        <img
                        src="/images/mcpic.png"
                        alt="friend using Pixel Palette"
                        className="about-photo"
                        />
                        <img
                        src="/images/mandapic.png"
                        alt="frien using Pixel Palette"
                        className="about-photo"
                        />
                    </div>

                    <div className="about-photos-grid">
                        <img
                        src="/images/thetapic.png"
                        alt="friend using Pixel Palette"
                        className="about-photo"
                        />
                        <img
                        src="/images/brandopic.png"
                        alt="friend using Pixel Palette"
                        className="about-photo"
                        />
                    </div>
                </section>
                <section className="about-section">
                    <h2 className="about-subtitle">👋Meet the Creator</h2>
                    <p className="about-text">
                        Hey! I'm the developer behind Pixel Palette. I built this app because 
            I wanted to create something fun, simple, and a little nostalgic the 
            kind of drawing tool that may make you smile. Building it taught me a 
            ton about the Canvas API, a JavaScript API used to draw 2D graphics 
            dynamically right in the browser. It was honestly my favorite part of 
            the whole project and I can't wait to use it again in the future. 
                    </p>
                </section>

                <section className="about-section">
                <h2 className="about-subtitle">🛠️ Built With</h2>
                <ul className="about-list">
                    <li>⚛️React</li>
                    <li>🎨HTML Canvas API</li>
                    <li>🎨CSS</li>
                    <li>⚡Vite</li>
                </ul>
                </section>
                <section className="about-section">
                    <h2 className="about-subtitle">🚀 Whats Next?</h2>
                    <p className="about-text">
                         Pixel Palette is just getting started! Future features I'd love to add include 
            more stamps, a rotation and size changer for stamps, a full color wheel, 
            user accounts, picture save, saved favorite colors, and an undo feature.
                    </p>
                </section>

                <SuggestionForm />

            </div>
        </div>
    )

}

export default About