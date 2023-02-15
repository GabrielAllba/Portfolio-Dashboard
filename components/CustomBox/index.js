import classes from './index.module.css'

function CustomBox(props){
    return (
        <div className={classes.box}>
            {props.children}
        </div>
    )
    
    
}

export default CustomBox