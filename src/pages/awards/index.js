import classes from "./index.module.css";
import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Router from "next/router";
import Layout from "components/Layout";
import { ThemeProvider } from "next-themes";
import CustomBox from "components/CustomBox";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "components/CustomButton";
import AwardsComp from "components/AwardsComp";


function Awards(props) {
  return (
    <Layout>
      <div className={classes.grid_container}>
        <div>
          <CustomBox>
            <AwardsComp></AwardsComp>
          </CustomBox>
        </div>
     
        <div>
          <CustomBox>
            <h2
              className={classes.form_title}
              style={{ margin: ".5rem 0", textAlign: "center" }}
            >
              Awards Editor
            </h2>
            <p
              className={classes.form_desc}
              style={{ margin: "2rem ", textAlign: "center" }}
            >
              Hello! Please input the field provided below!
            </p>
            <form
              action="/send-data-here"
              method="post"
              className={classes.form}
            >
              <div className={classes.form_input_container}>
                <label className={classes.label} htmlFor="first">
                  
                    Awards Name
                  
                </label>
                <input
                  className={classes.input}
                  type="text"
                  id="awards_name"
                />
              </div>
              <div
                className={classes.form_input_container}
                style={{ marginBottom: "1rem" }}
              >
                <label className={classes.label} htmlFor="last">
                  
                    Information
                  
                </label>
                <input className={classes.input} id="information" type="text" />
              </div>
              <div
                className={classes.form_input_container}
                style={{ marginBottom: "1rem" }}
              >
                <label className={classes.label} htmlFor="last">
                  
                    Description
                  
                </label>
                <input className={classes.input} id="description" type="text" />
              </div>
              <div
                className={classes.form_input_container}
                style={{ marginBottom: "1rem" }}
              >
                <label className={classes.label} htmlFor="last">
                  
                    Tools
                  
                </label>
                <input className={classes.input} id="tools" type="text" />
              </div>
              <div
                className={classes.form_input_container}
                style={{ marginBottom: "1rem" }}
              >
                <label className={classes.label} htmlFor="last">
                  
                    Image
                  
                </label>
                <input className={classes.input} id="image" type="file" />
              </div>

              <CustomButton valid={true}>Submit</CustomButton>
            </form>
          </CustomBox>
        </div>
      </div>
    </Layout>
  );
}

export default Awards;
