import * as React from "react"


import Slider from "react-slick";

export interface ImageProps {
    id: string,
    src: string,
    alt: string
}

export interface CarouselProps {
    images: ImageProps[],
}

const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
};

const Carousel = (props: CarouselProps) => (
    <Slider
        {...settings}
    >
        {props.images.map((image) =>
            <div className="wrapper" key={image.id}>
                <img
                    className="sliderImg"
                    src={image.src}
                    alt={image.alt}
                />
            </div>
        )}
    </Slider>
)

export default Carousel
