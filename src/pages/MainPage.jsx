import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage =()=> {

    const navigate = useNavigate();

    const handleStartClick = ()=>{
        navigate('/login');
    }

    return (
        
            <section>
            <div className='wrapper'>
               <h1>BYTES AND EATS</h1>
               <button className='button' onClick={handleStartClick}>Start</button>
                </div>
            </section>
                 
   
       
    );
};

export default MainPage