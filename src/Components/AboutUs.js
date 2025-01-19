import React from 'react'
import aboutus from '../assets/leaf-3.png';
import plant1 from '../assets/plant-1.png';
import plant2 from '../assets/plant-2.png'
function AboutUs() {
  return (
    <section id="about" className='relative overflow-hidden'>
    <div className='absolute -top-8 -right-12 opacity-50'>
    <img src={aboutus} alt="aboutus" className='w-40 md:52 xl:w-64'/>

    </div>
    <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20 '>
    <h2 className='title'>About Us</h2>
    <p className='max-w-2xl'>Follow instruction for more</p>
    </div>
    <div className='container space-y-10 xl:space-y-0 '>
        {/* item 1 */}
        <div className='flex flex-col items-center lg:flex-row gap-5'>
            {/* image */}
            <div className='w-full lg:w-1/2'>
                <img src={plant1} className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx:auto ' alt="about_image"/>

            </div>
            {/* content */}
            <div className='w-full lg:w-1/2 '> 
                <div className='space-y-5'>
                    <h3>
                    Make your <span class="text-yellow-500">organic</span>  <br/>
garden

                    </h3>
                    <p className='text-slate-300 font-Lobster'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium,
explicabo nobis quia id reprehenderit.?

                    </p>
                </div>
            </div>
        </div>


         {/* item 2 */}
         <div className='flex flex-col items-center lg:flex-row-reverse gap-5'>
            {/* image */}
            <div className='w-full lg:w-1/2'>
                <img src={plant2} className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx:auto ' alt="about_image"/>

            </div>
            {/* content */}
            <div className='w-full lg:w-1/2 '> 
                <div className='space-y-5'>
                    <h3>
                    Come with us <br/>
<span class="text-yellow-500">grow up</span> 
your plant

                    </h3>
                    <p className='text-slate-300 font-Lobster'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium,
explicabo nobis quia id reprehenderit.?

                    </p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AboutUs