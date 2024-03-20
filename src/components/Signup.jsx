import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Signup() {
  const paperStyle = { padding: '30px 60px', width: 400, margin: '20px auto' }
  const marginBlock = { marginBlock: '10px' }

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar style={{ background: 'blue' }}>
              <AddCircleIcon />
            </Avatar>
            <h2 style={{ margin: 0 }}>Sign Up</h2>
            <Typography variant='caption'> Please fill this form to create an account!</Typography>
          </Grid>
          <TextField fullWidth type='text' label='Name' placeholder='Enter Your Name' style={marginBlock} required />
          <TextField fullWidth type='email' label='Email' placeholder='Enter Your Email' style={marginBlock} required />
          <TextField fullWidth type='tel' label='Phone Number' placeholder='Enter Your Phone Number' style={marginBlock} required />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" style={marginBlock} required>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth type='password' label='Password' placeholder='Password' style={marginBlock} required />
          <TextField fullWidth type='password' label='Confirm Password' placeholder='Confirm Password' style={marginBlock} required />
          <Button type='submit' variant='contained' color='primary' style={marginBlock}>Sgin Up</Button>
        </Paper>
      </Grid >
    </>
  )
}
