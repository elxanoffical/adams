import React from 'react'
import './ErrorPage.scss'

const ErrorPage = () => {
  return (
    <div className='errorP-c'>
        <img src="/main_img/error_img.svg" alt="" />
        <h1>Axtardığınız səhifə müvəqqəti olaraq <br /> əlçatan deyil.</h1>
        <button>Əsas səhifə</button>
    </div>
  )
}

export default ErrorPage