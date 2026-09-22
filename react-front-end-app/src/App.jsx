//brings the components into the app
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CanvasPage from "./pages/CanvasPage/CanvasPage";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [editingArtwork, setEditingArtwork] = useState(null);

  return (
    <div className="app">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <main className="main-component">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/canvas"
            element={
              <CanvasPage
                currentUser={currentUser}
                editingArtwork={editingArtwork}
                setEditingArtwork={setEditingArtwork}
              />
            }
          />{" "}
          {/* component will receive the currentUser as a prop */}
          <Route path="/about" element={<About />} />
          <Route
            path="/gallery"
            element={
              <Gallery
                currentUser={currentUser}
                setEditingArtwork={setEditingArtwork}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
