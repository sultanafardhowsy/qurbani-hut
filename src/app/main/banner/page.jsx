// // 
// import Image from 'next/image';
// import React from 'react';
// import banner from '@/assets/qurbanir_hut.jpg';
// import Marquee from 'react-fast-marquee';
// import 'animate.css';
// import Link from 'next/link';

// const BannerPage = () => {
//   return (
//     <div className="mt-6 sm:mt-10">

//       {/* Animated Heading */}
//       <h2 className="animate__animated animate__pulse animate__infinite text-4xl font-bold text-[#C9A227] text-center mb-4">
//         Eid-ul-Adha Mubarak
//       </h2>

//       {/* Banner Section */}
//       <div className="relative container mx-auto">

//         {/* Banner Image */}
//         <Image
//           src={banner}
//           alt="Banner Image"
//           className="w-full h-auto rounded-lg object-cover"
//         />
        



//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

//         {/* Button + Text Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-80">

//           <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
//             Premium Qurbani Animals
//           </h1>

//           <p className="text-white text-sm sm:text-base md:text-lg mb-6 max-w-2xl">
//             Discover healthy cows, goats, sheep, and camels for Eid-ul-Adha.
//           </p>

//           {/* Button */}
//           <Link
//             href="/all-animals"
//             className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 sm:px-8 py-3 rounded-lg font-bold shadow-lg text-sm sm:text-base"
//           >
//             Explore Animals
//           </Link>

//         </div>
//       </div>

//       {/* Marquee */}
//       <Marquee speed={50} gradient={false}>
//         <p className="text-xl font-bold mx-8 mt-4">
//           🐄 Buy Healthy Cows 🐐 Premium Goats 🐑 Fresh Sheep 🐪 Best Livestock Deals
//         </p>
//       </Marquee>

//     </div>
//   );
// };

// export default BannerPage;
import Image from 'next/image';
import React from 'react';
import banner from '@/assets/qurbanir_hut.jpg';
import Marquee from 'react-fast-marquee';
import 'animate.css';
import Link from 'next/link';

const BannerPage = () => {
  return (
    <div className="mt-6 sm:mt-10">

      {/* Animated Heading */}
      <h2 className="animate__animated animate__pulse animate__infinite text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9A227] text-center mb-4">
        Eid-ul-Adha Mubarak
      </h2>

      {/* Banner Section */}
      <div className="relative container mx-auto px-2 sm:px-4">

        {/* Banner Image */}
        <Image
          src={banner}
          alt="Banner Image"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          <h1 className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            Premium Qurbani Animals
          </h1>

          <p className="text-white text-xs sm:text-sm md:text-lg mb-4 sm:mb-6 max-w-xl">
            Discover healthy cows, goats, sheep, and camels for Eid-ul-Adha.
          </p>

          <Link
            href="/all-animals"
            className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold shadow-lg text-xs sm:text-sm md:text-base"
          >
            Explore Animals
          </Link>
         

{/* <button
  onClick={() => router.push("/all-animals")}
  className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold shadow-lg text-xs sm:text-sm md:text-base"
>
  Explore Animals
</button> */}

        </div>
      </div>

      {/* Marquee */}
      <Marquee speed={40} gradient={false}>
        <p className="text-sm sm:text-lg md:text-xl font-bold mx-4 sm:mx-8 mt-4">
          🐄 Buy Healthy Cows 🐐 Premium Goats 🐑 Fresh Sheep 🐪 Best Livestock Deals
        </p>
      </Marquee>

    </div>
  );
};

export default BannerPage;