import { Fragment } from "react";
import classes from './footer.module.scss';
function Footer () {
  return(
    <Fragment>
      <div className={classes.footer}>
        <p>e-mail: gabriel@ursache.dev</p>
        <p>phone: +40744527976</p>
        <p>HTML • CSS • SASS • JAVASCRIPT • RUBY • RAILS • REACTJS • NEXTJS • NODEJS • POSTGRESQL • MONGODB</p>
      </div>
    </Fragment>
  )
}

export default Footer;