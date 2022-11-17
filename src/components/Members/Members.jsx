import React from 'react';
import Card from '../../UI/Card/Card'
import Charlie from '../../images/Charlie.jpg'
import Tom from '../../images/Tom.jpg'
import Victor from '../../images/Victor.jpg'
import KarlAxel from '../../images/karl-axel.jpg'
import Daniel from '../../images/Daniel.jpg'
import Bronze5 from '../../images/Bronze5.png'
import Alexander from '../../images/alexander.jpg'
import James from '../../images/James.jpg'
import Milla from '../../images/milla.jpg'
import Mikkel from '../../images/Mikkel.jpg'

let Danielimg = Daniel
let Victorimg = Victor
let KarlAxelimg = KarlAxel
let Bronze5img = Bronze5
let Tomimg = Tom
let Akkeimg = Alexander
let Charlieimg = Charlie
let Jamesimg = James
let Mikkelimg = Mikkel
let Millaimg = Milla


const ROSTER = [
    {
        name: "OhioIs4Lovrs",
        rank: Bronze5img,
        image: Victorimg,
        role: "Tank",
        id: 4
    },
    
    {
        name: "TompaTraull",
        rank: Bronze5img,
        image: Tomimg,
        role: "Damage",
        id: 2
    },
    {
        name: "Milk0Matic",
        rank: Bronze5img,
        image: Danielimg,
        role: "Damage",
        id: 5
    },
    {
        name: "CHaWP",
        rank: Bronze5img,
        image: Charlieimg,
        role: "Support",
        id: 1
    },
    {
        name: "CoolWolf1",
        rank: Bronze5img,
        image: KarlAxelimg,
        role: "Support",
        id: 3
    },
    
    {
        name: "Akke920",
        rank: Bronze5img,
        image: Akkeimg,
        role: "Damage",
        id: 6
    },
    {
        name: "Super400",
        rank: Bronze5img,
        image: Jamesimg,
        role: "Damage",
        id: 6
    },
    {
        name: "Milano",
        rank: Bronze5img,
        image: Millaimg,
        role: "Flex",
        id: 6
    },
    {
        name: "EttNamn",
        rank: Bronze5img,
        image: Mikkelimg,
        role: "Damage",
        id: 6
    },

]

const Members = () => {
    return ( 
    <>
    <div className='bg-gradient-to-r from-red-900 to-slate-900  drop-shadow-lg p-10 text-center text-7xl' >
        <div className='mb-20 text-red-900'>
            <h1 className='drop-shadow'>ROSTER</h1>
        </div>
        <div className='flex items-stretch grid grid-cols-5'>
        {ROSTER.map(({name, rank, image, role}) => (
        <Card>
            <h1 className='text-3xl drop-shadow-xl text-slate-900 mb-1'>{name}</h1>
            <div className='drop-shadow-xl mb-1 object-cover border border-solid border-4 border-amber-500'>
            <img classname="h-48 w-96" src={image} alt="img" />
            </div>
            <p className='text-2xl drop-shadow-xl text-slate-900'>{role}</p>
            <h3 className='text-slate-900 drop-shadow-xl mt-2 text-2xl'>Current Rank:</h3>
            <div className='grid justify-items-center -mt-10 max-w-10 max-h-36 scale-50'>
                <img classname="object-cover" src={rank} alt="rankimg" />
            </div>
        </Card>
        ))}
        </div>
    </div>
    </>
     );
}
 
export default Members;