import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Categories from '../components/Categories'
import Why from '../components/Why'

const Home = () => {
  return (
    <div>
        <Header2/>
        <Banner/>
        <Why/>
        <Categories/>
        <Footer/>
    </div>     
    )
}

export default Home