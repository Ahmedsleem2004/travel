import React, { useState } from 'react';
import destinationImage1 from '../../../public/Images/Destination-8.webp';
import destinationImage2 from '../../../public/Images/Destination-image-4.webp';
import destinationImage3 from '../../../public/Images/Destination-image-2.webp';
import destinationImage4 from '../../../public/Images/Destination-image-1.webp';
import { Link } from 'react-router-dom';

export default function DestinationDetailes() {
  const images = [destinationImage1, destinationImage2, destinationImage3, destinationImage4];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>
      {/* Banner Section */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>Destination Details</h2>
            <ul className="d-flex list-unstyled">
              <li className='pe-2'>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <i className='bi bi-gear fs-6 pe-2'></i>
                Destination Details
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="destination-container py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-2 d-flex flex-column gap-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="destination-details-wrap"
                  onClick={() => setMainImage(img)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={img} alt="" className="img-fluid rounded" style={{height:'144px', width:'220px' , objectFit:'cover'}} />
                </div>
              ))}
            </div>
            <div className="col-lg-8 ">
              <img src={mainImage} alt="main" className="img-fluid w-100 rounded-5 " style={{height:'600px', objectFit:'cover',}} />
            </div>
          </div>

          <h2 className='fw-bold mt-5 fs-1'>New York, USA</h2>

          {/* Details Info Section */}
          <div className="row row-cols-2 row-cols-md-4 g-4 mt-3">
            {[
              { label: 'Accommodation', value: '5 Star Hotel' },
              { label: 'Admission Free', value: 'NO' },
              { label: 'Arrival City', value: 'London' },
              { label: 'Best Session', value: 'Autumn' },
              { label: 'Departure City', value: 'Kathmandu' },
              { label: 'Insurance', value: 'Cover 60%' },
              { label: 'Free Cancel', value: 'Yes' },
              { label: 'Language', value: 'English' },
              { label: '01 Guide', value: 'Guided' },
              { label: 'Minimum Age', value: '18' },
              { label: 'Hotel Transfer', value: 'Available' },
              { label: 'Maximum', value: '54' },
            ].map((item, index) => (
              <div className="col d-flex align-items-center" key={index}>
                <i className='bi bi-building me-3 text-primary'></i>
                <div>
                  {item.label}: <br />
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Overview Section */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className="fw-bold fs-1">Overview</h2>
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quibusdam magni, adipisci nihil delectus dolor consequuntur.
              </p>
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat quo facilis soluta deleniti optio tempore molestias eos.
              </p>
            </div>
          </div>

          {/* Top Highlights */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className='fw-bold fs-1'>Top Highlights</h2>
              <ul className='list-unstyled mt-3'>
                {[
                  'Easly generate images with detailed text prompts',
                  'Customize your images with different styles, moods, colors',
                  'Generate high-quality images with up to 8K resolution',
                  'Visit Tengboche the biggest and oldest monastery in the region',
                  'Travel through the sherpa villages of Namche, Khumjung, Khunde, and Dingboche',
                  'Enjoy the amazing view of the Himalayas from Kala Patthar',
                ].map((item, idx) => (
                  <li className='fs-5 mb-1' key={idx}>
                    <i className=' bi bi-stars text-primary me-2'></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Included & Excluded */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className='fw-bold fs-1 mb-4'>Included and Excluded</h2>
              <div className="row g-3">
                {[1, 2].map((item, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="bg-light p-3 rounded shadow-sm">
                      <ul className="list-unstyled mb-0">
                        {[
                          'Meal as per hotel plan and drinks free too.',
                          'Return airport and round trip transfers.',
                          'Accommodation on twin sharing basis',
                          'The above per day disposal basis.',
                          'Enjoy Brussels day tour Overnight Brussels.',
                        ].map((text, i) => (
                          <li className='fs-5 mb-2' key={i}>
                            <i className='bi bi-check2-circle text-primary me-2'></i>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="row mt-5">
            <div className="col-md-9">
              <div className="form-container shadow p-4 rounded">
                <h5 className='mb-4 fs-3'>You can send enquiry via the form below.</h5>
                <div className="mb-3">
                  <strong className='fs-6'>Trip name:</strong> <span className='text-danger'>*</span> New York, USA
                </div>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className='form-label fs-bold'>Your Name</label>
                      <input type="text" className='form-control rounded-5' placeholder='Enter Your Name' />
                    </div>
                    <div className="col-md-6">
                      <label className='form-label fs-bold'>Your Email</label>
                      <input type="email" className='form-control rounded-5' placeholder='Enter Your Email' />
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-md-6">
                      <label className='form-label fs-bold'>Country</label>
                      <select className='form-select rounded-5'>
                        <option selected disabled >Choose a Country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className='form-label fs-bold'>Contact Number</label>
                      <input type="text" className='form-control rounded-5' placeholder='Enter Your Contact' />
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-md-6">
                      <label className='form-label fs-bold'>No. of Adults</label>
                      <input type="number" className='form-control rounded-5' placeholder='Enter Number of Adults' />
                    </div>
                    <div className="col-md-6">
                      <label className='form-label fs-bold'>No. of Children</label>
                      <input type="number" className='form-control rounded-5' placeholder='Enter Number of Children' />
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="mb-3">
                      <label className='form-label fs-bold'>Enquiry Subject</label>
                      <input type="text" className='form-control rounded-5' placeholder='Enquiry Subject' />
                    </div>
                    <div className="mb-3 ">
                      <label className='form-label fs-bold'>Your Message</label>
                     
                      <textarea type="text" className='form-control rounded-5 w-100' placeholder='Enter Your Message'></textarea>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type='submit' className='btn btn-purple px-5 py-2 w-100 rounded-5 '>Send Email</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
