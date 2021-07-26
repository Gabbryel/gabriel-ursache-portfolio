import { Fragment } from "react";
import Image from 'next/image';
import classes from './navbar.module.scss';

function Navbar () {
  return(
    <Fragment>
      <div className={classes.navbarcontainer}>
        <Image src='/logo.png' alt='logo' height={300} width={300}/>
      </div>
    </Fragment>
  )
}

export default Navbar;