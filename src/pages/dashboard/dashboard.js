import "./dashboard.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Drawer } from "../../components/drawer/drawer";
import { Button, Card } from "react-bootstrap";
export default function Dashboard() {
  return (
    <>
      <div className="dash-view">
        <Row>
          <Col className="dash-draw">
            <Drawer />
          </Col>
          <Col className="dash-data">
            {/* Dashboad Upper */}
            <Row className="dash-top">
              <div style={{flex : 1}} >
                <p>Welcome Back</p>
                <h3>Project Dashboad</h3>
              </div>
              <div className="dash-top-btn">
                <Button className="btn btn-light projectBtn ">Download</Button>
                <Button className="btn btn-dark projectBtn">Generate Report</Button>
              </div>
            </Row>
            {/* Dashboad Cards */}
            <Row className="sales-card" >
<div className="server-div">
    <Card className="card_">
        <Card.Title className="card-title">Server
        <p className="percent">62%</p> 

        </Card.Title> 
        <Card.Body>
        <p style={{fontSize:'small'}}>6% higher than last month</p> 
        <hr className="line" ></hr>
        </Card.Body>
    </Card>
    <Card className="card_">
        <Card.Title className="card-title">Server</Card.Title>
    </Card>
</div>
<div className="graph-div" >
<Card className="gp-card">
        <Card.Title className="card-title">Server</Card.Title>
    </Card>
    <Card className="gp-card">
        <Card.Title className="card-title">Server</Card.Title>
    </Card>
</div>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
