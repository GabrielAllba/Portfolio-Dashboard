import * as React from "react";
import classes from "./index.module.css";
export default function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
