import React from 'react'
import TextField from "@mui/material/TextField";
import { Button } from 'react-bootstrap';

const Home = () => {
    
  return (
    <>
          <TextField id="standard-basic" label="Enter Your City Name" variant="standard" style={{ width: '600px', marginBottom: '150px' }} /><br/>
          <Button variant='info'>Search</Button>
    </>
  );
}

export default Home