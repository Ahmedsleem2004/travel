import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import btnArrow from '../../assets/btn-arrow.svg';
import plane from '../../assets/plane.svg';
import about1 from './../../assets/about-image-1.webp'
import about2 from './../../assets/about-image-2.webp'
import tst1 from './../../assets/tst-1.webp'
import tst2 from './../../assets/tst-2.webp'
import tst3 from './../../assets/tst-3.webp'
import tst4 from './../../assets/tst-4.webp'
import abElement1 from './../../assets/about-element-1.webp'
import abElement2 from './../../assets/about-element-2.webp'
import abElement3 from './../../assets/about-element-3.webp'
import checkImg from './../../assets/about-check.svg'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Destination from '../../Destination.json'
import DiscoverImg1 from '../../assets/Discover-image-1.webp'
import DiscoverImg2 from '../../assets/Discover-image-2.webp'
import DiscoverImg3 from '../../assets/Discover-image-3.webp'
import DiscoverImg4 from '../../assets/Discover-image-4.webp'
import steps1 from '../../assets/steps-1.svg'
import steps2 from '../../assets/steps-2.svg'
import steps3 from '../../assets/steps-3.svg'
import FeatureImg1 from '../../assets/Feature-image-1.webp'
import FeatureImg2 from '../../assets/Feature-image-2.webp'
import testBG from '../../assets/test-bg.webp'
import quote from '../../assets/quote-left.png'
import testImg01 from '../../assets/tst-image-1.webp'
import testImg02 from '../../assets/tst-3.webp'
import blog1 from '../../assets/blog1.webp'
import blog2 from '../../assets/blog2.webp'
import blog3 from '../../assets/blog3.webp'
import footer from '../../assets/footer.webp'
import { Navigation, EffectFade } from 'swiper/modules';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Index() {
    return (

        // {Hero slide}
        <>
            <Swiper
                modules={[Navigation, EffectFade]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                effect='fade'
                navigation={{
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',

                }}
                className='overflow-hidden'


            >
                <SwiperSlide>
                    <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
                        <div className='hero-content w-100 d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='text-white'>THE KINGDOM OF ICE</h2>
                            <h1 className='text-white'>Green Land</h1>
                            <button className="btn text-white hero-btn  mt-5">LEARN<img src={btnArrow} className='img fluid' alt="" /></button>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
                        <div className='hero-content w-100 d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='text-white'>THE KINGDOM OF ICE</h2>
                            <h1 className='text-white'>Green Land</h1>
                            <button className="btn text-white hero-btn  mt-5">LEARN<img src={btnArrow} className='img fluid' alt="" /></button>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero hero1 d-flex flex-column justify-content-center align-items-center">
                        <div className='hero-content w-100 d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='text-white'>THE KINGDOM OF ICE</h2>
                            <h1 className='text-white'>Green Land</h1>
                            <button className="btn text-white hero-btn  mt-5">LEARN<img src={btnArrow} className='img fluid' alt="" /></button>

                        </div>
                    </div>
                </SwiperSlide>
                <i className='bi bi-arrow-left-short swiper-btn swiper-prev'></i>
                <i className='bi bi-arrow-right-short swiper-btn swiper-next'></i>

            </Swiper>

            {/* {destinations} */}

            <div className="destinations py-5 my-5">
                <div className="section-title">
                    <div className='text-center d-flex flex-column align-items-center justify-content-center gap-3'>
                        <span className='d-flex align-items-center gap-2'>
                            <img src={plane} className='img-fluid' alt="" />
                            <span>Travel Destinations</span>
                            <img src={plane} className='img-fluid' alt="" />
                        </span>
                        <h2>Top Destinations</h2>
                        <p>Explore Our Top Destinitaions Voted By More Than 100,000+
                            Customers around the world
                        </p>
                    </div>
                </div>
                <div className="destinations-wrapper mt-5">
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'loop',
                            drag: 'free',
                            focus: 'center',
                            gap: 50,
                            perPage: 3,
                            arrows: false,
                            pagination: false,
                            AutoScroll: {
                                speed: 1,
                                autoStart: true,
                            },
                            breakPoints: {
                                1199: { perPage: 3 },
                                911: { perPage: 2 },
                                767: { perPage: 2 },
                                575: { perPage: 1 },
                                0: { perPage: 1 },
                            }
                        }}
                        extensions={{ AutoScroll }}

                    >
                        <SplideTrack>
                            {Destination.map(dest => (
                                <SplideSlide key={dest.id}>
                                    <div className="dest-card position-relative">
                                        <div className="dest-img overflow-hidden rounded">
                                            <img src={dest.image} className='img-fluid' alt={dest.name} />
                                            <span className='dest-price position-absolute top-0 end-0'>{dest.price}</span>
                                        </div>
                                        <div className="dest-content p-4 rounded border top-0 start-0 mt-3 position-absolute">
                                            <i className="fa-solid fa-arrow-right dest-arrow position-absolute"></i>
                                            <h2>{dest.name}</h2>
                                            <p>{dest.pere}</p>
                                            <div className='dest-day border-top pt-3' >
                                                <i className="bi bi-send-fill me-2"></i>
                                                <span>{dest.days}</span>
                                            </div>
                                        </div>

                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>



                    </Splide>
                    <p className='text-center mt-5 fs-5'>Want To See Our Top Destinations. <Link to='/Destination'>Click here to view More</Link> </p>

                </div>
            </div>
            {/* About */}
            <div className="about py-5">
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDE */}
                        <div className="col-lg-6 about-content-wrap">
                            <div className="section-title about-title">
                                <div className='d-flex flex-column align-items-start justify-content-start gap-3'>
                                    <span className='d-flex align-items-center gap-2'>
                                        <img src={plane} className='img-fluid' alt="" />
                                        <span> About Our Company</span>
                                        <img src={plane} className='img-fluid' alt="" />
                                    </span>
                                    <h2>Experience The World With Our Company </h2>
                                    <p>
                                        Embark On a Transformative Journey as our company invites you To
                                        Experince The world, Creating Unforgettable memorise throught
                                        exceptional travel adventures.
                                    </p>
                                </div>
                            </div>

                            <div className="row about-cols">
                                <div className='col-md-6'>
                                    <div className="about-col-img position-relative">
                                        <i className="bi bi-play-fill position-absolute"></i>
                                        <img src={about2} className='img-fluid' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 about-cols p-3">
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />Perfect Detailing</h4>
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />Completed Cartification</h4>
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />Save Your Budget</h4>
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />Free Consultations</h4>
                                </div>
                            </div>

                            <div className="about-bottom mt-5 d-flex gap-4">
                                <button className='btn custom-btn1'>
                                    Learn More
                                    <img src={btnArrow} className='img-fluid ms-2' alt="" />
                                </button><div className="about-col-box d-flex align-items-center">
                                    <div className="about-col-box-img">
                                        <img src={tst1} className='img-fluid' alt="" />
                                        <img src={tst2} className='img-fluid' alt="" />
                                        <img src={tst3} className='img-fluid' alt="" />
                                        <img src={tst4} className='img-fluid' alt="" />
                                    </div>
                                    <p className='ms-4 m-0 fs-5'>5.2+ Satisfiend Clients</p>
                                </div>


                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-6 about-img position-relative">
                            <img src={about1} className='img-fluid' alt="" />
                            <img src={abElement1} className='img-fluid abElement-1 position-absolute' alt="" />
                            <img src={abElement2} className='img-fluid abElement-2 position-absolute' alt="" />
                            <img src={abElement3} className='img-fluid abElement-3 position-absolute' alt="" />
                        </div>

                    </div>
                </div>
            </div>
            {/* Discover */}
            <div className="discover py-5">
                <div className="section-title about-title">
                    <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                        <span className='d-flex align-items-center  gap-2'>
                            <img src={plane} className='img-fluid' alt="" />
                            <span> Travel Destination</span>
                            <img src={plane} className='img-fluid' alt="" />
                        </span>
                        <h2>Discover the Touch of Nature </h2>
                        <p className='d-flex flex-column align-items-center justify-content-center'>Our Clints rave about our exceptional the seamless Experiences
                            that exceeded their expectations.
                        </p>

                    </div>
                </div>
                <div className="row px-5 my-5 mx-0 gap-3 align-items-center justify-content-center">
                    <div className="col-lg-2 p-4 discover-card position-relative">
                        <img src={DiscoverImg1} className='img-fluid' alt="" />
                        <div className='discover-card-content position-absolute d-flex flex-column    align-items-center justify-content-center text-center'>
                            <span><i className='bi bi-geo-alt-fill'></i>Maldives</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>
                        </div>

                    </div>
                    <div className="col-lg-2 p-4 discover-card position-relative">
                        <img src={DiscoverImg2} className='img-fluid' alt="" />
                        <div className='discover-card-content position-absolute d-flex flex-column    align-items-center justify-content-center text-center'>
                            <span><i className='bi bi-geo-alt-fill'></i>Vietnam</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>
                        </div>

                    </div>
                    <div className="col-lg-2 p-4 discover-card position-relative">
                        <img src={DiscoverImg3} className='img-fluid' alt="" />
                        <div className='discover-card-content position-absolute d-flex flex-column    align-items-center justify-content-center text-center'>
                            <span><i className='bi bi-geo-alt-fill'></i>Dubai</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>
                        </div>

                    </div>
                    <div className="col-lg-2 discover-card position-relative">
                        <img src={DiscoverImg4} className='img-fluid' alt="" />
                        <div className='discover-card-content position-absolute d-flex flex-column    align-items-center justify-content-center text-center'>
                            <span><i className='bi bi-geo-alt-fill'></i>Neapal</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>

                        </div>

                    </div>


                </div>
                <p className='text-center mt-5 fs-5'>Want To See Our Top Destinations. <a href="#">Click here to view More</a> </p>

            </div>
            {/* workig step */}
            <div className="working py-5 position-relative">
                <img src={FeatureImg1} className='featureImg featureImg1 img-fluid position-absolute' alt="" />
                <img src={FeatureImg2} className='featureImg featureImg2 img-fluid position-absolute' alt="" />
                <div className="container">
                    <div className="row">
                        <div className="section-title about-title">
                            <div className='d-flex flex-column align-items-start justify-content-start gap-3'>
                                <span className='mmm d-flex align-items-center gap-2'>
                                    <img src={plane} className='img-fluid' alt="" />
                                    <span>Working Steps</span>
                                    <img src={plane} className='img-fluid' alt="" />
                                </span>
                                <h2 className='mmm'>Book  Your next Trip <br /> in 3 Steps </h2>

                            </div>
                        </div>


                    </div>
                    <div className="row mt-5 gap-3">
                        <div className="col-lg-4 step-card rounded border d-flex flex-column gap-3">
                            <div className="step-img step-img1 rounded">
                                <img src={steps1} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Choose Destination</h2>
                                <p>Lobortis Iuctus neque duis lacinia volutp suspendisse pulvinar pen atibus malesu ada placerat...</p>
                            </div>
                        </div>
                        <div className="col-lg-4 step-card rounded border d-flex flex-column gap-3">
                            <div className="step-img step-img2 rounded">
                                <img src={steps2} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>make Payment</h2>
                                <p>Lobortis Iuctus neque duis lacinia volutp suspendisse pulvinar pen atibus malesu ada placerat...</p>
                            </div>
                        </div>
                        <div className="col-lg-4 step-card rounded border d-flex flex-column gap-3">
                            <div className="step-img step-img3 rounded">
                                <img src={steps3} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Reach Airport on date</h2>
                                <p>Lobortis Iuctus neque duis lacinia volutp suspendisse pulvinar pen atibus malesu ada placerat...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonials */}
            <div className='testimonial py-5 position-relative'>
                <img src={testBG} alt="img-testimionials" className='img-fluid test-img position-absolute' />
                <img src={testBG} alt="img-testimionials" className='img-fluid test-img-2 position-absolute' />
                <div className="section-title test-title ">
                    <div className='text-center d-flex  flex-column gap-2 justify-content-center '>
                        <span className='d-flex align-items-center justify-content-center'>
                            <img src={plane} className='img-fluid' alt="" />
                            <span>Testimonials</span>
                            <img src={plane} className='img-fluid' alt="" />
                        </span>
                        <h2>What Our Clients Say's</h2>
                        <p className='m-auto' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. A in quisquam numquam asperiores fugiat dolores culpa reiciendis sequi possimus qui!</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        className='test-Swiper'
                    >
                        <SwiperSlide>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-img d-flex align-items-center justify-content-center">
                                        <img src={testImg01} className='img-fluid' alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="test-content">
                                        <img src={quote} className='img-fluid test-content-img' alt="" />
                                        <p className='test-pare'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tenetur quae? Possimus quos atque dicta quo nobis quibusdam doloremque nam fuga. Rerum, nam! Distinctio, debitis?

                                        </p>
                                        <div className="test-stars">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <div className="test-user mt-3 d-flex align-items-center gap-2">
                                            <img src={testImg02} className='img-fluid' alt="" />
                                        </div>
                                        <div className='test-user-info'>
                                            <h3>TASHA STEWART</h3>
                                            <p className='m-0'>Web Developer at ThemeXviewer</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-img d-flex align-items-center justify-content-center">
                                        <img src={testImg01} className='img-fluid' alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="test-content">
                                        <img src={quote} className='img-fluid test-content-img' alt="" />
                                        <p className='test-pare'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tenetur quae? Possimus quos atque dicta quo nobis quibusdam doloremque nam fuga. Rerum, nam! Distinctio, debitis?

                                        </p>
                                        <div className="test-stars">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <div className="test-user mt-3 d-flex align-items-center gap-2">
                                            <img src={testImg02} className='img-fluid' alt="" />
                                        </div>
                                        <div className='test-user-info'>
                                            <h3>TASHA STEWART</h3>
                                            <p className='m-0'>Web Developer at ThemeXviewer</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* banner */}
            <div className="blog-banner py-5 container-fluid d-flex justify-content-center align-items-center">
                <div className="container banner-title section-title d-flex text-center">
                    <h2>FrostQuest is world leading Online Tour Booking Platform</h2>
                    <div className="btn-box mt-5">
                        <button className='btn custom-btn1'>
                            learn More img

                            <img src={btnArrow} className='img-fluid ms-2' alt="" />
                        </button>
                    </div>
                </div>
            </div>
            {/* blog */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 section-title blog-title">
                        <span className='text-primary fw-bold'>Blog & NEWS</span>
                        <h2 className='fw-bold mt-2'>get More Update <br /> News & Blogs</h2>

                    </div>
                    <div className="col-md-6">
                        <p>Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts - your gateway to a world of update.</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="card blog-card border-0 overflow-hidden">
                            <div className="blog-img">
                                <img src={blog1} className='card-img' alt="" />
                            </div>
                            <div className="card-img-overlay d-flex flex-column justify-content-end blog-overlay">
                                <span>Read More</span>
                                <div className="detail">
                                    <h5 className="card-title fw-blod">Beach Days, long Hikes, And</h5>
                                    <p className="card-text">Emma Mark + April 25, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card blog-card border-0 overflow-hidden">
                            <div className="blog-img">
                                <img src={blog2} className='card-img' alt="" />
                            </div>
                            <div className="card-img-overlay d-flex flex-column justify-content-end blog-overlay">
                                <span>Read More</span>
                                <div className="detail">
                                    <h5 className="card-title fw-blod">Beach Days, long Hikes, And</h5>
                                    <p className="card-text">Emma Mark + April 25, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card blog-card border-0 overflow-hidden">
                            <div className="blog-img">
                                <img src={blog3} className='card-img' alt="" />
                            </div>
                            <div className="card-img-overlay d-flex flex-column justify-content-end blog-overlay">
                                <span>Read More</span>
                                <div className="detail">
                                    <h5 className="card-title fw-blod">Assertively iterate resource maximizing</h5>
                                    <p className="card-text">Emma Mark + April 25, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className='text-center mt-5 fs-5'>Want To See Our Top Destinations. <a href="#">Click here to view More</a> </p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-12">

                        <div className="row footer-head align-items-center px-3 px-md-5 py-4">
                            <div className="col-12 col-mb-6 mb-md-0 footer-title section-title text-center text-md-start ">
                                <h2>Subscribe for latest update about Travelling </h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="input-box d-flex flex-column">
                                    <input type="email" placeholder='Enter Your Email' className='form-control custom-input p-3 w-100' />
                                </div>
                                <div className="btn-box mt-3">
                                    <button className='btn custom-btn1'>
                                        learn More

                                        <img src={btnArrow} className='img-fluid ms-2' alt="" />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row px-3 px-md-5 py-4">
                    <div className="col-12 col-md-8 mb-4 mb-md-0 text-start text-md-start">
                        <a href="" className='logo text-dark fw-bold d-block mb-2 navbar-brand'>Frost Quest </a>
                        <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sunt facilis quod deleniti obcaecati doloremque non. Nesciunt aliquam aliquid unde?</p>
                        <ul className='d-flex justify-content-center justify-content-md-start gap-3 list-unstyled social-icons mt-3'>
                            <li> <i className='ri-facebook-circle-fill fs-4'></i></li>
                            <li> <i className='ri-youtube-fill fs-4'></i></li>
                            <li> <i className='ri-instagram-fill fs-4'></i></li>
                            <li> <i className='ri-linkedin-box-fill fs-4'></i></li>
                        </ul>

                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row mt-4 mt-md-5 text-center text-md-start">
                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <ul className='footer-links text-start'>
                                    <li> <a href="#">About</a></li>
                                    <li> <a href="#">Services</a></li>
                                    <li> <a href="#">Login</a></li>
                                    <li> <a href="#">Flights</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <ul className='footer-links text-start'>
                                    <li> <a href="#">Booking</a></li>
                                    <li> <a href="#">FAQ</a></li>
                                    <li> <a href="#">Hotels</a></li>
                                    <li> <a href="#">Teams</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                <ul className='footer-links text-start'>
                                    <li> <a href="#">Team & Use</a></li>
                                    <li> <a href="#">Sitemap</a></li>
                                    <li> <a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4 mt-md-0 px-3 px-md-0 text-center text-md-start">
                        <img src={footer} className='img-fluid footet-img' alt="" />
                    </div>

                </div>
            </div>
            {/* footer bottom */}
            <div className="footer-bottom container-fluid text-white bg-dark p-2 text-center">
                <p className="mb-0 small">@ 2025 <strong>Sleem</strong> - All Rights Reserved.</p>
            </div>

        </>


    )
}

export default Index