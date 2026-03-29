import React from 'react'
import { Link } from 'react-router-dom'


export default function Contact() {
  return (
    <>

<div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>Contact</h2>
            <ul>
              <li className='pe-2'>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <i className='bi bi-gear fs-6 pe-2'></i>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
 <div className="contact-section py-5 my-5">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="fw-bold">Get in Touch</h2>
      <p className="text-muted">We’d love to hear from you</p>
    </div>

    {/* <div className="row g-4 align-items-stretch"> */}

      {/* LEFT – Image Background */}
    


      {/* RIGHT – Form */}
      <div className="contact-section py-5">
      <div className="container">
    <div className="row g-0 shadow rounded overflow-hidden">

      {/* LEFT IMAGE */}
      <div className="col-lg-6">
        <div className="contact-left h-100 position-relative p-4">

          <div className="contact-details">

            <div className="detail-item">
              <div className="icon-circle">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h6>Office Address</h6>
                <p>
                  Travel Agency Network 20<br />
                  Eastbourne Terrace, London W2 6LG
                </p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon-circle">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h6>Phone Number</h6>
                <p>
                  (488) 8542-389-5470<br />
                  (488) 8542-389-5470
                </p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h6>Mail Address</h6>
                <p>
                  info@envato.com<br />
                  support@envato.com
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="col-lg-6 bg-white p-5 ">
        <form className="contact-form">
          <input type="email" className="form-control " placeholder="Email address" />
          <input type="text" className="form-control mt-3" placeholder="Phone Number" />
          <input type="text" className="form-control mt-3" placeholder="Subject" />
          <textarea className="form-control mt-4" rows="5" placeholder="Type your message..."></textarea>

          <button className="btn fw-bold contact-btn w-100">
            Send Message Now
          </button>
        </form>
      </div>

    </div>
  </div>
</div>

{/* 
    </div> */}

    {/* MAP */}
    <div className="row mt-5">
      <div className="col-12">
        <div className="map-container rounded overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=london&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

  </div>
</div>

    </>
  )
}
