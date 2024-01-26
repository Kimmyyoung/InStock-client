import React, {useState, useEffect} from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/warehouses');
    }
  }, []);

  const validateEmail = (email) => {
    setEmail(email);
    if(isEmail(email)){
      setError('');
    }else{
      setError("Please enter a valid email address");
    }
  };

  const validatePassword = (password) => {
    setPassword(password);
    if (validator.isStrongPassword(password, { 
      minLength: 8, minUppercase: 1, minSymbols: 1 
    })) { 
    setError('') 
   } else { 
    setError('Please enter a valid password (min 8 characters, 1 uppercase, 1 symbol)') 
   } 
  }


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post('https://instock-0dd5e310830f.herokuapp.com/api/users', {
        email: email,
        password: password
      });

      if(user.data.token){
        localStorage.setItem('token', user.data.token);
        navigate('/warehouses');
      }

    }catch(err){
      console.error(err);
    }
  };

  return (
    <>
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="user-box">
          <input type="text" name="email" required="" value={email} onChange={(e)=>validateEmail(e.target.value)}/>

          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" value={password} required="" onChange={(e)=>validatePassword(e.target.value)}/>
          <label>Password</label>
        </div>

        <div className="login-button">
          <button type="submit" className="login-button-submit">
            Submit
          </button>
          <p onClick={() => navigate('/signup')}>Signup</p>
        </div>
        <p className="error">{error}</p>
      </form>

      <p className="guest">
      You want to see my project as Guest?
      <span className="guest_link" onClick={() => navigate('/warehouses')}>Click Here</span>
      </p>
    </div>
    </>
  )
}

export default Login