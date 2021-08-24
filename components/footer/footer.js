import React from 'react';
import { Fragment } from "react";
import classes from './footer.module.scss';
import Image from 'next/image';

function Footer () {
  const [innerWindow, setInnerWindow] = React.useState(0);
  React.useEffect(() => setInnerWindow(window.innerWidth));
  const imgDimension = innerWindow / 100 * 2.5;
  return(
    <Fragment>
      <div className={classes.footer}>
        <p>all you need is </p> 
          <Image src='/logo-v4.png' alt='logo' height={imgDimension} width={imgDimension} />
        <p>'s code !</p>
      </div>
    </Fragment>
  )
}

export default Footer;