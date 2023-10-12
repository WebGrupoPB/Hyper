import React, { useState } from 'react';

import './styles/AnuncioPopup.css'


import logOutBtnIcon from "../assets/icons/logout-btn.svg"


const Popup = ({ handleClosePopup }) => {
  
    return (

          <div className='addSpace' onClick={handleClosePopup}>
            <div className='popUpAdd'>
              <img src="https://s3.amazonaws.com/hypercarwash.com/recursos/promo.jpeg" alt="imagen-anuncio" />

              <div className='closeSpace' onClick={handleClosePopup}>
                <img src={logOutBtnIcon} alt="logout-icon" />
              </div>
            </div>
          </div>

    );
  };

export default Popup;