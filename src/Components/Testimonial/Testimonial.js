import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,Pagination } from "swiper";
import './Testimonial.css'
const Testimonial = () => {
    return (
        <>
        <Swiper
          slidesPerView={window.innerWidth<1000? 1:2}
          spaceBetween={30}
        // breakpoints: {
            
        //     320: {
        //       slidesPerView: 2,
        //       spaceBetween: 20
        //     },
        //     // when window width is >= 480px
        //     480: {
        //       slidesPerView: 3,
        //       spaceBetween: 30
        //     },
        //     // when window width is >= 640px
        //     640: {
        //       slidesPerView: 4,
        //       spaceBetween: 40
        //     }
        //   },
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay ,Pagination]}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
           <SwiperSlide>
               <div className="testimonial-item">
                   <div className="testimonial-right">
                       <img src={'https://i.ibb.co/28dTM50/261880983-653550162718303-7188586080518399796-n.jpg'} alt="" />
                   </div>
                   <div className="testimonial-left">
                       <h4>MD RIFAT HOSSAIN</h4>
                     
                       <div className="reviwe-img d-flex">
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       <p>12/08/2022</p> 
                       </div>
                       <p>It’s basic, but you can’t expect something you don’t ask for. More often than not, happy customers are willing to share their good experiences with a review. </p>
                   </div>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="testimonial-item">
                   <div className="testimonial-right">
                       <img src={'https://i.ibb.co/4N8HF1n/photo-1438761681033-6461ffad8d80.jpg'} alt="" />
                   </div>
                   <div className="testimonial-left">
                       <h4>Alisha Han</h4>
                     
                       <div className="reviwe-img d-flex">
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       <p>01/03/2022</p> 
                       </div>
                       <p>In addition to simply doing the asking, consider your approach to soliciting reviews. Vague questions will likely warrant vague answers, so make sure to customize your feedback </p>
                   </div>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="testimonial-item">
                   <div className="testimonial-right">
                       <img src={'https://i.ibb.co/wyQg6rs/images.jpg'} alt="" />
                   </div>
                   <div className="testimonial-left">
                       <h4>Koituri Begom</h4>
                     
                       <div className="reviwe-img d-flex">
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       <p>09/02/2022</p> 
                       </div>
                       <p>As we mentioned, the best reviews feature engagement from your business, responding to their comments, questions, and concerns. It’s not just good business </p>
                   </div>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="testimonial-item">
                   <div className="testimonial-right">
                       <img src={'https://i.ibb.co/HtsP52z/images-1.jpg'} alt="" />
                   </div>
                   <div className="testimonial-left">
                       <h4>Kala Chan</h4>
                     
                       <div className="reviwe-img d-flex">
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       <p>23/06/2023</p> 
                       </div>
                       <p>We already emphasized that good reviews typically identify strong customer service principles that your business demonstrates, so to warrant these gold-star reviews, </p>
                   </div>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="testimonial-item">
                   <div className="testimonial-right">
                       <img src={'https://i.ibb.co/G3VYNsv/images-2.jpg'} alt="" />
                   </div>
                   <div className="testimonial-left">
                       <h4>Lal Chan</h4>
                     
                       <div className="reviwe-img d-flex">
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       <p>17/06/2022</p> 
                       </div>
                       <p>Consider this the all-encompassing principle of how to invite good reviews for your business. In whatever field or industry your business operates, seek to distinguish your brand </p>
                   </div>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="testimonial-item">
                   <div className="testimonial-right">
                       <img src={'https://i.ibb.co/DYTTSr3/images-4.jpg'} alt="" />
                   </div>
                   <div className="testimonial-left">
                       <h4>Kuddus Boiyati</h4>
                     
                       <div className="reviwe-img d-flex">
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                           <img src={'https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'} alt="" />
                       <p>09/02/2012</p> 
                       </div>
                       <p>For your business to grow, it needs good reviews. That much is clear. But don’t leave your ratings—or your online reputation—to chance. Knowing what makes a good customer review,  </p>
                   </div>
               </div>
           </SwiperSlide>
           
        </Swiper>
          </>
    );
};

export default Testimonial;