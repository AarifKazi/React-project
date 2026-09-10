import React from "react";
import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
    FiStar,
    FiArrowRight
} from "react-icons/fi";

import { FaQuoteLeft } from "react-icons/fa";
import "../main.css";

const testimonials = [

    {
        id: 1,
        name: "John Smith",
        company: "CEO • TechNova",
        review:
            "Moon Technology transformed our website into a modern, fast and user-friendly platform. Their team delivered everything perfectly.",
    },

    {
        id: 2,
        name: "David Wilson",
        company: "Founder • GrowX",
        review:
            "Professional developers, excellent communication and timely delivery. Highly recommended for any IT solutions.",
    },

    {
        id: 3,
        name: "Michael Brown",
        company: "Director • BrightTech",
        review:
            "Our business has grown significantly after launching our new website. Great experience working with Moon Technology.",
    },

    {
        id: 4,
        name: "Emily Johnson",
        company: "Manager • Nexora",
        review:
            "Amazing UI design and outstanding support. Everything was delivered beyond our expectations.",
    }

];

const Review = () => {

    return (

        <section className="testimonials-section">

            <Container>

                <div className="testimonial-heading">

                    <span className="section-subtitle">
                        CLIENT TESTIMONIALS
                    </span>

                    <h2>
                        Trusted by Businesses
                        <span> Around The World</span>
                    </h2>

                    <p>
                        Our clients trust us to deliver innovative digital solutions
                        that help their businesses grow faster and smarter.
                    </p>

                </div>


                <div className="testimonial-slider">

                    <Swiper

                        modules={[
                            Autoplay,
                            Pagination,
                        ]}

                        spaceBetween={30}

                        slidesPerView={3}

                        loop={true}

                        speed={900}

                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}

                        pagination={{
                            clickable: true,
                        }}


                        breakpoints={{

                            0: {
                                slidesPerView: 1,
                            },

                            768: {
                                slidesPerView: 2,
                            },

                            1200: {
                                slidesPerView: 3,
                            }

                        }}

                    >

                        {

                            testimonials.map((item) => (
                                <SwiperSlide key={item.id}>

                                    <div className="testimonial-card">

                                        <div className="quote-icon">
                                            <FaQuoteLeft />
                                        </div>


                                        <div className="stars">

                                            <FiStar />
                                            <FiStar />
                                            <FiStar />
                                            <FiStar />
                                            <FiStar />

                                        </div>


                                        <p className="review">

                                            "{item.review}"

                                        </p>


                                        <div className="client-info">

                                            <div>

                                                <h5>{item.name}</h5>

                                                <span>
                                                    {item.company}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </SwiperSlide>

                            ))

                        }

                    </Swiper>

                </div>

            </Container>

        </section>

    );

};

export default Review;