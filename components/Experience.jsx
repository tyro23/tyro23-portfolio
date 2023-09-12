import React from "react";
import Image from "next/image";
import Link from "next/link";
import symb from "../public/assets/symb.png";
import NextJS from '../public/assets/skills/nextjs.png';
import typescript from '../public/assets/skills/type.png';
import Javascript from '../public/assets/skills/javascript.png';
const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-4">SYMB Technologies</h2>
          <h5 className="uppercase">Software Engineer Trainee</h5>
          <p className="py-1">Remote - (May, 2023 - Present)</p>
          <p className="py-2 text-gray-600">
            • Designed and developed the dashboard of the admin panel in Next.js
            , focusing on user-friendly design principles and enhancing the
            overall user experience.<br></br>• Successfully integrated APIs to
            fetch and display real-time data from the database, ensuring
            seamless data retrieval and up-to-date information for users.
            <br></br>• Currently engaged in designing and developing the UI for
            the Enterprise panel, catering to the specific needs and
            requirements of clients
          </p>
          <p className="py-2 text-gray-600">
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-3 justify-center items-center'>
              <div className='m-auto'>
                <Image src={typescript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          </div>
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={symb} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
