import React from 'react'

function ServicesSection() {
  return (
    <section id="service">
    <div className='bg-white text-green-900 py-20'>
        <div className='container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
           {/* cart 1 */}
            <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-truck-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                <p className='md:text-lg font-bold'>
                    Fast <br/>Delivery
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p>
            </div>

            {/* cart 2 */}
            <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-customer-service-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                <p className='md:text-lg font-bold'>
                    Great Customer <br/>Service
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p>
            </div>

            {/* cart 3 */}
            <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-plant-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                <p className='md:text-lg font-bold'>
                    Original <br/>Plants
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p>
            </div>
            {/* cart 4 */}
            <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-money-dollar-circle-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                <p className='md:text-lg font-bold'>
                    Affordable<br/>Price
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p>
            </div>
            
        </div>
    </div></section>
  )
}

export default ServicesSection