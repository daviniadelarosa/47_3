import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ChangePass() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleChange = async () => {
    try {
      const response = await fetch('http://localhost:5000/getTokenUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      });

      if (!response.ok) {
        throw new Error('User not found');
      }

      const data = await response.json();
      localStorage.token = data.token;
      navigate('/login');
    } catch (error) {
      console.error('Change Pass Failed', error);
    }
  };
    return (
        <div>
            <h2>Usuario para el cambio de contraseña</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <button onClick={handleChange}>Solicitar cambio de contraseña</button>
        </div>
    );
}