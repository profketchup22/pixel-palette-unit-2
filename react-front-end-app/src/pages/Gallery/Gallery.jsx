
import { useState, useEffect } from 'react'
import '../../pages/Gallery/Gallery.css'

function Gallery({ currentUser }) { //recieves currentUser as a prop from App.jsx
    const [artworks, setArtworks] = useState([]) // state to hold the user's artworks starts as an empty list

    useEffect(() => {
        if (!currentUser) return // if no user is logged in, don't fetch artworks

     async function fetchArtworks() {
            try {
                const response = await fetch(`http://localhost:8080/api/artworks/user/${currentUser.id}`)
                const data = await response.json()
                setArtworks(data)
            } catch (error) {
                console.error('Error fetching artworks:', error)
            }
     }

        fetchArtworks()
    }, [currentUser]) // re-run the effect whenever currentUser changes

        async function handleDelete(id) {
            try {
                const response = await fetch(`http://localhost:8080/api/artworks/${id}`, {
                    method: 'DELETE',
                })

                if (response.ok) {
                    setArtworks(artworks.filter((artwork) => artwork.id !== id)) // remove the deleted artwork from state
                }
            } catch (error) {
                console.error('Error fetching artworks:', error)
            }
        }
    return (
        <div className="gallery-page">
            <h1>My Gallery</h1>
            {!currentUser ? (
                <p>Log in to see your saved art.</p>
            ) : artworks.length === 0 ? (
                <p>You haven't saved anything yet.</p>
            ) : (
                <div className="gallery-grid">
                    {artworks.map((artwork) => (
                        <div key={artwork.id} className="gallery-item">
                            <img src={artwork.imageData} alt={artwork.title} />
                            <p>{artwork.title}</p>
                            <button onClick={() => handleDelete(artwork.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Gallery