import React, {useState} from "react";
import { Typography, Container, Button, Box, Grid } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LocationBox = ({ title, address, phone, email, weekdays, weekends, timings, etimings, onSelectLocation, isWhiteBackground, isBlackBackground }) => (
  <Box
    sx={{
      backgroundColor: isWhiteBackground ? 'white' : '#f0f0f0',
      padding: '20px',
      marginTop: '50px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography variant="h4" mb={2}>
      {title}
    </Typography>
    <hr />

    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={0.3}>
            <Typography>
                <RoomIcon />    
            </Typography>
        </Grid>

      <Grid item xs={12} sm={6} md={4}>
        
        <Typography variant="body1">
          {address}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={0.3}>
            <Typography>
            <CallIcon /> 
            <EmailIcon />
            </Typography>
        </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="body1">
         {phone} <br />
         {email}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={0.3}>
            <Typography>
            <AccessTimeIcon />
            </Typography>
        </Grid>
      <Grid item xs={12} sm={6} md={1.5}>
        <Typography variant="body1">
           {weekdays}<br />
           {weekends}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Typography variant="body1">
           {timings}<br />
           {etimings}
        </Typography>
      </Grid>
      
    </Grid>
    <Grid sx={{ textAlign: 'right', marginRight: '50px' }}>
      <Button sx={{
        marginTop: '10px',
        color: 'white',
        borderColor:'black',
        padding: '20px',
        paddingLeft:'40px',
        paddingRight:'40px',
        backgroundColor: isWhiteBackground ? 'black' : 'white',

        color: isBlackBackground ? 'white' : 'black',
        transform: 'skew(-25deg)',
      }}
      onClick={onSelectLocation}
      >
        Select
      </Button>
    </Grid>
  </Box>
);

const Location = () => {

  // const [currentStep, setCurrentStep] = useState(0);

  // const handleStepChange = () => {
  //   // Increment the current step or perform any logic for step change
  //   setCurrentStep((prevStep) => prevStep + 1);
  // };

  return (
    
      <Container mt={5}>
        {/* Your search input and button code here */}
     

      <LocationBox
        title="Botany Town"
        address="Botany Town Centre, 588 Chapel Road, East Tamaki, N7 Orchard Car Park, near New World, Auckland 2016, NZ."
        phone="092713410"
        email="ecw.botany@gmail.com"
        weekdays="Mon - Sat"
        weekends="Sun"
        timings="9:00am - 5:00pm"
        etimings="8:30am - 4:30pm"
      />

      <LocationBox
        title="Cafe Moorhouse Avenue"
        address="410 Lincoln Road, Addington 8011 NZ"
        phone="03-366-2233"
        email="ecc.city@xtra.co.nz"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true} 
        isBlackBackground={true}

      />

      <LocationBox
        title="Centre Place"
        address="600/501 Victoria Street, Hamilton Centra, Ground Floor Car Park Entrance, Hamilton 3204 NZ"
        phone="06 358 8811"
        email="hamilton@espressocarwashcafe.co.nz"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"

      />

    <LocationBox
        title="Espresso Carwash Palmerston North"
        address="The Plaza Shopping Centre, 84 The Square, Palmerston North Central, Ground Floor Car Park, cnr Ashley & Cross Streets
        Palmerston North 4410 NZ"
        phone="06 358 8811"
        email="info.espressocarwash@gmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true}
        isBlackBackground={true}

      />

        <LocationBox
        title="Ferrymead
        "
        address="Cnr Ferry Road &, Waterman Place, Woolston
        Christchurch 8023 NZ"
        phone="03-384-6061"
        email="info.espressocarwash@gmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
/>
       <LocationBox
        title="Nelson Richmond"
        address="Richmond Mall, Cnr Queen, Croucher and, Talbot Street
        Richmond 7020 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true}
        isBlackBackground={true}

      />
       <LocationBox
        title="New Market"
        address="2 York Street Newmarket, Ground Floor Car Park Entrance
        Auckland 1023 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"

      />

<LocationBox
        title="Northlands"
        address="Northlands Shopping Centre, Cnr Langdons Road & Sisson Drive, Northcote
        Christchurch 8052 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true}
        isBlackBackground={true}

      />
       <LocationBox
        title="Northwest Shopping Centre"
        address="Northwest Shopping Centre, Main Car Park, Off Gunton Drive, Main Car Park Entrance off Gunton Drive
        Auckland 0814 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"

      />
       <LocationBox
        title="Ormiston Town Centre"
        address="Ormiston Town Centre 230 Ormiston Road, Flat Bush, First Floor Car Park Level
        Auckland 2016 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true}
        isBlackBackground={true}


      />
       <LocationBox
        title="Shore City"
        address="Shore City Shopping, 52-56 Anzac Street, Takapuna, Ground Floor Car Park, Como Street Entrance
        Auckland 0740 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        


        

      />
       <LocationBox
        title="Sylvia Park"
        address="Sylvia Park Shopping Centre, 286 Mount Wellington Highway, Mount Wellington, Car Park 5 entrance
        Auckland 1060 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true}
        isBlackBackground={true}
      />
       <LocationBox
        title="The Base Hamilton"
        address="The Base, Wairere Dr &, Te Rapa Road, Basement Car Park, follow directional signage, Farmers End
        Hamilton 3200 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
      />
       <LocationBox
        title="The Crossing"
        address="The Crossing, 71 Lichfield Street, Christchurch Central City, Ground Floor Car Park Entrance
        Christchurch 8011 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true}
        isBlackBackground={true}
      />
       <LocationBox
        title="The Hub, Hornby"
        address="The Hub Hornby, 418 Main South Road, Hornby, Ground Floor Car Park, near KFC
        Christchurch 8042 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
      />
       <LocationBox
        title="The Palms, Shirley"
        address="The Palms Shopping Centre, New Brighton Road, Shirley, Ground Floor Car Park, near Reading Cinemas
        Christchurch 8061 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
        isWhiteBackground={true}
        isBlackBackground={true}
      />
       <LocationBox
        title="Wellington – Porirua"
        address="North City Shopping Centre, 2 Titahi Bay Road, Porirua City Centre, Ground Floor Car Park, far end, follow directional signage
        Porirua 5022 NZ"
        phone="03-544-7791"
        email="ecw.richmond@hotmail.com"
        days="Mon - Sat"
        timings="9:00am - 5:00pm"
      />
     
     
    
    </Container>
  );
};

export default Location;
