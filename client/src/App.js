import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container className="app-container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<div>registration page</div>} />
          <Route path="/login" element={<div>Login page</div>} />
          <Route path="/wishlist" element={<div>Wishlist page</div>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
