import React, { useState, useEffect } from 'react';
import Popup from '../components/AnuncioPopup';

/* import { Link} from 'react-router-dom'; */



import './styles/Home.css';


import pointer from "../assets/icons/pointer-acordion.png"
import facebookIcon from "../assets/icons/Facebook Circled.png"
import instagramIcon from "../assets/icons/Instagram Circle.png"
import linkedinIcon from "../assets/icons/LinkedIn.png"

  

const Home = () => {

    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);

    const toggleContent = (contentNumber) => {
        if (contentNumber === 1) {
          setShowContent1(!showContent1);
          setShowContent2(false); // Para ocultar otros contenidos si se hace clic
          setShowContent3(false);
        } else if (contentNumber === 2) {
          setShowContent2(!showContent2);
          setShowContent1(false); // Para ocultar otros contenidos si se hace clic
          setShowContent3(false);
        } else if (contentNumber === 3) {
          setShowContent3(!showContent3);
          setShowContent1(false); // Para ocultar otros contenidos si se hace clic
          setShowContent2(false);
        }
      };


      // Estado para controlar la visibilidad del Popup
   const [showPopup, setShowPopup] = useState(false);

   // Efecto para mostrar el Popup después de 5 segundos
   useEffect(() => {
     const popupTimer = setTimeout(() => {
       setShowPopup(true);
     }, 5000); // 5000 milisegundos (5 segundos)
 
     // Limpieza del temporizador cuando se desmonta el componente
     return () => {
       clearTimeout(popupTimer);
     };
   }, []); // El segundo argumento, un array vacío, asegura que el efecto solo se ejecute una vez al montar el componente.
 
   // Función para cerrar el Popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };



    return(
        <div className='principal'>
            {/* Mostrar el Popup si showPopup es verdadero */}
            {showPopup && (
            <Popup handleClosePopup={handleClosePopup} />
            )}

            <header className='side-bar'>
                <div className='sidebar-space'>
                    <div className='sidebar-logo'>
                        <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/sidebar-logo.png" alt="logo-hyper" />
                    </div>
                    

                    <div className='sidebar-menu'>
                        <a href="#">Inicio</a>
                        <a href="#ventajas">Ventajas</a>
                        <a href="#ubicaciones">Ubicaciones</a>
                        <a href="#precios">Precios</a>
                        <a href="#contacto">Contacto</a>
                    </div>
                </div>
                
            </header>

            <main className='main-body'>
                <section className='banner-1'></section>
                
                <section className='ventajas-section' id='ventajas'>
                    <h1>Ventajas</h1>

                    <div className='ventajas-space'>
                        <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/ventaja-1.png" alt="ventaja-1" />
                        <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/ventaja-2.png" alt="ventaja-2" />
                        <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/ventaja-3.png" alt="ventaja-3" />
                    </div>

                </section>

                <section className='ubicaciones-section' id='ubicaciones'>
                    <h1>Ubicaciones</h1>

                    <aside className='ubicaciones-space'>
                        <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/ubicaciones-hyperlogo.png" alt="hyper-logo" />

                        <div className='ubicaciones-hyper'>
                            <div className='map-ubi-space'>
                                <h2>Guatemala</h2>
                                <div className='map-ubi'>

                                </div>
                            </div>

                            <div className='acordion-ubi-space'>
                                <div className='acordion-body'>
                                    <div className='acordion-card'>
                                        <div className='acordion-item' onClick={() => toggleContent(1)}>
                                            <h2>Atanasio Tzul</h2>
                                            <div className='flecha-pointer'>
                                                <img src={pointer} alt="pointer" />
                                            </div>
                                        </div>

                                        {showContent1 && (
                                            <div className='acordion-content1'>
                                                <p>
                                                    Calzada Atanasio Tzul
                                                    20-40, Zona 12
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className='acordion-card'>
                                        <div className='acordion-item' onClick={() => toggleContent(2)}>
                                            <h2>Villa Hermosa</h2>
                                            <div className='flecha-pointer'>
                                                <img src={pointer} alt="pointer" />
                                            </div>
                                        </div>

                                        {showContent2 && (
                                            <div className='acordion-content2'>
                                                <p>
                                                    Calzada Atanasio Tzul
                                                    20-40, Zona 12
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className='acordion-card'>
                                        <div className='acordion-item' onClick={() => toggleContent(3)}>
                                            <h2>Mulua</h2>
                                            <div className='flecha-pointer'>
                                                <img src={pointer} alt="pointer" />
                                            </div>
                                        </div>

                                        {showContent3 && (
                                            <div className='acordion-content3'>
                                                <p>
                                                    Calzada Atanasio Tzul
                                                    20-40, Zona 12
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                <section className='price-section' id='precios'>
                    <h1>Precios</h1>   

                    <div className='content'>
                        <div className='fondo-content'></div>
                        <div className='precios-content'></div>
                    </div>                         
                </section>

                <section className='anuncio-section'>
                    <div className='arbusto-fondo'>
                        <div className='difuminado-fondo'>
                            <h1>
                                ¿COMO AYUDAMOS AL PLANETA?
                            </h1>

                            <div className='anuncios-space'>
                                <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/anuncio-img-1.png" alt="" />
                                <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/anuncio-img-2.png" alt="" />
                                <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/anuncio-img-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='contacto-section' id='contacto'>
                    <div className='contacto-area'>
                        <aside className='contactanos-space'>
                            <div className='contactonos-div'>
                                <div className='contact-title-space'>
                                    <h1>Contactanos</h1>
                                </div>

                                <div className='contact-form-space'>
                                    <form className='formDiv' action="">
                                        <input name='name' type="text" placeholder='nombre' />
                                        <input name='email' type='email' placeholder='correo' />
                                        <textarea name="message" id="" cols="30" rows="10" placeholder=' mensaje'></textarea>
                                        <button type='submit'>Enviar</button>
                                    </form>
                                </div>
                            </div>       
                        </aside>

                        <aside className='facebook-space'>
                            <div>
                                <h1>Facebook</h1>
                            </div>
                            

                            <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/facebook-screenshot.png" alt="" />
                        </aside>
                    </div>
                    
                </section>
            </main>

            <footer className='footer-section'>

                <div className='social-media-space'>
                    <h3>Redes Sociales</h3>
                    <div>
                        <a href="https://www.facebook.com/carwashyper" target='__blank' ><img src={facebookIcon} alt="facebook" /></a>
                        <a href="https://www.instagram.com/hyper_carwash/" target='__blank'><img src={instagramIcon} alt="instagram" /></a>
                        <a href="#contacto" target='__blank' ><img src={linkedinIcon} alt="linkedin" /></a>
                    </div>
                </div>

                <p>
                    Todos los derechos reservados ©Hyper Car Wash, 2023
                </p>
            </footer>
        </div>
    )

}

export default Home;