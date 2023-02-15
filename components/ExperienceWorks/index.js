import { useState } from 'react'
import classes from './index.module.css'
import Badge from 'components/Badge'
import Link from 'next/link'
import Image from 'next/image'

function ExperienceWork(props){
    const [experienceWork, setExperienceWork] = useState('experiences')

    

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={classes.toggle_container}>
          <div
            className={classes.toggle}
            onClick={() => {
              setExperienceWork("experiences");
            }}
          >
            {experienceWork === "experiences" ? (
              <Badge>Experiences</Badge>
            ) : (
              <p className={classes.no_active}>Experience</p>
            )}
          </div>
          <div
            className={classes.toggle}
            onClick={() => {
              setExperienceWork("works");
            }}
          >
            {experienceWork === "works" ? (
              <Badge>Works</Badge>
            ) : (
              <p className={classes.no_active}>Works</p>
            )}
          </div>
        </div>

        {experienceWork === "experiences" && (
          <div style={{ margin: "1rem 0" }}>
            <div style={{ display: "flex", margin: ".5rem 0" }}>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.date}>August 2022 - August 2023</p>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.middle}>
                    Kominfo Member of Himaforka UAJY
                  </p>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.end}>HTML, CSS, Javascript</p>
                </Badge>
              </div>
            </div>

            <div style={{ display: "flex", margin: ".5rem 0" }}>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.date}>August 2022 - August 2023</p>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.middle}>
                    Kominfo Member of Himaforka UAJY
                  </p>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.end}>HTML, CSS, Javascript</p>
                </Badge>
              </div>
            </div>
          </div>
        )}

        {experienceWork === "works" && (
          <div style={{ margin: "1rem 0" }}>
            <div style={{ display: "flex", alignItems: 'center', margin: ".5rem 0" }}>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.date}>Inisiasi FTI UAJY</p>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <Link href="/" className={classes.middle}>
                    https://youtube.com
                  </Link>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <Image
                    className={classes.image}
                    src="/img/avatar.png"
                    width={1000}
                    height={1000}
                    alt="image"
                    quality="100"
                  ></Image>
                </Badge>
              </div>
            </div>
            
            <div style={{ display: "flex", alignItems: 'center', margin: ".5rem 0" }}>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <p className={classes.date}>Inisiasi FTI UAJY</p>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <Link href="/" className={classes.middle}>
                    https://youtube.com
                  </Link>
                </Badge>
              </div>
              <div style={{ margin: "0 .2rem" }}>
                <Badge>
                  <Image
                    className={classes.image}
                    src="/img/avatar.png"
                    width={1000}
                    height={1000}
                    alt="image"
                    quality="100"
                  ></Image>
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default ExperienceWork