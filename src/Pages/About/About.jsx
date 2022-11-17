import React from 'react';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Members from '../../components/Members/Members';

const About = () => {
    return ( 
        <>
        <Header/>
        <Divider/>
        <div className="bg-gradient-to-r from-slate-900 to-sky-200 text-slate-900 p-20 p-52 text-center">
                <div className='text-8xl'>
                <h1 className='drop-shadow text-red-900'>WE ARE</h1>
                <h1 className='drop-shadow text-red-900'>COOL WOLVES</h1>
                </div>
                <div className='max-w-xl text-center m-auto mt-20'>
                <span className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quo ullam dicta dolore accusantium officiis, magnam autem eveniet? Provident laborum alias earum vel dolore! Est, dolorum cumque? Id, impedit adipisci!</span>
                </div>
        </div>
        <Divider/>
        <Members/>
        <Divider/>
        <Footer/>
        </>
     );
}
 
export default About;