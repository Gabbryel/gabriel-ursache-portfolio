import { Fragment } from "react";
import Image from 'next/image';
import classes from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar () {
  return(
    <Fragment>
      <div className={classes.navbarcontainer}>
        <Image src='/logo.png' alt='logo' height={50} width={50} />
        <FontAwesomeIcon icon={faBars} className={classes.burger}/>
      </div>
    </Fragment>
  )
}

export default Navbar;


// <i class="fas fa-bars"></i>