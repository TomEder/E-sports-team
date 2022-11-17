import React from 'react';
import { Outlet, Link } from "react-router-dom";
import coolpng from '../../images/coolwolves.png'

const Header = () => {
    return ( 
        <div className="flex flex-nowrap bg-slate-900 drop-shadow-md justify-between">
            <Link to="/">
            <div className='m-2 flex flex-nowrap '>
                <img className='h-20' src={coolpng} alt="" />
                <h1 className='text-red-900 text-2xl mt-5 ml-2'>Cool Wolves</h1>
            </div>
            </Link>
            <div className='text-red-900 text-2xl m-5 flex flex-nowrap space-x-4 self-center'>
                <Link className='hover:text-amber-500' to="/about">About</Link>
                <Link className='hover:text-amber-500' to="/contact">Contact</Link>
                <Link className='hover:text-amber-500' to="/merch">Merch</Link>
            </div>
        </div>
     );
}
 
export default Header; 