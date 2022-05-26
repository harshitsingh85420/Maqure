import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Header/>
        <Header2/>
        <Navbar />
        <Banner/>
        <Footer/>
    </div>     
    )
}

export default Home