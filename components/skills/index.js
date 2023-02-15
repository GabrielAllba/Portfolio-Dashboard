import SkillItem from './SkillItem'
import classes from './index.module.css'

function Skills(props){
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h3>Skills</h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
                <SkillItem></SkillItem>
            </div>
        </div>
    )
}

export default Skills