import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import review from "../assets/review-1.jpg";
import leaf from '../assets/leaf-1.png'


function ReviewSection() {
    const reviews = [
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
          name: "John Doe",
          role: "Designer",
          image:review,
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
          name: "Jane Smith",
          role: "Developer",
          image:review,
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
          name: "Alice Johnson",
          role: "Manager",
          image:review,
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
            name: "Alice Johnson",
            role: "Manager",
            image:review,
          },
          {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
            name: "Alice Johnson",
            role: "Manager",
            image:review,
          },
          
      ];
  return (
    <section id="review1 relative mb-20 md:mb-28 overflow-hidden">
<div className='absolute -top-8 -left-12 opacity-50'>
    <img src={leaf} alt="leaf" className='w-40 md:w-52'/>
</div>

      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">Customer Review</h2>
        <p className="max-w-2xl"> </p>
      </div>

      <div className="container">
        {/* <div className="swiper py-12">
          <ul className="swiper-wrapper">
            {[1, 2, 3].map((item, index) => (
              <li className="swiper-slide" key={index}>
                <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                  <p className="font-Lobster">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="review.png"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John Doe</p>
                    <p>Designer</p>
                  </div>
                  <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                </div>
              </li>
            ))}
          </ul>
          <div className="swiper-pagination"></div>
        </div> */}


        <div className="container py-12">
        <Swiper
         spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
       {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
              <p className="font-Lobster">{review.text}</p>
              <div className="flex items-center">
                <img src="review.png" alt="review" className="w-12 h-12 rounded-full" />
              </div>
              <div className="ml-2">
                <p className="text-yellow-500 uppercase">{review.name}</p>
                <p>{review.role}</p>
              </div>
              <i className="ri-double-quotes-r text-4xl ml-auto"></i>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
    </section>
  );
}

export default ReviewSection;
