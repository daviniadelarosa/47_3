import { Navigate } from 'react-router-dom';
export default function LogOut() {
    const token = localStorage.getItem('token');
    if (token) {
        localStorage.removeItem('token');
        <Navigate to="/" />;
    }

    return (
        <div>
            <h2>Se ha hecho logout</h2>
        </div>
    );
}