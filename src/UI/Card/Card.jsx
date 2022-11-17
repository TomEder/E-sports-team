import React from 'react';

const Card = (props) => {
    return ( 
        <div className='text-center
        transition 
        cursor-pointer 
        ease-in-out 
        scale-75
        hover:scale-100 
        bg-gradient-to-r 
        from-slate-600 to-sky-100 
        rounded-md 
        p-5 
        shadow 
        drop-shadow-md 
        max-h-xs 
        max-w-xs 
        m-auto
        border border-solid border-4 border-amber-500'>
        {props.children}
        </div>
        
     );
}
 
export default Card;