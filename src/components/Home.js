import React from "react";
import { Typography, Container, TextField,  Button, Box, Grid } from "@mui/material";
import { Room, ArrowForward } from "@mui/icons-material";
import Location from "./Location";

const Home = () => {
  return (
    <>
    <Container mt={5}>
      <Typography variant="h3" align="center"  mb={2} sx={{marginTop: '50px'}}>
        Find An Espresso Car Wash Centre Near You
      </Typography>
      <div className="container" style={{ display: 'flex',  flexDirection: 'column', width:'100%',marginTop: '50px'  }}>
        <div style={{ display: 'flex', alignItems: 'left', width:'100%',  borderColor: 'gray' }}>
          <TextField
          type="text"
          fullWidth
          variant="outlined"
          placeholder="Enter your suburb or site name"
         
            style= {{
              padding:'35px', 
              
              borderColor: 'gray',
              background: '#f0f0f0', // Set light gray background
              transform: 'skew(-25deg)',
          }}
        />
        
        <Button
                  color="error"
              
                  style={{
                    backgroundColor: 'red',
                    color:'black',
                    borderColor: 'gray',
                    padding:'35px',                    transform: 'skew(-25deg)',
                    
                                  
                  }}
                >
                  Search 
                  <ArrowForward />
                </Button>
                </div>
        </div>
      <Button
        variant="outlined"
        className="btn-parallelogram"
        startIcon={<Room />}
        sx={{
          marginTop:'10px',
          transform: 'skew(-25deg)',
          borderColor: 'black',
          color:'black',
          transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
          '&:hover': {
            transform: 'translateX(-100%)',
            transition: 'var(--tran)',
            transform: 'skew(-25deg) ',
            zIndex:'-1',
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        Or use your current location
      </Button>
      
    </Container>
    <Location />
    
  </>
  );
};



export default Home;


