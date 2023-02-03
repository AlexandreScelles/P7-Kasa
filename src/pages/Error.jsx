import React from 'react';
import Header from "../components/Layout/Header"
import NoMatchContent from "../components/Error/NoMatch";
import Footer from "../components/Layout/Footer"

const NoMatch = () => {
    return(
        <>
            <Header />
            <NoMatchContent />
            <Footer />
        </>
    )
}

export default NoMatch;