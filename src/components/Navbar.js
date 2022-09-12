import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Navbar = ({ setSearchText }) => {

  console.log("I am run")
  const navigate = useNavigate()
  
  const inputRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()
  }

  function handleClick(){
    navigate('/search')
    setSearchText(inputRef.current.value)
  }
  

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="gotosomewherenavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="gotosomewhere" className="nav-link disabled">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={inputRef}
              required
            />
            <button onClick={handleClick} className="btn btn-outline-success" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
