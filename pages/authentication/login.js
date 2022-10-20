import React from 'react'
import styles from "../../styles/components/authentication/login.module.scss"
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  return (
    <div className={styles.login}>
        <div className={styles.title}>Login</div>
        <div className={styles.loginForm}>
        <Avatar sx={{bgcolor:'#f50057',width: 66, height: 66}}>?</Avatar>
        <TextField
          required
          id="outlined-required"
          label="Email Id"
        />
        <TextField
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <Button variant="contained" sx={{bgcolor:'#f50057'}} endIcon={<LoginIcon />}>
        Login
      </Button>
      <div className={styles.signup}>New User? SignUp here!</div>
    </div>
    </div>
  )
}

export default Login