import "./drawer.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MenuData from "./drawer_menu";


export function Drawer() {
  return (
    <>
      <div className="draw-body">
        <div className="draw-head">
          <h5>AL-UI Admin</h5>
          <br />
          <input className="search" type="text" placeholder="Search" />
          <br />
            <div className="draw-nav">
                <Button className="draw-menu-btn" >Menu</Button>
                <Button className="draw-menu-btn">Profile</Button>
                <Button className="draw-menu-btn">Contact</Button>
          </div>
        </div>
        <div className="draw-center">
          <MenuData    />  
        </div>
      </div>
    </>
  );
}
