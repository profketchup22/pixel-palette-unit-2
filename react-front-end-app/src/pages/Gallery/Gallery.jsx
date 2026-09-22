import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

function Gallery({ currentUser, setEditingArtwork }) {
  // receives currentUser and setEditingArtwork as props from App.jsx
  const [artworks, setArtworks] = useState([]); // state to hold the user's artworks, starts as an empty list
  const [errorMessage, setErrorMessage] = useState(""); // shows a message if loading or deleting fails
  const navigate = useNavigate(); // hook to navigate to different routes from code

  useEffect(() => {
    if (!currentUser) return; // if no user is logged in, don't fetch artworks

    async function fetchArtworks() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/artworks/user/${currentUser.id}`,
        );

        if (!response.ok) { // the server had a problem
          setErrorMessage("Could not load your artwork. Please try again.");
          return;
        }

        const data = await response.json();
        setArtworks(Array.isArray(data) ? data : []); // only a real list can be mapped over
      } catch {
        setErrorMessage("Could not load your artwork. Please try again.");
      }
    }

    fetchArtworks();
  }, [currentUser]); // re-run the effect whenever currentUser changes

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this piece? This cannot be undone.",
    ); // asks before deleting
    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:8080/api/artworks/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setArtworks(artworks.filter((artwork) => artwork.id !== id)); // removes the deleted piece from the screen
      }
    } catch {
      setErrorMessage("Could not delete that piece. Please try again.");
    }
  }

  function handleEdit(artwork) {
    setEditingArtwork(artwork);
    navigate("/canvas"); // navigate to the canvas page for editing
  }

  return (
    <div className="gallery-page">
      <div className="gallery-card">
        <h1 className="gallery-title">My Gallery</h1>
        {errorMessage && (
          <p className="gallery-empty-message">{errorMessage}</p>
        )}
        {!currentUser ? (
          <p className="gallery-empty-message">Log in to see your saved art.</p>
        ) : artworks.length === 0 ? (
          <p className="gallery-empty-message">
            You haven't saved anything yet.
          </p>
        ) : (
          <div className="gallery-grid">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="gallery-item">
                <img src={artwork.imageData} alt={artwork.title} />
                <p>{artwork.title}</p>
                <div className="gallery-item-buttons">
                  <button
                    className="gallery-item-button"
                    onClick={() => handleEdit(artwork)}
                  >
                    Edit
                  </button>
                  <button
                    className="gallery-item-button"
                    onClick={() => handleDelete(artwork.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
