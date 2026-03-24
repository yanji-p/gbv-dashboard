// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">GBV Dashboard</div>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/visualization">Visualization</Link>
        <Link to="/prediction">Prediction</Link>
      </div>
    </nav>
  );
};

export default Navbar;