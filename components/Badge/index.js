import classes from "./index.module.css";

function Badge(props) {
  return <div className={classes.badge}>{props.children}</div>;
}
export default Badge;
