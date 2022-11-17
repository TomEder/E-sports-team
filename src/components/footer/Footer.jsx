import React from 'react';
import coolpng from '../../images/coolwolves.png'
import Exxon from '../../images/Exxon200.png'
import Saab from '../../images/Saab200.png'
import System from '../../images/Systembolaget200.png'
import Marlboro from '../../images/Marlboro200.png'
import KFC from '../../images/kfc.png'
import Blizz from '../../images/blizzard2.png'
import Disney from '../../images/disney3.png'
import IKEA from '../../images/ikea2.png'

const Footer = () => {
    return ( 
        <div className="flex flex-nowrap bg-slate-900 drop-shadow-md justify-between">
            <div className='m-20 flex flex-nowrap '>
                <img className='h-20' src={coolpng} alt="" />
                <h1 className='text-red-900 text-2xl mt-5 ml-2'>Cool Wolves</h1> 
            </div>
            <div className='grid grid-cols-4'>
                <img className='scale-50 m-10' src={Exxon} alt="Exxon" />
                <img className='scale-50' src={Saab} alt="Saab" />
                <img className='scale-50 mt-7' src={System} alt="Exxon" />
                <img className='scale-50 mt-2' src={Marlboro} alt="Saab" />
                <img className='scale-50 ml-10 -mt-10' src={KFC} alt="Exxon" />
                <img className='scale-50 -mt-10' src={Blizz} alt="Saab" />
                <img className='scale-50 mt-2' src={Disney} alt="Exxon" />
                <img className='scale-50 -mt-4' src={IKEA} alt="Saab" />
                
            </div>
        </div>
     );
}
 
export default Footer;