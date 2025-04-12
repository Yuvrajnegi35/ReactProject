import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <img src="img2.jpg" alt="" className='p-24 pt-14 pb-10 ' />
         <p className='pt-0 text-center text-3xl m-4 font-bold tracking-tight  dark:text-white'>Flower</p>
        </div>
    );
}