import React from 'react';
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import Members from "../../components/Members/Members";
import Footer from "../../components/footer/Footer";
import Divider from "../../components/Divider/Divider";

const Home = () => {
    return ( 
        <>
        <Header />
      <Divider />
      <Banner />
      <Divider />
      <Footer />
      </>
     );
}
 
export default Home;