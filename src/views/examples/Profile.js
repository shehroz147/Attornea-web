
import React from "react";



import AccountSetup from '../../components/Invforms/AccountSetup';
import SocialProfiles from '../../components/Invforms/SocialProfiles';
import Contactinfo from '../../components/Invforms/Contactinfo';
import Confirmno from '../../components/Invforms/Confirmno';
import Confirmed from "components/Invforms/confirmed";
import Locationinfo from "components/Invforms/Locationinfo";
import Providorinfo from "components/Invforms/Providorinfo";
import Congrats from "components/Invforms/Congrats"
import Organizationcontactinfo from "components/Invforms/Organizationcontactinfo";
import Organizationlocation from "components/Invforms/Organizationlocation";
import Welcome from "components/Dashboard/Welcome";

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
                <AccountSetup
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                   
                />
                
            );
            
        case 2:
            return (
                <SocialProfiles
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    
                />
            );
        case 3:
            return (
                <Contactinfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                   
                />
            );
        case 4:
            return (
                <Confirmno 
                    nextStep={this.nextStep}
                   
                />
            );
          case 5:
            return (
                <Confirmed 
                    nextStep={this.nextStep}
                   
                />
            );
            case 6:
            return (
                <Locationinfo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                 
                />
            );
            case 7:
            return (
                <Providorinfo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            );
            case 8:
            return (
                <Congrats 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            );
            case 9:
            return (
                <Welcome
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
