import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import boxTruck from "../assets/boxTruck.jpg";
import flatBed from "../assets/flatBed.jpeg";
import reefer from "../assets/reefer.jpg";
import dryVan from "../assets/dryVan.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useRef } from "react";

const services = [
    {
        title: "Flatbed",
        image: flatBed,
        description: "Versatile hauling for oversized, heavy, or irregular freight."
    },
    {
        title: "Box Truck",
        image: boxTruck,
        description: "Efficient and secure transport for dry goods and retail loads."
    },
    {
        title: "Reefer",
        image: reefer,
        description: "Reliable temperature-controlled transport for sensitive cargo."
    },
    {
        title: "Dry Van",
        image: dryVan,
        description: "Fully enclosed, safe capacity for standard palletized freight."
    }
];

export default function Slider() {

    return (
        <section className="services">
            <h2>Our Services</h2>

            <div className="slider-wrapper">

                <button className="nav-btn swiper-prev">
                    <svg viewBox="0 0 100 100">
                        <polygon
                            points="25,3 75,3 97,50 75,97 25,97 3,50"
                            fill="#06192c"
                            stroke="#c59524"
                            strokeWidth="5"
                        />
                    </svg>

                    <span>&#10094;</span>
                </button>

                <Swiper
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    navigation={{
                        prevEl: ".swiper-prev",
                        nextEl: ".swiper-next",
                    }}
                    effect="coverflow"
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop
                    centeredSlides
                    speed={700}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 1.8,
                            spaceBetween: 18,
                        },
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {/* Map through services twice to guarantee enough elements for infinite coverflow */}
                    {[...services, ...services].map((service, index) => (
                        <SwiperSlide key={`${service.title}-${index}`}>
                            <div className="service-card">
                                <img src={service.image} alt={service.title} />

                                <div className="content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <button>Learn More →</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="nav-btn swiper-next">
                    <svg viewBox="0 0 100 100">
                        <polygon
                            points="25,3 75,3 97,50 75,97 25,97 3,50"
                            fill="#06192c"
                            stroke="#c59524"
                            strokeWidth="5"
                        />
                    </svg>

                    <span>&#10095;</span>
                </button>

            </div>
        </section>
    );
}