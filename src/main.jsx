import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)




// import React from 'react';
// import star from '../../assets/star.webp';
// import destinationImage1 from '../../../public/Images/Destination-6.webp';
// import destinationImage2 from '../../../public/Images/Destination-7.webp';
// import destinationImage3 from '../../../public/Images/Destination-8.webp';
// import tst1 from '../../assets/tst-1.webp';
// import tst2 from '../../assets/tst-2.webp';
// import tst3 from '../../assets/tst-3.webp';
// import tst4 from '../../assets/tst-4.webp';
// import travelIcon1 from '../../assets/travel-icon1.webp'
// import travelIcon2 from '../../assets/travel-icon2.webp'
// import travelexperienceimage1 from '../../assets/experience-image1.webp';
// import travelexperienceimage2 from '../../assets/experience-image2.webp';
// import travelexperienceimage3 from '../../assets/experience-image3.webp';
// import travelplace from '../../assets/place-image.webp'
// import placeelement from '../../assets/place-element.webp'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css'
// import brandimage1 from '../../assets/brand-image1.webp'
// import brandimage2 from '../../assets/brand-image2.webp'
// import brandimage3 from '../../assets/brand-image3.webp'
// import brandimage4 from '../../assets/brand-image4.webp'
// import brandimage5 from '../../assets/brand-image5.webp'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/effect-cards'
// import 'swiper/css';
// import { EffectCards, Autoplay } from 'swiper/modules';




// import price1 from '../../assets/price-1.webp'
// import price2 from '../../assets/price-2.webp'
// import price3 from '../../assets/price-3.webp'
// import price4 from '../../assets/price-4.webp'
// import price5 from '../../assets/price-5.webp'
// import price6 from '../../assets/price-6.webp'
// import galleryimage1 from '../../assets/gallery-image1.webp'
// import galleryimage2 from '../../assets/gallery-image2.webp'
// import galleryimage3 from '../../assets/gallery-image3.webp'
// import galleryimage4 from '../../assets/gallery-image4.webp'
// import galleryimage5 from '../../assets/gallery-image5.webp'
// import { Link } from 'react-router-dom';