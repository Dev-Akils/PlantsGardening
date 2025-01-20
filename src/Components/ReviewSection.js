import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Updated import for Swiper modules
import "swiper/css";
import "swiper/css/pagination";
import reviewImage from "../assets/review-1.jpg";
import leafImage from "../assets/leaf-1.png";

function ReviewSection() {
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
      name: "John Doe",
      role: "Designer",
      image: reviewImage,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
      name: "Jane Smith",
      role: "Developer",
      image: reviewImage,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
      name: "Alice Johnson",
      role: "Manager",
      image: reviewImage,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
      name: "Alice Johnson",
      role: "Manager",
      image: reviewImage,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
      name: "Alice Johnson",
      role: "Manager",
      image: reviewImage,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
      name: "Alice Johnson",
      role: "Manager",
      image: reviewImage,
    },
  ];

  return (
    <section id="reviewsection" className="relative mb-20 md:mb-28 overflow-hidden">
      {/* Decorative Leaf */}
      <div className="absolute -top-8 -left-12 opacity-50">
        <img src={leafImage} alt="Decorative Leaf" className="w-40 md:w-52" />
      </div>

      {/* Section Title */}
      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">Customer Review</h2>
        <p className="max-w-2xl">What our customers say about us</p>
      </div>

      {/* Swiper Section */}
      <div className="container py-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6 text-white">
                <p className="font-Lobster">{review.text}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={review.image}
                    alt={`${review.name}'s review`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-yellow-500 uppercase">{review.name}</p>
                    <p>{review.role}</p>
                  </div>
                </div>
                <i className="ri-double-quotes-r text-4xl ml-auto"></i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ReviewSection;
