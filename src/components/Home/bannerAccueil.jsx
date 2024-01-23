import React from 'react';
import Banner from '../layout/commonbanner';
import homeBanner from '../../assets/images/banner_home.png';

const HomeBanner = () => {
    return(
        <Banner title='Chez vous, partout et ailleurs'
            src={homeBanner} />
    )
}

export default HomeBanner;