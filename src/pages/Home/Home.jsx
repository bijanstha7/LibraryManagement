import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Loader1 from '../../components/Loader1/Loader1';

const Home = () => {

  const [isLoading, setIsLoading]=useState(true);

  useEffect(()=>{
    const fakeDataFetch=()=>{
      setTimeout(()=>{
        setIsLoading(false);

      }, 4000);
    }
    fakeDataFetch();
  }, [])
  return isLoading ?(
    <Loader1 />) : (
    <main>
      <Header />
      <Outlet />
      <Footer/>
  </main>
    );
}

export default Home
