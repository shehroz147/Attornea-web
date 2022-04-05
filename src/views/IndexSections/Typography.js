/*!

*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-lg mb-5">
          <span>Images</span>
        </h2>
        <Row>
          <Col sm="3" xs="6">
            <Row>
            <Col sm="3" xs="6">
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/theme/team-1-800x800.jpg")}
              style={{ width: "85px" }}
            />
            </Col>
            <Col sm="3" xs="6">
            <h4>Fitness</h4>
            <span>13 Listings</span>
            </Col>
            </Row>
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Circle Image
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={require("assets/img/theme/team-2-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Raised
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/theme/team-3-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Circle Raised
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/theme/team-4-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
