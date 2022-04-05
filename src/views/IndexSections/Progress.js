
import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

class ProgressSection extends React.Component {
  render() {
    return (
      <>
        
          
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Account Completion Status</span>
              </div>
              
            </div>
            <Progress max="100" value="25" color="success" />
          </div>
          
        
      </>
    );
  }
}

export default ProgressSection;
