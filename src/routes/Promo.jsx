import React, { useState, useEffect } from 'react';

/* import { Link} from 'react-router-dom'; */



import './styles/Promo.scss';
import SlidePromo from '../components/SliderPromo';

const Slide1 = [
    {
        id: 0,
        text: "imagen 1",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderImage/SliderImage-img-1.png",
    },
    {
        id: 1,
        text: "imagen 2",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderImage/SliderImage-img-2.png",
    },
    {
        id: 2,
        text: "imagen 3",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderImage/SliderImage-img-3.png",
    }, 
    {
        id: 3,
        text: "imagen 4",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderImage/SliderImage-img-4.png",
    },
  ];

  const Slide2 = [
    {
        id: 0,
        text: "text 1",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderText/SliderText-img-1.png",
    },
    {
        id: 1,
        text: "text 2",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderText/SliderText-img-2.png",
    },
    {
        id: 2,
        text: "text 3",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderText/SliderText-img-3.png",
    }, 
    {
        id: 3,
        text: "text 4",
        img: "https://s3.amazonaws.com/hypercarwash.com/recursos/Promocion-Hyper/SliderText/SliderText-img-4.png",
    },
  ];


const Promo = () => {
    // Crear un array de 10 elementos para mapear
    const slides = new Array(15).fill(null);


    return (
        <div className='promo-body'>
            <aside className="top-slide">
                <div className="slider">
                    <div className="slide-track">

                        {slides.map((_, index) => (
                            <div key={index} className="slide">
                                <p>
                                    Car Wash <span>¡Gratis!</span>
                                </p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </aside>

            <main className="main-content">
                <section className='title-section'>
                    <h2>    
                        Sigue estos pasos para ganar un
                    </h2>
                    <h1>
                        ¡CAR WASH GRATIS!
                    </h1>
                </section>

                <section className='slideContent-section'>
                    <aside className='slideImages-area'>
                        <SlidePromo slideList={Slide1} />
                    </aside>

                    <aside className='slideText-area'>
                        <SlidePromo slideList={Slide2} />
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default Promo;