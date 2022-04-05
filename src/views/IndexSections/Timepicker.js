
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

class Timepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col xs={6}>
            <FormGroup>
            <label className="mb-0 mt-2 formlabel" >Start Time</label>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "00:00 AM"
                  }}
                  timeFormat={true}
                  dateFormat={false}
                //   renderDay={(props, currentDate, selectedDate) => {
                //     let classes = props.className;
                //     if (
                //       this.state.startDate &&
                //       this.state.endDate &&
                //       this.state.startDate._d + "" === currentDate._d + ""
                //     ) {
                //       classes += " start-date";
                //     } else if (
                //       this.state.startDate &&
                //       this.state.endDate &&
                //       new Date(this.state.startDate._d + "") <
                //         new Date(currentDate._d + "") &&
                //       new Date(this.state.endDate._d + "") >
                //         new Date(currentDate._d + "")
                //     ) {
                //       classes += " middle-date";
                //     } else if (
                //       this.state.endDate &&
                //       this.state.endDate._d + "" === currentDate._d + ""
                //     ) {
                //       classes += " end-date";
                //     }
                //     return (
                //       <td {...props} className={classes}>
                //         {currentDate.date()}
                //       </td>
                //     );
                //   }}
                //   onChange={e => this.setState({ startDate: e })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
            <label className="mb-0 mt-2 formlabel" >End Time</label>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "00:00 AM"
                  }}
                  timeFormat={true}
                  dateFormat={false}
                // //   renderDay={(props, currentDate, selectedDate) => {
                // //     let classes = props.className;
                // //     if (
                // //       this.state.startDate &&
                // //       this.state.endDate &&
                // //       this.state.startDate._d + "" === currentDate._d + ""
                // //     ) {
                // //       classes += " start-date";
                // //     } else if (
                // //       this.state.startDate &&
                // //       this.state.endDate &&
                // //       new Date(this.state.startDate._d + "") <
                // //         new Date(currentDate._d + "") &&
                // //       new Date(this.state.endDate._d + "") >
                // //         new Date(currentDate._d + "")
                // //     ) {
                // //       classes += " middle-date";
                // //     } else if (
                // //       this.state.endDate &&
                // //       this.state.endDate._d + "" === currentDate._d + ""
                // //     ) {
                // //       classes += " end-date";
                // //     }
                // //     return (
                // //       <td {...props} className={classes}>
                // //         {currentDate.date()}
                // //       </td>
                // //     );
                // //   }}
                //   onChange={e => this.setState({ endDate: e })}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Timepicker;