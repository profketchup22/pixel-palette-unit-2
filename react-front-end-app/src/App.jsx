//brings the components into the app
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import CanvasPage from './pages/CanvasPage/CanvasPage'
import About from './pages/About/About'

function App() {
    return (
     <div className="app">
        <Header />
        <main className="main-component">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/canvas" element={<CanvasPage />} />
            <Route path="/about" element={<About />} />
        </Routes>
     </main>
     <Footer />
     </div>
    )
}

export default App