import classes from './SkillItem.module.css'

function SkillItem(props){
    return (
      <div
        className={classes.container}
        style={{ display: "flex", margin: ".5rem"}}
      >
        <div>
          <h4 className="sub_item">Web Design </h4>
          <p className={classes.rate+ ' ' + classes.margin1}>
            <i>(3/10)</i>
          </p>
          <p className={classes.margin1}>Tools : Figma</p>
        </div>
      </div>
    );
}

export default SkillItem