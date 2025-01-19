import React from "react";
import cart1 from "../assets/cart-1.png";
import cart2 from '../assets/cart-2.png';
import cart3 from '../assets/cart-3.png';
import cart4 from '../assets/cart-4.png';
function PopularSection() {
  return (
    <section id="popular" className="bg-green-900">
      <div className="flex flex-col items-center gap-3 text-center mb-40 md:mb-28">
        <h2 className="title">Your Choice Plant</h2>
        <p className=" max-w-2xl">Follow instruction for more</p>
      </div>
      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* card 1*/}
        <div className=" popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={cart1}
            alt="cart1"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
          <p className="italic">Nephrolepis exaltata</p>
          <h3>Boston Fern</h3>

          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div>
        </div>
        {/* card 1*/}

        <div className=" popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={cart2}
            alt="cart1"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
          <p className="italic">Nephrolepis exaltata</p>
          <h3>Boston Fern</h3>

          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div>
        </div>
        {/* card 1*/}
        <div className=" popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={cart3}
            alt="cart1"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
          <p className="italic">Nephrolepis exaltata</p>
          <h3>Boston Fern</h3>

          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div>
        </div>
        {/* card 1*/}
        <div className=" popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={cart4}
            alt="cart1"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
          <p className="italic">Nephrolepis exaltata</p>
          <h3>Boston Fern</h3>

          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default PopularSection;
