import React, { useState } from 'react';

import './styles/AnuncioPopup.css'


import logOutBtnIcon from "../assets/icons/logout-btn.svg"


const Popup = ({ handleClosePopup, num }) => {
  let imageUrl = '';

  // Establecer la URL de la imagen según el valor de 'num'
  if (num === 0) {
    imageUrl = 'https://s3.amazonaws.com/hypercarwash.com/recursos/promo.jpeg';
  } else if (num === 1) {
    imageUrl = 'https://s3.amazonaws.com/hypercarwash.com/recursos/precios-info.png';
  }

  
    return (

          <div className='addSpace' onClick={handleClosePopup}>
            <div className='popUpAdd'>
              <img src={imageUrl} alt="imagen-anuncio" />

              <div className='closeSpace' onClick={handleClosePopup}>
                <img src={logOutBtnIcon} alt="logout-icon" />
              </div>
            </div>
          </div>

    );
  };

export default Popup;