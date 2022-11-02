import React from "react";

const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
<a class="navbar-brand" href="#">Navbar</a>

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Service
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About
        </a>
      </li>
    </ul>
    </div>
    </nav>
  );
};

export default Navbar;
