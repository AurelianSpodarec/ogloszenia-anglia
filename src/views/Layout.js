import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './../components/Header'
import Footer from './../components/Footer'

import Categories from './../components/Categories'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Layout extends React.Component {

    render() {
        return (
            <>

                <BrowserRouter>
                    <Header />

                    <Categories />


                    {/* Children */}


                    <Footer />
                </BrowserRouter>


            </>
        )
    }
}

export default Layout;