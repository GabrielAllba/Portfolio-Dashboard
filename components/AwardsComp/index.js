
import classes from './index.module.css'
import Image from 'next/image';
function AwardsComp(){
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Awards</h3>
        <table className={classes.container}>
          <tbody className={classes.table_body}>
            <tr className={classes.up_container}>
              <th className={classes.title}>Title</th>
              <th className={classes.title}>Information</th>
              <th className={classes.title}>Image</th>
              <th className={classes.title}>Skills</th>
            </tr>

            <tr className={classes.bottom_container}>
              <td className={classes.data}>
                <div className={classes.data_inner}>datainner</div>
              </td>
              <td className={classes.data}>
                <div className={classes.data_inner}>datainner</div>
              </td>
              <td className={classes.data}>
                <Image
                  className={classes.avatar}
                  src="/img/avatar.png"
                  width={1000}
                  height={1000}
                  alt="image"
                  quality="100"
                ></Image>
              </td>
              <td className={classes.data}>
                <div className={classes.data_inner}>HTML , CSS, Javascript</div>
              </td>
            </tr>
            <tr className={classes.bottom_container}>
              <td className={classes.data}>
                <div className={classes.data_inner}>datainner</div>
              </td>
              <td className={classes.data}>
                <div className={classes.data_inner}>datainner</div>
              </td>
              <td className={classes.data}>
                <Image
                  className={classes.avatar}
                  src="/img/avatar.png"
                  width={1000}
                  height={1000}
                  alt="image"
                  quality="100"
                ></Image>
              </td>
              <td className={classes.data}>
                <div className={classes.data_inner}>HTML , CSS, Javascript</div>
              </td>
            </tr>
            <tr className={classes.bottom_container}>
              <td className={classes.data}>
                <div className={classes.data_inner}>datainner</div>
              </td>
              <td className={classes.data}>
                <div className={classes.data_inner}>datainner</div>
              </td>
              <td className={classes.data}>
                <Image
                  className={classes.avatar}
                  src="/img/avatar.png"
                  width={1000}
                  height={1000}
                  alt="image"
                  quality="100"
                ></Image>
              </td>
              <td className={classes.data}>
                <div className={classes.data_inner}>HTML , CSS, Javascript</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default AwardsComp