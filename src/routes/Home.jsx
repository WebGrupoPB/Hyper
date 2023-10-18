import React, { useState, useEffect } from 'react';
import Popup from '../components/AnuncioPopup';
import Maps from '../components/Maps';

/* import { Link} from 'react-router-dom'; */



import './styles/Home.css';


import pointer from "../assets/icons/pointer-acordion.png"
import facebookIcon from "../assets/icons/Facebook Circled.png"
import instagramIcon from "../assets/icons/Instagram Circle.png"
import linkedinIcon from "../assets/icons/LinkedIn.png"


const facebookPageHyperUrl = 'https://www.facebook.com/carwashyper';

const facebookWidth =   window.innerWidth > 1999 ? "500" : 
                        window.innerWidth > 1400 ? "300" : 
                        window.innerWidth > 1000 ? "260" : 
                        window.innerWidth > 950 ? "230" :
                        window.innerWidth > 600 ? "200" :
                        window.innerWidth > 320 ? "200" : "200";

const facebookHeight =  window.innerWidth > 1999 ? "800" : 
                        window.innerWidth > 1440 ? "550" : 
                        window.innerWidth > 1024 ? "500" : 
                        window.innerWidth > 950 ? "400" :
                        window.innerWidth > 600 ? "400" :
                        window.innerWidth > 320 ? "400" : "400";



const Home = () => {

    const [showContent1, setShowContent1] = useState(true);
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
 

   const [showPopup1, setShowPopup1] = useState(false);
    // Función para mostrar el Popup con num = 1
  const showPopupOnClick = () => {
    setShowPopup1(true);
  };

   // Función para cerrar el Popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setShowPopup1(false);
  };

  const [isPulsating, setIsPulsating] = useState(false);

  // Función para alternar la animación
  const togglePulsating = () => {
    setIsPulsating((prevState) => !prevState);
  };

  useEffect(() => {
    const interval = setInterval(togglePulsating, 2000); // Cambia cada 2 segundos

    // Limpia el interval cuando el componente se desmonta
    return () => {
      clearInterval(interval);
    };
  }, []);



    return(
        <div className='principal'>
            {/* Mostrar el Popup si showPopup es verdadero */}
            {/* {showPopup && (
            <Popup handleClosePopup={handleClosePopup} num={0}/>
            )} */}

            {showPopup1 && (
            <Popup handleClosePopup={handleClosePopup} num={1}/>
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
                                    <Maps 
                                        showContent1={showContent1}
                                        showContent2={showContent2}
                                        showContent3={showContent3}                                   
                                    />
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
                                          
                                        <div className={`acordion-content1 ${showContent1 ? 'open' : ''}`} >
                                            <p>
                                                Calzada Atanasio Tzul
                                                20-40, Zona 12
                                            </p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className='acordion-card'>
                                        <div className='acordion-item' onClick={() => toggleContent(2)}>
                                            <h2>Villa Hermosa</h2>
                                            <div className='flecha-pointer'>
                                                <img src={pointer} alt="pointer" />
                                            </div>
                                        </div>

                                        
                                        <div className={`acordion-content2 ${showContent2 ? 'open' : ''}`}>
                                            <p>
                                                23 Calle 20-90 zona 7, Villa Hermosa, San Miguel Petapa
                                            </p>
                                        </div>
                                        
                                    </div>

                                    <div className='acordion-card'>
                                        <div className='acordion-item' onClick={() => toggleContent(3)}>
                                            <h2>Mulua</h2>
                                            <div className='flecha-pointer'>
                                                <img src={pointer} alt="pointer" />
                                            </div>
                                        </div>

                                        
                                        <div className={`acordion-content3 ${showContent3 ? 'open' : ''}`}>
                                            <p>
                                                Km. 179.5 Santa Cruz Muluá, Retalhuleu
                                            </p>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                <section className='price-section' id='precios'>
                    <h1>Precios</h1>   

                    <div className='content'>
                        <div 
                            className='fondo-content'
                            onClick={showPopupOnClick}   
                        ></div>

                        <div 
                            className={`precios-content ${isPulsating ? 'pulsate' : ''}`}
                            onClick={showPopupOnClick}
                        ></div>
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
                            
                    

                            <div
                                key="uniqueKey"
                                className="fb-page"
                                data-href={facebookPageHyperUrl}
                                data-tabs="timeline"
                                /* data-width={"800px"}
                                data-height={"900px"} */
                                data-width={facebookWidth + "px"}
                                data-height={facebookHeight + "px"}
                                data-small-header="true"
                                data-adapt-container-width="false"
                                data-hide-cover="false"
                                data-show-facepile="false"
                                >
                                <blockquote cite={facebookPageHyperUrl} className="fb-xfbml-parse-ignore">
                                    <a href={facebookPageHyperUrl}>Hyper Car Wash</a>
                                </blockquote>
                            </div>


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