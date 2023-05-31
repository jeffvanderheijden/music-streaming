import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/songs">Songs</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/artists">Artists</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;