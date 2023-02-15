import classes from './index.module.css'
import { Container } from '@mui/system'
import Button from 'components/Button';
import ToggleTheme from 'components/ToggleTheme';
import Image from 'next/image'
import Link from 'next/link';
import {
  AiOutlineTrophy,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

function Layout(props){

    return (
      <div className={classes.relative}>
        <div className={classes.fixed}>
          <Container maxWidth="xl">
            <nav className={classes.navigation}>
              <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  className={classes.image}
                  src="/img/logo_profile.png"
                  width={1000}
                  height={1000}
                  alt="image"
                  quality="100"
                ></Image>
                
              </div>
              <div className={classes.link_container}>
                <div className={classes.margin}>
                  <Button>
                    <Link href="/" className={classes.link_text}>
                      Home
                    </Link>
                  </Button>
                </div>
                <div className={classes.margin}>
                  <Button>
                    <Link href="/" className={classes.link_text}>
                      Logout
                    </Link>
                  </Button>
                </div>
                <div className={classes.margin}>
                  <ToggleTheme></ToggleTheme>
                </div>
            
              </div>
            </nav>
          </Container>
        </div>
        <div className={classes.fix_content}>
          <div className={classes.side}>
            <div className={classes.fixed_left}>
              <div className={classes.real_sidebar}>
                <Link href="/" className={classes.nodesign}>
                  <div className={classes.list + " " + classes.list_active}>
                    <AiOutlineHome className={classes.icon}></AiOutlineHome>
                    <p>Overview</p>
                  </div>
                </Link>
                <Link href="/profile" className={classes.nodesign}>
                  <div className={classes.list}>
                    <AiOutlineHome className={classes.icon}></AiOutlineHome>
                    <p>Profile</p>
                  </div>
                </Link>
                <Link href="/skills" className={classes.nodesign}>
                  <div className={classes.list}>
                    <AiOutlineHome className={classes.icon}></AiOutlineHome>
                    <p>Skills</p>
                  </div>
                </Link>
                <Link href="/ExperiencesWork" className={classes.nodesign}>
                  <div className={classes.list}>
                    <AiOutlineHome className={classes.icon}></AiOutlineHome>
                    <p>Experiences | Work</p>
                  </div>
                </Link>
                <Link href="/awards" className={classes.nodesign}>
                  <div className={classes.list}>
                    <AiOutlineHome className={classes.icon}></AiOutlineHome>
                    <p>Awards</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.real_content}>
            {props.children}
          </div>
        </div>
      </div>
    );
}

export default Layout