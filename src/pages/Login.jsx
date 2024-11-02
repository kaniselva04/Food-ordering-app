import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

const Login =()=> {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = ()=>{
        navigate('/SignUp');
    }

    const handleGoToProductsClick = ()=>{
        navigate('/display');
    }
    

    return (
       
            <section>
            <div className='login'>
               <h1>Login</h1>
               <form>
               <div className="form-group">
                 <label for="exampleInputName">Name</label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}  required/>
    
            </div>
             <div className="form-group">
                 <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value ={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
  
            <button type="submit" className="btn btn-primary"onClick={handleGoToProductsClick} >Submit</button>
                </form>
                </div>
            <div className="signup-section">
                <p>Don't have an account?</p>
                <p>Please sign up!</p>
                <button className='signup-button' onClick={handleLoginClick}>Sign Up</button>
            </div>
                
            </section>
                 
       
       
    )
}

export default Login