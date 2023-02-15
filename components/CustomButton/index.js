import classes from './index.module.css'

function CustomButton(props){
    return (
        <button disabled={props.valid === false ? true : false} className={props.valid === true ? classes.submit_button : classes.disable_button } type="submit">
          {props.children}
        </button>
    );
}

export default CustomButton