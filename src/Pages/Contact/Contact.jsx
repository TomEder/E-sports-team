import React from 'react';
import Divider from '../../components/Divider/Divider';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm'
import Banner from '../../components/Banner/Banner'
const Contact = () => {
    return ( 
        <>
        <Header/>
        <Divider/>
        <ApplicationForm/>
        <Divider/>
        <div className="bg-gradient-to-r from-slate-900 to-sky-200 text-slate-900 p-20 text-4xl p-52 text-center">
                <span>For any complaints or inquiries please call us at 070 1337 512</span>
                <span><br/> Phone hours: tuesdays 13:37-17:12pst</span>
        </div>
        <Divider/>
        <Footer/>
        </>
     );
}

export default Contact;