import React from 'react'
import styles from "../../styles/components/authentication/login.module.scss"
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import SnackBarComponent from '../../components/util/SnackBarComponent';

const Login = () => {
  const [isLoggedIn,setIsLoggedIn] = React.useState();
  const [invalidCredentials,setInvalidCredentials] = React.useState();

  const [loginData,setLoginData]=React.useState({
    email:"",
    password:""
  })
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setLoginData((prevInfo)=>{
      const newLoginData = {...prevInfo};
      newLoginData[name]=value;
      return newLoginData;
    })
  }
  const handleSubmit=async()=>{
    try {
      const res = await axios.post('http://localhost:8083/api/authentication/login',loginData);
      if(res.status===200){
        const {_id,token}=res.data;
        localStorage.setItem('userId',_id);
        localStorage.setItem('token',token);
      }
    } catch (error) {
      setInvalidCredentials(true)
    }
  }
  return (
    <div className={styles.login}>
        <div className={styles.title}>Login</div>
        <div className={styles.loginForm}>
        <Avatar sx={{bgcolor:'#f50057',width: 66, height: 66}}>?</Avatar>
        <TextField
          required
          id="outlined-required"
          label="Email Id"
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          onChange={handleChange}
        />
      <Button variant="contained" sx={{bgcolor:'#f50057'}} endIcon={<LoginIcon />} onClick={handleSubmit} >
        Login
      </Button>
      <div className={styles.signup}>New User? SignUp here!</div>
    </div>
    </div>
  )
}

export default Login