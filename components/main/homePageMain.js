import { Fragment } from "react";
import classes from "./homePageMain.module.scss";
function HomePageMain() {
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.text}>
          <p>Constantin Gabriel Ursache</p>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </Fragment>
  );
}
export default HomePageMain;
