import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../../pages/About';
import NoMatch from '../../pages/Error';
import Home from '../../pages/Home';
import Housing from '../../pages/Housing';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                {/* <Route exact path="/about" element={<About />} />
                <Route exact path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<NoMatch />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;