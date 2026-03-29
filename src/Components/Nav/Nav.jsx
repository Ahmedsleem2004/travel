import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';

function Nav() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${scrolled ? 'black-them' : 'white-them'}`}>
        
        <div className="container">

          {/* LOGO */}
          <Link to='/' className='navbar-brand logo'>
            Frost<span>Quest</span>
          </Link>

          {/* TOGGLER */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target="#navbarNav"
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          {/* LINKS */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center">

              <li className="nav-item">
                <NavLink to="/" end className="nav-link">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/About" className="nav-link">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Tour" className="nav-link">Tour</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Blogs" className="nav-link">Blogs</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">Contact</NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* SEARCH MODAL */}
      <div className="modal fade" id='searchModal' tabIndex='-1'>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">

            <div className="modal-header border-0">
              <h5 className="modal-title">Search</h5>
              <button type='button' className='btn-close btn-close-white' data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <div className='input-group'>
                <input type="text" className='form-control' placeholder='Search Here...' />
                <span className='input-group-text bg-white'>
                  <i className="bi bi-search text-dark"></i>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Nav