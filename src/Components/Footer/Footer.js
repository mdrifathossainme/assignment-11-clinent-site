import React, { useState } from 'react';
import './Footer.css'
import logo from '../../asscets/logo.png'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit';
import {facebook} from 'react-icons-kit/fa/facebook'
import {twitter} from 'react-icons-kit/fa/twitter'
import {pinterest} from 'react-icons-kit/fa/pinterest'
import {instagram} from 'react-icons-kit/fa/instagram'
import {vimeo} from 'react-icons-kit/icomoon/vimeo'

const Footer = () => {
    const handlesubmite=(e)=>{
        e.preventDefault();
        e.target.reset()
    }
    return (

     <>
        <div className="div">
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header closebtn">
              <h4 class="modal-title modalText" id="exampleModalLabel ">Thank For Subscribe</h4>
              <button type="button" class="btn-close closebtn" id='button' data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
           
            <div class="modal-footer mfooter">
             
            </div>
          </div>
        </div>
      </div>
          </div>
             <footer>
                 <div className="container">
                     <div className="footer-container">
                     <div className="footer-left">
                      <Link to="/" >   <img  className='flogo' src={logo} alt="" /></Link>
                         <div className="service-area mt-4">
                             <img  src={'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/icon_support_fcadf543-715b-4691-bc37-e84e8d86db44_150x.png?v=1602304042'} alt="" />
                             <span className='customer'>
                             <p>Call Customer Services, We Support 24/7</p>
                             <p>+088 01729 55 29 66</p>
                             </span>
                         </div>
                         <div className="service-area mt-4">
                             <img  src={'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/icon_address_72a0c2b4-2a7d-4628-a74a-d3ed45e9753b_150x.png?v=1602304054'} alt="" />
                             <span className='adddress' >
                             <p >Address :</p>
                             <p>PO Box 1622 Vissaosang Street West</p>
                             </span>
                         </div>
                     </div>
                     <div className="footer-center">
                      <h4>CUSTOMER SERVICE</h4>
                      <div className="footer-link">
                        <span>  <p><Link className='link'  to='/'>Contact us</Link></p>
                          <p><Link className='link'  to='/'>Help and advice</Link></p>
                          <p><Link className='link'  to='/'>Shipping & Returns</Link></p></span>
                          <span>
                          <p><Link className='link'  to='/'>Terms and conditions</Link></p>
                          <p><Link className='link'  to='/'>Refund Policy</Link></p></span>
                      </div>
            
                     </div>
                     <div className="footer-right">
                         <h4>NEWSLETTER</h4>
                         <div className="subcrice-form">
                            <form onSubmit={handlesubmite}>
                            <input type="email" name="email" placeholder='enter your email' required />
                             <input data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" value="Subscribe" />
             
                            </form>
                         </div>
                         <div className="social-icon">
                           <a href="https://www.facebook.com/mdrifathossain.me" target="_black" > <p><Icon size={20} icon={facebook} /></p> </a>
      
                          <a href="https://www.instagram.com/mdrifathossain.me/" target="_black" ><p><Icon size={20} icon={instagram} /></p></a>
                          <a href="https://twitter.com/md_rifathossain" target="_black" ><p><Icon size={20} icon={twitter} /></p></a>
      
                          <a href="https://twitter.com/md_rifathossain" target="_black" > <p><Icon size={20} icon={pinterest} /></p></a>
                          <a href="https://twitter.com/md_rifathossain" target="_black" >                    <p><Icon size={20} icon={vimeo} /></p></a>   
                         </div>
                     </div>
                     </div>
                     
                 </div>
                 <div className="copyrgifht">
                         <hr />
                  <div className="container bottom-footer">
                  <div className="copy">
                  <p>Copyright &copy; {(new Date().getFullYear())} AAMADAT</p>
                  </div>
                  <div className="payment">
                      <img src={'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/payment-footer_3cd5e244-331d-4433-ac29-eb0f0c257a18_300x.png?v=1601623316'} alt="" />
                  </div>
                  </div>
      
                     </div>
             </footer>
     </>
    );
};

export default Footer;