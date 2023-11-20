import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';

import '../Stepper.css';
import Home from './Home';
import Service from './Service';



function Payment() {
  return <h2>Payment information</h2>;
}

function Confirmation() {
  return <h2>Booking is confirmed</h2>;
}

function Progressbutton() {
  const [activeStep, setActiveStep] = useState(0);

  
  const steps = [
    { title: 'Find Your Nearest Centre' },
    { title: 'Select Your Service' },
    { title: 'Pick a Date & Time' },
    { title: 'Online Booking' },
  ];

  const handleStepChange = () => {
    // Increment the current step when a location is selected
    setActiveStep((prevStep) => prevStep + 1);
  };

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <Home onSelectLocation={handleStepChange} />;
      case 1:
        return <Service />;
      case 2:
        return <Confirmation />;
      default:
        return null;
    }
  }

  return (
    <div style={{padding:'100px'}}>
      <Stepper variant='default'
        steps={steps.map((step, index) => ({ 
          title: (
            <>
              <div>Step {index + 1}</div>
              <div>{step.title}</div>
            </>
          ), }))}
        activeStep={activeStep}
        size={50}
        circleFontSize={0} // Set circleFontSize to 0 to hide the numbers inside the circles
        activeColor="red" // Customize the active step color
        completeColor="#28a745" // Customize the completed step color
        defaultBarColor="#dcdcdc" // Customize the default step color
      />

      {getSectionComponent()}
    </div>
  );
}

export default Progressbutton;
