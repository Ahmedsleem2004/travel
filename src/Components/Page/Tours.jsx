import React from 'react'
import { data, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import galleryimage1 from '../../assets/gallery-image1.webp'
import galleryimage2 from '../../assets/gallery-image2.webp'
import galleryimage3 from '../../assets/gallery-image3.webp'
import galleryimage4 from '../../assets/gallery-image4.webp'
import galleryimage5 from '../../assets/gallery-image5.webp'

import Datas from '../../Destination.json'


export default function Tours() {
    return (
        <>
            {/* page section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Trip Search Result </h2>
                        <ul>
                            <li className='pe-2'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <i className='bi bi-gear fs-6 pe-2'></i>
                                Trip Search Result
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            {/* Tours */}
            <div className="tours-wrapper my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 tour-cate-wrap-sticky">
                            <div className="tour-cate-col pb-3 border-bottom d-flex gap-5 justify-content-between">
                                <h2>Criteria</h2>
                                <button className='btn'>Clear All</button>
                            </div>
                            <div className="tour-cate-box-wrap rounded pb-4 mt-5">
                                <div className="tour-cate-box">
                                    <h2>Destination</h2>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Canada
                                        </label>
                                        <span>2</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Emirates
                                        </label>
                                        <span>2</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Europe
                                        </label>
                                        <span>1</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            France
                                        </label>
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tour-cate-box-wrap rounded pb-4 mt-5">
                                <div className="tour-cate-box">
                                    <h2>Activities</h2>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Boating
                                        </label>
                                        <span>7</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            City Tour
                                        </label>
                                        <span>8</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Kayaking
                                        </label>
                                        <span>7</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Nayagr falls
                                        </label>
                                        <span>6</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tour-cate-box-wrap rounded pb-4 mt-5">
                                <div className="tour-cate-box">
                                    <h2>Trip Types</h2>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Luxury
                                        </label>
                                        <span>11</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Premium
                                        </label>
                                        <span>10</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Standard
                                        </label>
                                        <span>1</span>
                                    </div>
                                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                        <label className="d-flex align-items-center gap-2">
                                            <input type="checkbox" />
                                            Nayagr falls
                                        </label>
                                        <span>6</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 ps-4 ps-lg-5">
                            <div className="row">
                                <div className="col-lg-12 border rounded p-3 d-flex align-items-center justify-content-end gap-3">
                                    <span className='fs-5'>Sort :</span>
                                    <i className='bi bi-card-list tour-grid-icon fs-5'></i>
                                    <i className='bi bi-grid-3x3 tour-grid-icon fs-5'></i>
                                </div>
                            </div>
                            <div className="row tours-grid mt-4">
                                {
                                    Datas.map(Data => (
                                        <div className="col-lg-6 mb-4" key={Data.id}>
                                            <div className="tour-card shadow-sm position-relative">

                                                {/* IMAGE WRAP */}
                                                <div className="tour-card-img">
                                                    <img src={Data.image} className="img-fluid rounded" alt='' />

                                                    {/* LOCATION BADGE */}
                                                    <span>
                                                        <i className='bi bi-geo-alt-fill'></i> {Data.location}
                                                    </span>
                                                </div>

                                                {/* CONTENT */}
                                                <div className="tour-card-content mt-4 px-3">

                                                    {/* TITLE */}
                                                    <Link
                                                        to={`/tour-details/${Data.id}`}
                                                        className="text-black text-decoration-none"
                                                    >
                                                        <h2>{Data.name}</h2>
                                                    </Link>

                                                    {/* BOTTOM BOX */}
                                                    <div className="tour-card-box border-top py-3 d-flex justify-content-between gap-2 mt-3">

                                                        <p>
                                                            <i className='bi bi-clock-history'></i> {Data.days}
                                                        </p>

                                                        <Link to={`/ToursDetailes/${Data.id}`}>
                                                            View Details
                                                        </Link>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            {/* gallery */}
            <section className='gallery-grid my-5 mb-0'>
                <div className="row">
                    <Swiper

                        slidesPerView={5}
                        autoplay={true}
                        loop={true}
                        className='gallery-swiper'

                    >
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage1} alt="gallery" className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage2} alt="gallery" className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage3} alt="gallery" className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage4} alt="gallery" className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage5} alt="gallery" className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage2} alt="gallery" className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage3} alt="gallery" className='img-fluid' />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>

        </>
    )
}
