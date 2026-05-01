import Image from 'next/image';
import React from 'react';
import banner from '@/assets/qurbanir_hut.jpg'
import Marquee from 'react-fast-marquee';
import 'animate.css';

const BannerPage = () => {
    return (
        <div className="mt-10">
             <h2 className="animate__animated animate__pulse animate__infinite  text-4xl font-bold text-[#C9A227] text-center mb-4">
  Eid-ul-Adha Mubarak
</h2>
      <Image
        src={banner}
        alt="Banner Image"
        className='container mx-auto'
      />
       <Marquee speed={50} gradient={false}>
      <p className="text-xl font-bold mx-8">
        🐄 Buy Healthy Cows 🐐 Premium Goats 🐑 Fresh Sheep 🐪 Best Livestock Deals
      </p>
    </Marquee>
      
    </div>
    );
};

export default BannerPage;