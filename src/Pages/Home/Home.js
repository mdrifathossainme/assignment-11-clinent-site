import React from 'react';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import Categorices from '../../Components/Categorices/Categorices';
import Testimonial from '../../Components/Testimonial/Testimonial';
import UseProducts from '../../Hooks/UseProducts';
import SinglePage from '../SinglePage/SinglePage';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel'
import './Home.css'
import AllCategotices from '../../Components/AllCategotices/AllCategotices';
const Home = () => {
const [products]=UseProducts([])
return (
<>
<HomeBanner/>
<div className="container">
    <div className="categorices">
        <Categorices/>
    </div>
    <div>
        <h2>Inventory Item</h2>
        <div className='dflex'>
            <div className="divider"></div>
        </div>
        <div className="product">
            {
            products.map(product=>
            <SinglePage key={product._id} product={product}/>
            )
            }
        </div>
        <div className="more-btn">
            <button className='view-btn'>Viwe More Product</button>
        </div>
    </div>
    <div className="testimonial">
        <h2>Testimonial</h2>
        <div className='dflex'>
            <div className="divider"></div>
        </div>
        <Testimonial/>
    </div>
    <div className="AllCategorice mt-2">
        <h2 >All Cetogorice</h2>
        <div className='dflex mb-5'>
            <div className="divider"></div>
        </div>
        <AllCategotices/>
    </div>
    <div className='mt-5 pb-5'>
        <h2 >Our Brand</h2>
        <div className='dflex'>
            <div className="divider"></div>
        </div>
        <BrandCarousel/>
    </div>
</div>
</>
);
};
export default Home;