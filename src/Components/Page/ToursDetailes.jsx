import Lottie from "lottie-react";

import React, { useEffect,useState } from 'react';
import destinationImage1 from '../../../public/Images/Destination-8.webp';
import destinationImage2 from '../../../public/Images/Destination-image-4.webp';
import destinationImage3 from '../../../public/Images/Destination-image-2.webp';
import destinationImage4 from '../../../public/Images/Destination-image-1.webp';
import { Link,useLocation,useParams } from 'react-router-dom';

import Datas from '../../Destination.json'

export default function ToursDetailes () {
  useEffect(() => {
  fetch("https://assets2.lottiefiles.com/packages/lf20_usmfx6bp.json")
    .then(res => res.json())
    .then(data => setLoaderAnimation(data))
    .catch(err => console.log("Lottie Error:", err));
}, []);


const [loaderAnimation, setLoaderAnimation] = useState(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);

    }, 2000);
  };

  
 // Get tour
const { id } = useParams();
const tour = Datas.find(item => item.id === parseInt(id));

if (!tour) return <p>Tour not found</p>;




const images = [
  destinationImage1,
  destinationImage2,
  destinationImage3,
  destinationImage4
];

const [mainImage, setMainImage] = useState(images[0]);

// Convert price "$11000" → 11000
const price = parseInt(tour.price.replace(/\D/g, "")) || 0;

// States
const [adultCount, setAdultCount] = useState(1);
const [childCount, setChildCount] = useState(1);

// Prices
const priceAdult = price;
const priceChild = price / 2;

// Totals
const adultTotal = adultCount * priceAdult;
const childTotal = childCount * priceChild;   // ← إصلاح
const total = adultTotal + childTotal;

const today = new Date().toLocaleDateString('en-US', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});
const now = new Date();
const currentTime = now.toLocaleTimeString(); 



  return (
    <>
      {/* Banner Section */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>{tour.name + `,`}</h2>
            <ul className="d-flex list-unstyled">
              <li className='pe-2'>
                <Link to='/'>Home</Link> &nbsp;
              </li>
              <li>
                <i className='bi bi-gear fs-6 pe-2'></i>
                Trip Details
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
                  <img src={img} alt="" className="img-fluid rounded" style={{height:'100px', width:'170px' , objectFit:'cover'}} />
                </div>
              ))}
            </div>
            <div className="col-lg-8 ">
              <img src={`/${tour.image}`} alt="main" className="img-fluid w-100 rounded-5 " style={{height:'430px', objectFit:'contain',}} />
            </div>
          </div>

          <h2 className='fw-bold mt-5 fs-1'>{tour.name}</h2>
          <button type='button' className='btn btn-purple px-5 py-2 rounded-5' data-bs-toggle="modal" data-bs-target='#bookingModal'>
            Book Now
          </button>

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

      {/* BookModal */}
      <div className="modal fade" id='bookingModal' tabIndex="-1" aria-labelledby='bookingModalLabel' aria-hidden='true'>
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body book-modal-wrap d-flex p-0">

        {/* LEFT SIDE */}
        <div className="col-lg-7 p-4">

          <h6 className="mb-4">TRAVELLERS</h6>

          {/* Adult Card */}
          <div className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6>Adult</h6>
                <small>/Person</small>
              </div>
              <h5>$75,000</h5>

              <div className="input-group book-qount">
                <input
                  type="number"
                  className='form-control text-center'
                  min={1}
                  value={adultCount}
                  onChange={(e) => setAdultCount(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Child Card */}
          <div className="card mb-3 shadow-sm">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <h6>Child</h6>
                <small>/Person</small>
              </div>
              <h5>$55,000</h5>

              <div className="input-group book-qount">
                <input
                  type="number"
                  className='form-control text-center'
                  min={1}
                  value={childCount}
                  onChange={(e) => setChildCount(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-4">

  {/* Success Message */}
  {success && (
    <div className="alert text-light bg-success fw-bold text-center rounded-pill">
      Booking Completed Successfully!
    </div>
  )}

  {/* Loader */}
  {loading && (
    <div className="d-flex justify-content-center align-items-center my-3">
      {loaderAnimation && (
  <Lottie 
    animationData={loaderAnimation}
    loop={true}
    style={{ width: 250, height: 150 }}
  />
)}

    </div>
  )}

  {/* Main Button */}
  {!loading && !success && (
    <button 
      onClick={handleCheckout}
      className='btn btn-primary fs-4 rounded-pill px-5 py-2'
    >
      Proceed To Checkout
    </button>
  )}

</div>


        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-5 bg-light p-4">
          <div className="d-flex justify-content-between mb-4">
            <h5 className='text-muted'>BOOKING SUMMARY</h5>
            <button type='button' className='btn-close' data-bs-dismiss="modal"></button>
          </div>

          <h6>{tour?.name} - {tour?.location}</h6>

          <p>Starting Date: <strong>{today}</strong></p>
          <p>Current Time: {currentTime}</p>


          <div className="mb-2">
            <div className="d-flex justify-content-between">
              <span>Adult: {adultCount} x ${priceAdult}</span>
              <span>${adultTotal.toLocaleString()}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Child: {childCount} x ${priceChild}</span>
              <span>${childTotal.toLocaleString()}</span>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

    </>
  );
}
