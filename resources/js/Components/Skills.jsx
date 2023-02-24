import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import SkillCard from "./SkillCard";
import {useState} from "react";

export default function Skills() {

    const [skills, setSkills] = useState([
        {id: 1, name: "HTML5", percentage: 95},
        {id: 2, name: "CSS3", percentage: 95},
        {id: 3, name: "JavaScript", percentage: 70},
        {id: 4, name: "PHP", percentage: 80},
        {id: 5, name: "Java", percentage: 90},
        {id: 6, name: "C#", percentage: 80},
        {id: 7, name: "C", percentage: 80},
        {id: 8, name: "MySQL", percentage: 90},
        {id: 9, name: "Laravel", percentage: 90},
        {id: 10, name: "ReactJS", percentage: 70},
        {id: 11, name: "Git", percentage: 85},
    ]);

    const skillsCard = skills?.map(skill =>
        <SkillCard key={skill.id} name={skill.name} percentage={skill.percentage} />
    );

    return (
        <md-outlined-card id="card-skills">
            <h2>SKILLS</h2>
            <md-layout-grid>
                {skillsCard}
            </md-layout-grid>
        </md-outlined-card>
    )
}
