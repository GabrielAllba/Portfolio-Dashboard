import { Container } from "@mui/system";
import classes from './index.module.css'
import CustomBox from "components/CustomBox";
import { ThemeProvider } from "next-themes";
import ToggleTheme from "components/ToggleTheme";

import CustomButton from "components/CustomButton";
import useInput from "../../hooks/use-input";
import { useState } from "react";

function Login(props) {
  
  
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));


  let valid = false
  
    if(enteredEmailIsValid===true && enteredPasswordIsValid===true){
      valid = true
    }
  
  
  
  return (
    <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ToggleTheme></ToggleTheme>
        <CustomBox>
          <h2
            className={classes.form_title}
            style={{ margin: ".5rem 0", textAlign: "center" }}
          >
            
              Login
            
          </h2>
          <p
            className={classes.form_desc}
            style={{ margin: "2rem ", textAlign: "center" }}
          >
            Hello! Please input the field provided below!
          </p>
          <form action="/send-data-here" method="post" className={classes.form}>
            <div className={classes.form_input_container}>
              <label className={classes.label} htmlFor="first">
                
                  Email
                
              </label>
              <input
                className={classes.input}
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
              {emailInputHasError && (
                <p className={classes.error}>Please enter a valid email.</p>
              )}
            </div>
            <div
              className={classes.form_input_container}
              style={{ marginBottom: "1rem" }}
            >
              <label className={classes.label} htmlFor="last">
                
                  Password
                
              </label>
              <input
                className={classes.input}
                id="password"
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
              {passwordInputHasError && (
                <p className={classes.error}>Password cant be empty!</p>
              )}
            </div>
            <CustomButton valid={valid}>Submit</CustomButton>
          </form>
        </CustomBox>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
