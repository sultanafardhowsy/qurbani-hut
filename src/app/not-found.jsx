import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col'>
              <span className='text-7xl'>🌙</span>
          <h2 className='text-5xl font-bold text-[#C9A227] gap-4'>This page is not found</h2>  
          <Link href={'/'}>
          <button className='bg-[#C9A227] text-black font-bold mt-4 px-2 py-2'>Go back to home</button>
          </Link>
        </div>
    );
};

export default NotFound;