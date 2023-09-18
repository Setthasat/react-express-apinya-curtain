import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import './Navbar.css';


function Navbar() {
    return (
        <div className='backdrop-blur-md bg-white/30 h-[3rem] flex justify-between items-center mx-4'>
            <div className=''>
                <p>Apinya Curtain</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='m-[2rem]'>
                    <div className='border-[1.5px] px-2 border-black rounded-3xl '>
                        <p className=''>คำนวณพี้นที่</p>
                    </div>
                </div>
                <div className='m-[2rem]'>
                    <div className='border-[1.5px] px-2 border-black rounded-3xl'>
                        <p>ตัวอย่างงานติดตั้ง</p>
                    </div>
                </div>
                <div className='m-[2rem]'>
                    <div className='border-[1.5px] px-2 border-black rounded-3xl'>
                        <p>ชนิดของผ้าม่าน</p>
                    </div>
                </div>
                <div>
                    <p className='text-[2.5rem]'><BiSolidUserCircle /></p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;