import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Container } from '@mui/system'
import Layout from 'components/Layout'
import { ThemeProvider } from 'next-themes'
import CustomBox from 'components/CustomBox'
import classes from '../home.module.css'

import Skills from 'components/skills'
import CustomButton from 'components/CustomButton'
import Badge from 'components/Badge'
import Link from 'next/link'
import Tooltip from "@mui/material/Tooltip";
import AwardsComp from 'components/AwardsComp'
import ExperienceWork from 'components/ExperienceWorks'

export default function Home() {
  return (
    <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
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
                    quality="100"
                  ></Image>
                </div>
                <h3>Gabriel Allba Shemi Yuma</h3>
                <p className={classes.desc}>Love design code and organized something</p>
                <div style={{ marginTop: ".5rem", display: "flex" }}>
                      <Tooltip title="https://linkedin.com" placement="bottom">
                        <div className="margin5 badge">
                          <Link href='/' className='nounderline'>
                              <p className='link'>Linkedin</p>
                          </Link>
                        </div>
                      </Tooltip>
                      <Tooltip title="https://github.com" placement="bottom">
                        <div className="margin5 badge">
                          <Link href='/' className='nounderline'>
                              <p className='link'>Github</p>
                          </Link>
                        </div>
                      </Tooltip>
                      <Tooltip title="Add" placement="bottom">
                        <div className="margin5 badge">
                          <Link href='/' className='nounderline'>
                              <p className='link'>CV</p>
                          </Link>
                        </div>
                      </Tooltip>
                </div>
              </div>
            </CustomBox>
          </div>
          <div>
            <CustomBox>
              <Skills></Skills>
            </CustomBox>
          </div>
          <div>
            <CustomBox>
              <AwardsComp></AwardsComp>
            </CustomBox>
          </div>
          <div>
            <CustomBox>
              <ExperienceWork></ExperienceWork>
            </CustomBox>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
