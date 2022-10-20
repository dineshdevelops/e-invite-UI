import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from "../../styles/components/authentication/signup.module.scss"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.title}>Sign Up and join Us</div>
      <div className={styles.signUpForm}>
        <Avatar sx={{bgcolor:'#f50057',width: 66, height: 66}}>?</Avatar>
        <TextField
          required
          id="outlined-required"
          label="Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Email Id"
        />
        <TextField
          required
          id="outlined-required"
          label="Mobile Number"
        />
        <TextField
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          required
          label="Repeat Password"
          type="password"
          autoComplete="current-password"
        />
      <Button variant="contained" sx={{bgcolor:'#f50057'}} endIcon={<PersonAddIcon />}>
        Sign Up
      </Button>
      <div className={styles.login}>Existing User? Login</div>
      </div>
    </div>
  )
}

export default SignUp