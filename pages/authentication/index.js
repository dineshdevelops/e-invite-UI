import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from "../../styles/components/authentication/signup.module.scss"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter();
  const [signUpData,setSignUpData]=React.useState({
      name: "",
      email: "",
      mobileNumber: "",
      password: ""
  })
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setSignUpData((prevInfo)=>{
      const newSignUpData = {...prevInfo};
      newSignUpData[name]=value;
      return newSignUpData;
    })
  }
  const handleSubmit = async()=>{
    let notifyMessage;
    try{
      const res = await axios.post('http://localhost:8083/api/authentication/signUp',signUpData);
      if(res.status === 200){
        notifyMessage = res.data.message;
        console.log(res)
        router.push("notify/verify/"+notifyMessage)
      }
    }
    catch(error){
      console.log(error);
      notifyMessage = "SignUp Error Try to signUp again";
      router.push("notify/error/"+notifyMessage)
    }
  }
  return (
    <div className={styles.signUp}>
      <div className={styles.title}>Sign Up and join Us</div>
      <div className={styles.signUpForm}>
        <Avatar sx={{bgcolor:'#f50057',width: 66, height: 66}}>?</Avatar>
        <TextField
          required
          id="outlined-required-1"
          label="Name"
          onChange={handleChange}
          name="name"
        />
        <TextField
          required
          id="outlined-required-2"
          label="Email Id"
          onChange={handleChange}
          name="email"
        />
        <TextField
          required
          id="outlined-required-3"
          label="Mobile Number"
          onChange={handleChange}
          name="mobileNumber"
        />
        <TextField
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
          name="password"
        />
        <TextField
          id="outlined-password-input-2"
          required
          label="Repeat Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
      <Button variant="contained" sx={{bgcolor:'#f50057'}} endIcon={<PersonAddIcon />} onClick={handleSubmit}>
        Sign Up
      </Button>
      <div className={styles.login}>Existing User? Login</div>
      </div>
    </div>
  )
}

export default SignUp