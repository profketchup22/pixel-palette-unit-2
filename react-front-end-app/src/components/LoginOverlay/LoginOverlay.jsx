
import './LoginOverlay.css';
import { useState } from 'react';

function LoginOverlay({ isOpen, onClose, onLoginSuccess }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) {
        return null;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');

        const endpoint = isRegistering
            ? 'http://localhost:8080/api/users/register'
            : 'http://localhost:8080/api/users/login';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

    const text = await response.text(); 
    const data = text ? JSON.parse(text) : null; 

            if (data === null) { 
            setError(isRegistering ? 'That username is already taken.' : 'Incorrect username or password.');
        } else {
        onLoginSuccess(data);
        onClose();
}
        } catch {
            setError('Could not connect to the server');
        }
    }

    return (
        <div className="overlay-backdrop">
            <div className="overlay-box">
                <button className="overlay-close" onClick={onClose}>x</button>
                <h2>{isRegistering ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="overlay-error">{error}</p>}
                    <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
                </form>
                <p onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
                </p>
            </div>
        </div>
    );
}

export default LoginOverlay;