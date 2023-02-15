
import classes from './index.module.css'
import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Router from "next/router";
import Layout from 'components/Layout';
import { ThemeProvider } from "next-themes";
import CustomBox from 'components/CustomBox';
import Tooltip from "@mui/material/Tooltip";
import Link from 'next/link';
import Image from 'next/image';

import CustomButton from 'components/CustomButton';

function Profile(props){
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
                <div className={classes.avatar_container}>
                  <Image
                    className={classes.avatar}
                    src="/img/avatar.png"
                    width={1000}
                    height={1000}
                    alt="image"

                  ></Image>
                </div>
                <h3>Gabriel Allba Shemi Yuma</h3>
                <p className={classes.desc}>
                  Love design code and organized something
                </p>
                <div style={{ marginTop: ".5rem", display: "flex" }}>
                  <Tooltip title="https://linkedin.com" placement="bottom">
                    <div className="margin5 badge">
                      <Link href="/" className="nounderline">
                        <p className="link">Linkedin</p>
                      </Link>
                    </div>
                  </Tooltip>
                  <Tooltip title="https://github.com" placement="bottom">
                    <div className="margin5 badge">
                      <Link href="/" className="nounderline">
                        <p className="link">Github</p>
                      </Link>
                    </div>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom">
                    <div className="margin5 badge">
                      <Link href="/" className="nounderline">
                        <p className="link">CV</p>
                      </Link>
                    </div>
                  </Tooltip>
                </div>
                <div>
                  <div>
                    <p className={classes.desc}>Linkedin :</p>
                    <Link className="nounderline link" href="/">
                      https://linkedin.com
                    </Link>
                  </div>
                  <div>
                    <p className={classes.desc}>Github : </p>
                    <Link className="nounderline link" href="/">
                      https://github.com
                    </Link>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className={classes.desc}>CV</p>
                    <Image
                      className={classes.avatar}
                      src="/img/avatar.png"
                      width={1000}
                      height={1000}
                      alt="image"

                    ></Image>
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
                  <label className={classes.label} htmlFor="first">
                    
                      Name
                    
                  </label>
                  <input
                    className={classes.input}
                    type="name"
                    id="name"
               
                  />
                  
                </div>
                <div
                  className={classes.form_input_container}
                  style={{ marginBottom: "1rem" }}
                >
                  <label className={classes.label} htmlFor="last">
                    
                      Hero Sub Title
                    
                  </label>
                  <input
                    className={classes.input}
                    id="sub_title"
                    
                  />
               
                </div>
                <div
                  className={classes.form_input_container}
                  style={{ marginBottom: "1rem" }}
                >
                  <label className={classes.label} htmlFor="last">
                    
                      Profile Picture
                    
                  </label>
                  <input
                    className={classes.input + ' ' + classes.input_file}
                    id="sub_title"
                    type='file'
                  />
               
                </div>
                <CustomButton valid={true}>Submit</CustomButton>
              </form>
            </CustomBox>
          </div>
          <div>
            <CustomBox>
              <h2
                className={classes.form_title}
                style={{ margin: ".5rem 0", textAlign: "center" }}
              >
                
                  Social Media Editor
                
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
                    
                      Social Media Name
                    
                  </label>
                  <input
                    className={classes.input}
                    type="text"
                    id="social_media_name"
               
                  />
                  
                </div>
                <div
                  className={classes.form_input_container}
                  style={{ marginBottom: "1rem" }}
                >
                  <label className={classes.label} htmlFor="last">
                    
                      Link
                    
                  </label>
                  <input
                    className={classes.input}
                    id="link"
                    type='text'
                  />
               
                </div>
                <div
                  className={classes.form_input_container}
                  style={{ marginBottom: "1rem" }}
                >
                  <label className={classes.label} htmlFor="last">
                    
                      Icon
                    
                  </label>
                  <input
                    className={classes.input}
                    id="icon"
                    type='text'
                    
                  />
               
                </div>
               
                <CustomButton valid={true}>Submit</CustomButton>
              </form>
            </CustomBox>
          </div>
        </div>
      </Layout>
    );
     
}

export default Profile