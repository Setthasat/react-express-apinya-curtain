import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';


function Navbar() {
    return (
        <div className='backdrop-blur-md bg-white/30 h-[3rem] flex justify-between items-center mx-4'>
            <div className=''>
                <p>Apinya Curtain</p>
            </div>
            <div className='flex justify-center items-center gap-[3rem]'>
                <div>
                    คำนวณพี้นที่
                </div>
                <div>
                    ชนิดของผ้าม่าน
                </div>
                <div>
                    <p className='text-[2.5rem]'><BiSolidUserCircle /></p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;