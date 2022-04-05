
import React from "react";

import ServiceDetails from "components/Createlisting/ServiceDetails";
import Participantsparticulars from "components/Createlisting/Participantsparticulars";
import Location from "components/Createlisting/Location";
import Locationin from "components/Createlisting/Locationin";
import Facilities from "components/Createlisting/Facilities";
import Shedule from "components/Createlisting/Shedule";
import Faq from "components/Createlisting/Faq";
import Cancel from "components/Createlisting/Cancel";
import Confirmed from "components/Createlisting/Confirmed";




class Profile extends React.Component {
    
  state = {
    step: 1
};
nextStep = () => {
  const { step } = this.state;
  this.setState({ step: step + 1 });
};

prevStep = () => {
  const { step } = this.state;
  this.setState({ step: step - 1 });
};

inputChange = input => e => {
  this.setState({
      [input]: e.target.value
  });
};



  render() {
   
    const { step } = this.state;
   
    switch (step) {
        case 1:
            return (
                <ServiceDetails
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                   
                />
                
            );
            
        case 2:
            return (
                <Participantsparticulars
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    
                />
            );
        case 3:
            return (
                <Location
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                   
                />
            );
        case 4:
            return (
                <Locationin 
                    nextStep={this.nextStep}
                   
                />
            );
          case 5:
            return (
                <Facilities 
                    nextStep={this.nextStep}
                   
                />
            );
            case 6:
            return (
                <Shedule 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                 
                />
            );
            case 7:
            return (
                <Faq 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            );
            case 8:
            return (
                <Cancel 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            );
            case 9:
            return (
                <Confirmed
                />
            );
          }
    return (
      <>
        
      </>
    );
    
  }
  
}

export default  Profile;
