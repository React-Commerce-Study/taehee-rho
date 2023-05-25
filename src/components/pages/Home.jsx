import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import EventBanner from '../common/EventBanner'
import Product from '../common/Product'
import styled from 'styled-components'


function Home() {
    return(
        <>
            <Header />
            <EventBanner />
            <Product />
            <Footer />
        </>
    )
}


export default Home;