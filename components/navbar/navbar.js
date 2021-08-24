import { Fragment, useRef, useState } from "react";
import Image from 'next/image';
import classes from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/button';

function Navbar () {
  const menuRef = useRef();
  const [isRolledDown, setIsRolledDown] = useState(false)
  const rollDownMenu = () => {
      if (menuRef.current.classList.contains(`${classes.none}`)) {
        menuRef.current.classList.remove(`${classes.none}`);
        menuRef.current.classList.add(`${classes.navbar__mobile__roledown}`)
      } else {
        menuRef.current.classList.remove(`${classes.navbar__mobile__roledown}`);
        menuRef.current.classList.add(`${classes.roll__up}`)
        setTimeout(() => {
          menuRef.current.classList.add(`${classes.none}`);
          menuRef.current.classList.remove(`${classes.roll__up}`);
        }, 900)
      }
  }
 
  
  return(
    <Fragment>
      <div className={classes.navbarcontainer}>
        <Image src='/logo-v4.png' alt='logo' height={60} width={60} layout="intrinsic" className="image"/>
        <FontAwesomeIcon icon={faBars} className={classes.burger} onClick={rollDownMenu}/>
      </div>
      <div className={classes.none} ref={menuRef}>
        <Button name="Skills"/>
        <Button name="Work"/>
        <Button name="Blog"/>
        <Button name="About"/>
        <Button name="Contact"/>
      </div>
    </Fragment>
  )
}

export default Navbar;


// <i class="fas fa-bars"></i>