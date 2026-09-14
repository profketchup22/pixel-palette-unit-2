
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/Gallery/Gallery.css'

function Gallery({ currentUser, setEditingArtwork }) { // receives currentUser and setEditingArtwork as props from App.jsx
    const [artworks, setArtworks] = useState([]) // state to hold the user's artworks starts as an empty list
    const navigate = useNavigate() // hook to programmatically navigate to different routes

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

        function handleEdit(artwork) {
            setEditingArtwork(artwork)
            navigate('/canvas') // navigate to the canvas page for editing
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
                            <button onClick={() => handleEdit(artwork)}>Edit</button>
                            <button onClick={() => handleDelete(artwork.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Gallery