import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export default function Login() {
  const marginBlock = { marginBlock: '10px' }

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={{ padding: 20, width: 400, height: 500, margin: "20px auto" }}>
          <Grid align='center'>
            <Avatar style={{ background: 'blue' }}> <LockOutlinedIcon /> </Avatar>
            <h2>Login form </h2>
          </Grid>
          <TextField label='UserName' placeholder='Enter UserName' fullWidth required style={marginBlock} />
          <TextField label='Password' placeholder='Enter Your Password' type='password' fullWidth required style={marginBlock} />
          <Button type='submit' color='primary' variant='contained' fullWidth style={{ margin: '8px 0' }}> Login</Button>
          <Typography style={marginBlock}>
            {/* <Link href=''> Forget Password ? </Link> */}
          </Typography>

          <Typography> Do you have an account ?
            <Link href='./Signup'> Sign Up </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  )
}
