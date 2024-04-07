import React from 'react'
import "./Intro.css"

import Logo from "../../assets/Logo.svg"

export default function Intro() {
  return (
    <div className='intro-page__container'>
      <img className='logo' src={Logo} alt="WIITRA" />
    </div>
  )
}
