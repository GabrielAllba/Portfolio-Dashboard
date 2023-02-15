import classes from './index.module.css'
import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Router from "next/router";


function ToggleTheme(props){
    const [mounted, setMounted] = useState(false); 
    const { theme, setTheme } = useTheme();
    

  

     useEffect(() => {
       setMounted(true);
     }, []);

     if(!mounted){
        return null
     }
     

     const changeTheme = (event) => {
        event.preventDefault()
        setTheme(theme === 'dark' ? 'light' : 'dark')
     }
     
    return (
      <>
        <div className={classes.theme_button}>
          <button className={classes.button} onClick={changeTheme}>
            {theme === "dark" ? (
              <FiSun
                style={{ fontSize: "1.5rem" }}
                className={classes.sunOpen}
              ></FiSun>
            ) : (
              <HiOutlineMoon
                style={{ fontSize: "1.5rem" }}
                className={classes.moonOpen}
              ></HiOutlineMoon>
            )}
          </button>
        </div>
      </>
    );  
     
    
}

export default ToggleTheme