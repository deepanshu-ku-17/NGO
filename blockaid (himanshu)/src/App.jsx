import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Team from "./pages/Team/Team";
import Transaction from "./pages/Transaction/Transaction";
import Transparency from "./pages/Transparency/Transparency";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/transparency" element={<Transparency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
