import React from 'react';
import logo from '../assets/weatherinfo-logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex align-items-center">
      <img style={{objectFit:"cover"}} src={logo} alt="Logo" width="150" height="100" className="me-2" />
      <h1 className="text-white">Weather Info</h1>
    </nav>
  );
}
