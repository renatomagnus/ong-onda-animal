import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const slides = [
    {
      image: '/images/slider-1.jpg',
      title: 'Nota Fiscal Gaúcha',
      text: 'Agora você pode indicar a ONDA no programa da nota fiscal gaúcha.',
      color: '#53BCB8',
    },
    {
      image: '/images/slider-2.jpg',
      title: 'Queria ter um animal mas fico fora o dia todo',
      text: 'Você pode adotar um PET por um final de semana',
      color: '#fff',
    },
  ];

  const buttons = [
    { label: 'Saiba mais' },
    { label: 'Quero ser um padrinho' },
  ];

  return (
    <Slider {...sliderSettings} className="hero-slider">
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-content">
              <h2 style={{ color: slide.color }}>{slide.title}</h2>
              <p style={{ color: slide.color }}>{slide.text}</p>
              {currentSlide % 2 === 0 ? (
                <button
                  className="hero-button1"
                >
                  {buttons[0].label}
                </button>
              ) : (
                <button
                  className="hero-button2"
                >
                  {buttons[1].label}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;