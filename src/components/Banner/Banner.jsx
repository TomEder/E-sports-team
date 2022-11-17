import React from 'react';
import SthlmCool from "../../images/STHLMWolves.png";

const Banner = () => {
    return ( 
        <div className="bg-gradient-to-r from-slate-900 to-sky-200 text-red-900 p-20 text-8xl text-center">
        {/* <h1 className="drop-shadow-md">STOCKHOLM</h1> */}
        <div className="grid justify-items-center drop-shadow-xl -mb-96 -mt-72 scale-50">
          <img src={SthlmCool} alt="" />
        </div>
        <h1 className="drop-shadow-md shadow-black">COOL WOLVES</h1>
      </div>
     );
}
 
export default Banner;