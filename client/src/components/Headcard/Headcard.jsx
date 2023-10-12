import React from 'react';
import './Headcard.css';
import { motion } from 'framer-motion';
import SideCard1 from '../../assets/SideCard1.jpg';
import SideCard2 from '../../assets/SideCard2.jpg';
import HeadImage from '../../assets/HeaderImage.jpg';
import { useState, useEffect } from 'react';


function Headcard() {

  const [coordinates, setCoordinates] = useState({ x: 500, y: 0 });


  const moveObjectToXY = (x, y) => {
    setCoordinates({ x, y });
  };

  useEffect(() => {
    moveObjectToXY(0, 0);
  }, []);

  return (
    <div className='w-full max-w-screen-xl mx-auto mt-[1.4rem]'>
      <div className='relative'>
        <img src={HeadImage}
          alt='HeadCard'
          className='w-full h-[52rem] rounded-[2rem] shadow-2xl'
          style={{
            filter: "contrast(40%) brightness(60%)",
            position: 'relative',
            zIndex: 1,
          }}
        />
        <motion.div
          className='w-[30rem] h-[30rem] rounded-[2rem] shadow-2xl duration-[120ms] flex justify-center items-center'
          style={{
            position: 'absolute',
            top: 372,
            left: 1080,
            zIndex: 1
          }}
          initial={{ x: coordinates.x, y: coordinates.y }}
          animate={{ x: coordinates.x, y: coordinates.y }}
        >
          <img src={SideCard1} alt='SideCard' className='absolute rounded-[2rem] w-[30rem] h-[30rem]'
            style={{ filter: "contrast(50%) brightness(70%)" }} />
          <div className='absolute border p-4 rounded-2xl'>
            <button className='text-white'>Learn more</button>
          </div>
        </motion.div>

        <motion.div
          className='w-[30rem] h-[30rem] rounded-[2rem] shadow-2xl duration-[120ms] flex justify-center items-center'
          style={{
            position: 'absolute',
            top: -20,
            right: 1080,
            zIndex: 1
          }}
          initial={{ x: -coordinates.x, y: coordinates.y }}
          animate={{ x: -coordinates.x, y: coordinates.y }}
        >
          <img src={SideCard2} alt='SideCard' className='w-[30rem] h-[30rem] absolute rounded-[2rem]'
            style={{ filter: "contrast(50%) brightness(70%)" }} />
        </motion.div>
        {/* <motion.img src={SideCard1}
          alt='SideCard'
          className='w-[30rem] h-[30rem] rounded-[2rem] shadow-2xl duration-[120ms]'
          style={{
            filter: "contrast(50%) brightness(70%)",
            position: 'absolute',
            top: 372,
            left: 1080,
            zIndex: 1
          }}
          initial={{ x: coordinates.x, y: coordinates.y }}
          animate={{ x: coordinates.x, y: coordinates.y }}
        />
        <motion.img src={SideCard2}
          alt='SideCard'
          className='w-[30rem] h-[30rem] rounded-[2rem] shadow-2xlduration-[120ms] sidecard-shadow'
          style={{
            filter: "contrast(50%) brightness(70%)",
            position: 'absolute',
            top: -20,
            right: 1080,
            zIndex: 1
          }}
          initial={{ x: -coordinates.x, y: coordinates.y }}
          animate={{ x: -coordinates.x, y: coordinates.y }}
        /> */}
      </div>
    </div>
  );
}

export default Headcard;