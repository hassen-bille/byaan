import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import Header from './header';

const Home = () => {
  
  return <div>
    <Header />
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 md:px-20 flex flex-col-reverse lg:flex-row items-center justify-between mt-5">
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-xl space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Get Online <br />
          Medical Care With <br />
          <span className="bg-yellow-400 inline-block px-2">Our Best Doctors</span>
        </motion.h1>

        <p className="text-gray-600">
          Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna seddo.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Let’s Get Started
        </motion.button>

        {/* Filter/Search Bar */}
        <div className="mt-8 bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
          <select className="border p-2 rounded w-full md:w-auto">
            <option>Consultation Type</option>
          </select>
          <select className="border p-2 rounded w-full md:w-auto">
            <option>Location</option>
          </select>
          <select className="border p-2 rounded w-full md:w-auto">
            <option>Speciality</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            🔍
          </button>
        </div>
      </div>

      {/* Right Doctor Image + Stats */}
      <div className="relative">
        <motion.img 
          src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/banner_right.png" 
          alt="doctor" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[350px] mx-auto"
        />

        <motion.div 
          className="absolute top-4 left-[-20px] bg-white rounded-lg shadow px-4 py-2 text-sm"
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.5 }}
        >
          <strong>3.5k Plus</strong><br /> Satisfied Patients
        </motion.div>

        <motion.div 
          className="absolute bottom-0 right-0 bg-white rounded-lg shadow px-4 py-2 text-sm"
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.7 }}
        >
          ⭐ 4.0<br /><strong>Mark A. Wilson</strong><br />Heart Patient
        </motion.div>

        <motion.div 
          className="absolute bottom-[-30px] left-[-20px] bg-white rounded-lg shadow px-4 py-2 text-sm"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9 }}
        >
          👩‍⚕️ 200+ <br /> World’s Top Doctors
        </motion.div>
      </div>
    </section>

    <div>
      <h1 className='text-3xl font-semibold text-center pt-4'>Our Services</h1>
      <p className=' w-[1150px] pl-96 pt-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    {/* services */}
    <div className='flex gap-10 justify-center mt-7'>
      {/* 1 */}
      <div className='bg-slate-100 w-52 h-80 rounded-lg '>
        <img className='w-52 rounded-t-lg' src="https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/neurologist-2.jpg"/>
        <h1 className='pl-2 text-2xl font-semibold pt-1'>Neurology</h1>
        <p className='pl-1'>Integer tincidunt justo eu blandit dictum. Sed euismod, justo sit amet finibus iaculis, </p>
        <h1 className='text-blue-600 pl-1 pt-2'>Learn More ></h1>
      </div>
      {/* 2 */}
      <div className='bg-slate-100 w-52 h-80 rounded-lg '>
        <img className='w-52 rounded-t-lg' src="https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/cardiac-2.jpg"/>
        <h1 className='pl-2 text-2xl font-semibold pt-1'>Neurology</h1>
        <p className='pl-1'>Integer tincidunt justo eu blandit dictum. Sed euismod, justo sit amet finibus iaculis, </p>
        <h1 className='text-blue-600 pl-1 pt-2'>Learn More ></h1>
      </div>
      {/* 3 */}
      <div className='bg-slate-100 w-52 h-80 rounded-lg '>
        <img className='w-52 rounded-t-lg' src="https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/service1-2048x930-1-1200x675.jpg"/>
        <h1 className='pl-2 text-2xl font-semibold pt-1'>Neurology</h1>
        <p className='pl-1'>Integer tincidunt justo eu blandit dictum. Sed euismod, justo sit amet finibus iaculis, </p>
        <h1 className='text-blue-600 pl-1 pt-2'>Learn More ></h1>
      </div>
      {/* 4 */}
      <div className='bg-slate-100 w-52 h-80 rounded-lg '>
        <img className='w-52 rounded-t-lg' src="https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/cancer-screening-2048x1365-1-1200x675.jpg"/>
        <h1 className='pl-2 text-2xl font-semibold pt-1'>Neurology</h1>
        <p className='pl-1'>Integer tincidunt justo eu blandit dictum. Sed euismod, justo sit amet finibus iaculis, </p>
        <h1 className='text-blue-600 pl-1 pt-2'>Learn More ></h1>
      </div>
    </div>
    </div>
};

export default Home;
