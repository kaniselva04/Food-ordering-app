import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signup.css';

const SignUp =()=> {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    

    const navigate = useNavigate();
    const handleSignUpClick = ()=>{
        if(password===confirmPassword)
            navigate('/display');
        else
            alert("password doesn't match reenter it again")
    }

    const handleGoBAckClick = ()=>{
        navigate('/login');
    }

    return (
        
            <section>
            <div className='SignUp'>
               <h1>Sign Up</h1>
               <form>
               <div className="form-group">
                <label for="exampleInputName">Name</label>
                 <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} required/>
    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value ={email} onChange={(e)=>setEmail(e.target.value)}required/>
    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value ={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label for="exampleInputConfirmPassword1"> Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" value ={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                </div>
           


                <button type="submit" className="btn btn-primary" onClick={handleSignUpClick}>Submit</button>
                </form>
    </div>

  <div className="login-section">
                <p>Already have an account?</p>
                <p>login!</p>
                <button className='login-button' onClick={handleGoBAckClick}>Login</button>
            </div>
                
            </section>
                 
       
       
    );
};

export default SignUp