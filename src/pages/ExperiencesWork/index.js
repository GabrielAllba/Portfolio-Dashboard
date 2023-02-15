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
import Badge from "components/Badge";
import ExperienceWork from "components/ExperienceWorks";

function ExperiencesWork  (props) {
    const [experiencesWorks, setExperiencesWorks] = useState("experiences");

    return (
      <Layout>
        <div className={classes.grid_container}>
          <div>
            <CustomBox>
              <ExperienceWork></ExperienceWork>
            </CustomBox>
          </div>
          <div>
            <div
              style={{ display: "flex", width: "max-content" }}
              className={classes.container_change}
            >
              <div
                style={{ margin: ".5rem", cursor: "pointer", display: "flex" }}
                onClick={() => {
                  setExperiencesWorks("experiences");
                }}
              >
                {experiencesWorks === "experiences" ? (
                  <Badge>
                    <p>Experiences</p>
                  </Badge>
                ) : (
                  <p className={classes.nostyle}>Experiences</p>
                )}
              </div>
              <div
                style={{ margin: ".5rem", cursor: "pointer", display: "flex" }}
                onClick={() => {
                  setExperiencesWorks("works");
                }}
              >
                {experiencesWorks === "works" ? (
                  <Badge>
                    <p>Works</p>
                  </Badge>
                ) : (
                  <p className={classes.nostyle}>Works</p>
                )}
              </div>
            </div>
            {experiencesWorks === "experiences" && (
              <CustomBox>
                <h2
                  className={classes.form_title}
                  style={{ margin: ".5rem 0", textAlign: "center" }}
                >
                  Experiences Editor
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
                      
                        Experience Name
                      
                    </label>
                    <input
                      className={classes.input}
                      type="text"
                      id="experience_name"
                    />
                  </div>
                  <div
                    className={classes.form_input_container}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label className={classes.label} for="last">
                      
                        Description
                      
                    </label>
                    <input className={classes.input} id="description" type="text" />
                  </div>
                  <div
                    className={classes.form_input_container}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label className={classes.label} for="last">
                      
                        Tools
                      
                    </label>
                    <input className={classes.input} id="tools" />
                  </div>
                  <div
                    className={classes.form_input_container}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label className={classes.label} for="last">
                      
                        Start Date
                      
                    </label>
                    <input className={classes.input} id="start_date"  type="date"/>
                  </div>
                  <div
                    className={classes.form_input_container}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label className={classes.label} for="last">
                      
                        End Date
                      
                    </label>
                    <input className={classes.input} id="end_date"  type="date"/>
                  </div>

                  <CustomButton valid={true}>Submit</CustomButton>
                </form>
              </CustomBox>
            )}

            {experiencesWorks === "works" && (
              <CustomBox>
                <h2
                  className={classes.form_title}
                  style={{ margin: ".5rem 0", textAlign: "center" }}
                >
                  Works Editor
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
                      
                        Work Name
                      
                    </label>
                    <input
                      className={classes.input}
                      type="text"
                      id="work_name"
                    />
                  </div>
                  <div
                    className={classes.form_input_container}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label className={classes.label} for="last">
                      
                        Work Description
                      
                    </label>
                    <input className={classes.input} id="description" type="text" />
                  </div>
                  <div
                    className={classes.form_input_container}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label className={classes.label} for="last">
                      
                        Image
                      
                    </label>
                    <input className={classes.input} id="image" type="file"/>
                  </div>

                  <CustomButton valid={true}>Submit</CustomButton>
                </form>
              </CustomBox>
            )}
          </div>
        </div>
      </Layout>
    );
}

export default ExperiencesWork;
