import { useState } from 'react';
import './LoginOverlay.css';

function LoginOverlay({ isOpen, onClose }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Submitted:', username, password, isRegistering ? 'register' : 'login');
    }

    return (
        <div className="overlay-backdrop">
            <div className="overlay-box">
                <button onClick={onClose}>X</button>
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