import React, {useState} from 'react'
import './Signup.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

const Signup = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const navigate = useNavigate();


  const validateEmail = (email) => {
    setEmail(email);
    if(validator.isEmail(email)){
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
  };


  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      const newuser = {
        username: username,
        email: email,
        password: password
      };

      const signup = await axios.post('https://instock-0dd5e310830f.herokuapp.com/api/users/signup', newuser);
      console.log(signup);

      if(signup.status === 200){
        toast.success('🦄 Successfully Signup!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
          navigate('/');
      }
    }catch(err){
      console.error(err);
    }
  };

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />
    <div className="login-box">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>

      <div className="user-box">
          <input type="text" name="email" required="" value={username} onChange={(e)=>setUsername(e.target.value)}/>

          <label>Username</label>
        </div>

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
            Signup
          </button>
          <p onClick={() => navigate('/')}>Login</p>
        </div>

        <p className="error">{error}</p>
      </form>
    </div>
    </>
  )
}

export default Signup