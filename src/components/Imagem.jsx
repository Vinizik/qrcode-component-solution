import React from 'react'

import QRCode from '../assets/image-qr-code.png';

function Imagem() {
  return (
    <div className="image">
      <img src={QRCode} alt="qrcode-image"></img>
    </div>
  )
}

export default Imagem
