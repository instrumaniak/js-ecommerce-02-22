import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container className="mt-2">
        <Routes>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/registration" element={<div>registration page</div>} />
          <Route path="/login" element={<div>Login page</div>} />
          <Route path="/wishlist" element={<div>Wishlist page</div>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
