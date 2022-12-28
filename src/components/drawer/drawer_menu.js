import './drawer.css'
import { NavLink, Link } from "react-router-dom";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import {BsChatFill , BsPersonFill , BsFillPieChartFill , BsTable , BsPencilFill} from 'react-icons/bs'
import {HiDocument} from 'react-icons/hi'
import {IoDocument} from 'react-icons/io5'
import {AiFillLock} from 'react-icons/ai'
import {FaPuzzlePiece} from 'react-icons/fa'
import {IoDiamondOutline} from 'react-icons/io5'
import { Button } from 'react-bootstrap';
import {BsArrowRight} from 'react-icons/bs'
import { Card } from 'react-bootstrap';

const MenuData = () => {
  return (
    <  >
      <ul className='main-list' >
        <li className='list-head'>MAIN</li>
        <li> <NavLink className='nav-link' to="/dashboard"><BsSpeedometer2 className='menu-icon' /> Dashboard </NavLink> </li>
        <li> <NavLink className='nav-link' ><FaCalendarAlt className='menu-icon' /> Calendar </NavLink> </li>
        <li> <NavLink className='nav-link' ><BsChatFill className='menu-icon' /> Chat App </NavLink> </li>
        <li> <NavLink className='nav-link' ><IoDocument className='menu-icon' /> Pages </NavLink> </li>
        <li> <NavLink className='nav-link' ><AiFillLock className='menu-icon' /> Authentication </NavLink> </li>
        <li> <NavLink className='nav-link' ><FaPuzzlePiece className='menu-icon' /> Widget's </NavLink> </li>
      </ul>
      <hr />
      <ul className='main-list'>
        <li className='list-head'>DOCUMENTATION</li>
        <li> <NavLink className='nav-link' ><BsPersonFill  className='menu-icon'/> Starter Page </NavLink> </li>
        <li> <NavLink className='nav-link' ><BsFillPieChartFill className='menu-icon' /> Chart's </NavLink> </li>
        <li> <NavLink className='nav-link' ><BsTable className='menu-icon' /> Table Example </NavLink> </li>
        <li> <NavLink className='nav-link' ><IoDiamondOutline  className='menu-icon'/> UI Components </NavLink> </li>
        <li className='version-list'> <NavLink className='nav-link' to="/dashboard"><BsPencilFill className='menu-icon'/> Changelog </NavLink> <Button className='version-btn'>v.1.1.6</Button>  </li>
      </ul>

<div>
  <Card className='card' >
    <Card.Title className='card-title' >
      <p>STORAGE</p>
      <p>35GB</p>
    </Card.Title>
    <Card.Body>
      <Button>Upgrade Now </Button>
    </Card.Body>
  </Card>
</div>

    </>
  );
};

export default MenuData;
