import React from 'react'
import Header from '../Components/Home/Header'
import Banner from '../Components/Banner/Banner'
import Slider from '../Components/Slider/Slider'

function Home() {
  return (
    <div className='container-fluid'>
     
      <Header />
      <Banner />
      <Slider />
    </div>
  )
}

export default Home
