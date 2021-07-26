import { Fragment } from "react";
import classes from './homePageMain.module.scss';
function HomePageMain () {
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.text}>
          <p>Constantin Gabriel Ursache</p> 
          <p>FULL STACK WEB DEVELOPER</p>
          <button>Next</button>
        </div>
      </div>
    </Fragment>
  )
}

export default HomePageMain;