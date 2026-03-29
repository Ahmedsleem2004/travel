import React from "react";

import ins1 from '../../assets/ins1.webp'
import ins2 from '../../assets/ins2.webp'
import ins3 from '../../assets/ins3.webp'
import ins4 from '../../assets/ins4.webp'
import ins5 from '../../assets/ins5.webp'

function Footer() {
  return (
    <>
      <footer className="bg-light py-5 pb-0">
        <div className="container">

          {/* TITLE */}
          <h2 className="fw-bold mb-4 text-center text-md-start">
            Quick Links:
          </h2>

          {/* LINKS */}
          <div className="row g-4">

            <div className="col-6 col-md-3">
              <p><i className="fas fa-check me-2"></i> Branding</p>
              <p><i className="fas fa-check me-2"></i> Recent Work</p>
              <p><i className="fas fa-check me-2"></i> Our history</p>
            </div>

            <div className="col-6 col-md-3">
              <p><i className="fas fa-check me-2"></i> Product Gallery</p>
              <p><i className="fas fa-check me-2"></i> Web & Interactive</p>
              <p><i className="fas fa-check me-2"></i> Help & Support</p>
            </div>

            <div className="col-6 col-md-3">
              <p><i className="fas fa-check me-2"></i> About us</p>
              <p><i className="fas fa-check me-2"></i> Branded Merchandise</p>
              <p><i className="fas fa-check me-2"></i> Our Awards</p>
            </div>

            <div className="col-6 col-md-3">
              <p><i className="fas fa-check me-2"></i> 666 656 0000</p>
              <p><i className="fas fa-check me-2"></i> needhelp@gmail.com</p>

              <div className="mt-3">
                <a href="#" className="text-dark me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-dark me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

          </div>

          {/* IMAGES */}
          <div className="row mt-5">
            <div className="col">
              <div className="d-flex flex-wrap justify-content-center gap-3">

                <img src={ins1} className="img-fluid" style={{width: "100px"}} alt="" />
                <img src={ins2} className="img-fluid" style={{width: "100px"}} alt="" />
                <img src={ins3} className="img-fluid" style={{width: "100px"}} alt="" />
                <img src={ins4} className="img-fluid" style={{width: "100px"}} alt="" />
                <img src={ins5} className="img-fluid" style={{width: "100px"}} alt="" />

              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center mt-4 py-3 border-top">
            <small>© copyright 2025. All Rights Reserved.</small>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;