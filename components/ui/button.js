import { Fragment } from 'react';
import classes from './button.module.scss'
function Button (props) {
  return(
    <Fragment>
      <button className={classes.button}>
        {props.name}
      </button>
    </Fragment>
  )
}






export default Button;