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
import Gradient from "rgt";
import CustomButton from "components/CustomButton";
import Badge from "components/Badge";

function Skills(props) {
  return (
    <Layout>
      <div className={classes.grid_container}>
        <div>
          <CustomBox>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h2>Skills</h2>

              <div>
                <div>
                  <h3>Frontend</h3>
                  <p style={{margin: '.5rem'}}>(3/10)</p>
                  <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <div style={{ display: "flex", margin:'.5rem' }}>
                      <Badge>HTML</Badge>
                    </div>
                    <div style={{ display: "flex", margin:'.5rem' }}>
                      <Badge>HTML</Badge>
                    </div>
                    <div style={{ display: "flex", margin:'.5rem' }}>
                      <Badge>HTML</Badge>
                    </div>
                    
                    
                  </div>
                  <div style={{display: 'flex', margin: '.5rem'}}>
                    <Badge>Edit</Badge>
                  </div>
                </div>

               
              </div>
            </div>
          </CustomBox>
        </div>
        <div>
          <CustomBox>
            <h2
              className={classes.form_title}
              style={{ margin: ".5rem 0", textAlign: "center" }}
            >
              Profile Editor
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
                <label className={classes.label} for="first">
                  <Gradient dir="left-to-right" from="#A6C9FF" to="#E5CCFF">
                    Skill Name
                  </Gradient>
                </label>
                <input className={classes.input} type="texg" id="skill_name" />
              </div>
              <div
                className={classes.form_input_container}
                style={{ marginBottom: "1rem" }}
              >
                <label className={classes.label} for="last">
                  <Gradient dir="left-to-right" from="#A6C9FF" to="#E5CCFF">
                    Rate out of 10
                  </Gradient>
                </label>
                <input className={classes.input} id="rate" type="number"/>
              </div>
              <div
                className={classes.form_input_container}
                style={{ marginBottom: "1rem" }}
              >
                <label className={classes.label} for="last">
                  <Gradient dir="left-to-right" from="#A6C9FF" to="#E5CCFF">
                    Tools
                  </Gradient>
                </label>
                <input className={classes.input} id="tools" />
              </div>
             
              <CustomButton valid={true}>Submit</CustomButton>
            </form>
          </CustomBox>
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
