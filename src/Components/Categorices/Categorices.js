import React from 'react';
import './Categorices.css'
const Categorices = () => {
    return (
        <div className='container categorice-item'>
        <div className="caregorice-box">
           <div className="title">
              <h4>ELECTRONIC</h4>
              <p>VIEW ALL CATEGORIES</p>
           </div>
           <div className="imgbox-1 d-flex ">
              <div className="img">
                 <img  src={`https://i.ibb.co/TKRX3sN/photo-1.webp`} alt="" />
                 <p>Air Conditioner</p>
              </div>
              <div className="img">
                 <img src={`https://i.ibb.co/svszYdp/Colection-2-60c66f45-d04e-4a59-b0e1-535614501fac-1920x.webp`} alt="" />
                 <p>Microwave</p>
              </div>
           </div>
           <div className="imgbox-1 d-flex">
              <div className="img">
                 <img src={`https://i.ibb.co/qrz8W5J/photo-2.webp`} alt="" />
                 <p>Washing Machine</p>
              </div>
              <div className="img">
                 <img src={`https://i.ibb.co/Ln3BVn9/photo-3.webp`} alt="" />
                 <p> Juice Blender</p>
              </div>
           </div>
        </div>
        <div className="caregorice-box ">
           <div className="title">
              <h4>COMPUTER</h4>
              <p>VIEW ALL CATEGORIES</p>
           </div>
           <div className="imgbox-1 d-flex">
              <div className="img">
                 <img src={`https://i.ibb.co/k3NQN8z/Colection-5-ded4e4fb-d441-442e-8401-2e8909b51d90-1920x-1.webp`} alt="" />
                 <p>Top 10 Laptop For Designer</p>
              </div>
           </div>
           <div className="imgbox-1 d-flex">
              <div className="img">
                 <img src={`https://i.ibb.co/F3rXVSs/photo-4.webp`} alt="" />
                 <p>Best Mouse</p>
              </div>
              <div className="img">
                 <img src={`https://i.ibb.co/jRGvVS9/photo-5.webp`} alt="" />   
                 <p>Full HD Monitor</p>
              </div>
           </div>
        </div>
        <div className="caregorice-box">
           <div className="title">
              <h4>AUDIO</h4>
              <p>VIEW ALL CATEGORIES</p>
           </div>
           <div className="imgbox-1 d-flex">
              <div className="img">
                 <img  src={`https://i.ibb.co/rbVqsC7/Colection-8-ebadef87-550c-43f8-b44f-46ce88b7a9a3-1920x.webp`} alt="" />  
                 <p>Headphone</p>
              </div>
              <div className="img">
                 <img src={`https://i.ibb.co/3FRcCdc/photo-7.webp`} alt="" /> 
                 <p>Computer Speaker</p>
              </div>
           </div>
           <div className="imgbox-1 d-flex">
              <div className="img">
                 <img src={`https://i.ibb.co/rGc5NdH/photo-9.webp`} alt="" />
                 <p>Portable Speaker</p>
              </div>
              <div className="img">
                 <img src={`https://i.ibb.co/PZxXK5v/photo-8.webp`} alt="" />
                 <p>Smart Speaker</p>
              </div>
           </div>
        </div>
     </div>
    );
};

export default Categorices;