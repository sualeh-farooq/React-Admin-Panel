import "./drawer.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Drawer() {
  return (
    <>
      <div className="draw-body">
        <div className="draw-head">
          <h5>AL-UI Admin</h5>
          <br />
          <input className="search" type="text" placeholder="Search" />
          <br />
          {/* <div className="container"> */}
            <div className="draw-nav">
                <Button className="draw-menu-btn" >Menu</Button>
                <Button className="draw-menu-btn">Profile</Button>
                <Button className="draw-menu-btn">Contact</Button>
            {/* </div> */}
          </div>
        </div>
        <div className="draw-center">center</div>
        <div className="draw-footer">footer</div>
      </div>
    </>
  );
}
