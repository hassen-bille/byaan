import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import Header from './header';

const AboutSection = () => {
  return <div>
     <Header />
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Side: Images & Cards */}
      <div className="relative grid grid-cols-2 gap-4 max-w-lg">
        <motion.img
          src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/about_1.png"
          alt="Dentist"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl shadow-md"
        />

        <motion.img
          src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/about_1.png"
          alt="Dentist"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="rounded-xl shadow-md"
        />

        {/* Doctor Tag */}
        <motion.div 
          className="absolute top-10 left-10 bg-white shadow px-4 py-2 rounded-xl"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7 }}
        >
          <strong>3.5k Plus</strong><br /> Satisfied Patients
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-0 bg-white shadow px-4 py-2 rounded-xl"
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.9 }}
        >
          ⭐ 4.0<br /><strong>Mark A. Wilson</strong><br />Heart Patient
        </motion.div>

        <motion.div 
          className="absolute top-2 right-6 bg-white shadow px-4 py-2 rounded-xl"
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 1 }}
        >
          👩‍⚕️ Lily A. Wilson<br /> Senior Cardiologist
        </motion.div>

        <motion.div 
          className="absolute bottom-[-30px] right-6 bg-purple-500 text-white shadow px-4 py-3 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.1 }}
        >
          200 Plus<br /> World’s Top Doctors Consultation
        </motion.div>
      </div>

      {/* Right Side: Content */}
      <motion.div 
        className="max-w-xl space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h4 
          className="text-blue-600 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Us
        </motion.h4>

        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Consult A Doctor Anytime,<br /> Anywhere By Search
        </motion.h2>

        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Get latest news in your inbox. Consectetur adipiscing elitadipiscing elits eddo eiusmod tempor incididunt utlaboree edolore magnased do eiusmod tempor incididunt ut laboreet dolore magna aliqua.
        </motion.p>

        <motion.ul 
          className="space-y-2 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <li className="flex items-start gap-2 text-gray-700"><span className="text-green-500">✔</span> Get latest news in your inbox. Consectetur elitadipiscing.</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="text-green-500">✔</span> Eddo eiusmod tempor incididunt utlaboree edolore.</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="text-green-500">✔</span> Tempor incididunt ut laboreet dolore magna aliqua.</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="text-green-500">✔</span> Isse ultrices gravida. Consectetur adipiscing elitadipiscing.</li>
          <li className="flex items-start gap-2 text-gray-700"><span className="text-green-500">✔</span> Ddo eiusmodtempor incididunt utlabore et dolore.</li>
        </motion.ul>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Read More
        </motion.button>
      </motion.div>
    </section>
    </div>
};

export default AboutSection;
