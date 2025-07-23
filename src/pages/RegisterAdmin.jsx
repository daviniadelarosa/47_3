import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/registerAdmin', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, token: localStorage.token })
      });

      if (!response.ok) {
        throw new Error('Register failed');
      }

      const data = await response.json();
      navigate('/');
    } catch (error) {
      console.error('Register failed', error);
    }
  };
  return (
    <div>
      <h2>Registro de Admin</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Registro</button>
    </div>
  );
}