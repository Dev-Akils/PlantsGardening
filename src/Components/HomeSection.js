import React from "react";
import hero from "../assets/home.png";
function HomeSection() {
  return (
    <section id="home" className="relative">
      <div className="container">
      {/* blob 1 */}
      <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">

      </div>
      {/* blob 2   (blur)*/}
      <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0">

      </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* content */}
          <div className="w-full space-y-5 lg:w-1/2">
            <h1>
              <span class="text-yellow-500">Plants</span> make a <br />
              positive
              <span class="text-yellow-500">impact</span> on <br />
              your environment
            </h1>
            <p className="text-slate-300 font-Lobster">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio fugiat eveniet, reprehenderit veritatis aut explicabo
              voluptatum ullam itaque tenetur numquam!
            </p>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xs:pt-10 ">
              <button className="btn">
                <span>Shop Now</span>
                <i class="ri-leaf-line"></i>
              </button>
              <button className="btn">
                <span>Know More</span>
                <i class="ri-leaf-line"></i>
              </button>
            </div>
            <p className="text-xs font-Lobster text-state-300">
              You will get 30-days free trail.
            </p>
            {/*social media icons */}
            <div className="flex items-center gap-5 text-lg  lg:pt-10 ">
              <i class="ri-facebook-fill text-slate-300 hover:text-yellow-500  duration-300 cursor-pointer "></i>
              <i class="ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer  text-base"></i>
              <i class="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i class="ri-linkedin-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </div>
          </div>
          {/* image */}
          <div className="w-full relative lg:w-1/2">
            <img src={hero} alt="herosecimage" />
            {/* leaf */}
            <div className="absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY">
              <i class="ri-leaf-line text-6xl text-yellow-500"></i>
            </div>
            {/* flower*/}
            <div className="absolute  bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating">
              <i class="ri-flower-line text-6xl text-yellow-500"></i>
            </div>
            {/*plant */}
            <div className="hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp">
              <i class="ri-plant-line text-6xl text-yellow-500"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
