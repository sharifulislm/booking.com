import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import './Home.css';

const Home = () => {
    const [resorts, setResorts]=useState([]);

    useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setResorts(data));


    } ,[])


    return (
     <div className='Container'>

         <h3 className='mt-4 mb-4'>A snapshot of the world’s most picture-perfect properties</h3>
        <div className='resorts-contanier mx-auto '>
    {
        resorts.map(resorts =>( <Hotel key={resorts.id} resorts={resorts}></Hotel> ))
    }
          
        </div>
        {/* <div className='m-auto'> <button className='text-center'>see more</button></div> */}
        </div>
    );
};

export default Home;