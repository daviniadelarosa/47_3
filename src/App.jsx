import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterAdmin from "./pages/RegisterAdmin";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginOk from "./pages/LoginOk";
import NoLogin from "./pages/NoLogin";
import NoRole from "./pages/NoRole";
import PrivateRoute from './components/PrivateRoute';
import LogOut from "./pages/LogOut";
import ChangePass from './components/ChangePass';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAdmin" element={<PrivateRoute role="admin"><RegisterAdmin /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginok" element={<LoginOk />} />
        <Route path="/nologin" element={<NoLogin />} />
        <Route path="/norole" element={<NoRole />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/changepass" element={<ChangePass />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;