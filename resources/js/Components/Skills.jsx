import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import SkillCard from "./SkillCard";
import {useLaravelReactI18n} from "laravel-react-i18n";

const skills = [
    {id: 1, name: "HTML5", percentage: 95, src: "images/skills/html.png"},
    {id: 2, name: "CSS3", percentage: 95, src: "images/skills/css.png"},
    {id: 3, name: "JavaScript", percentage: 70, src: "images/skills/javascript.png"},
    {id: 4, name: "PHP", percentage: 80, src: "images/skills/php.png"},
    {id: 5, name: "Java", percentage: 90, src: "images/skills/java.png"},
    {id: 6, name: "C#", percentage: 80, src: "images/skills/cs.png"},
    {id: 7, name: "C", percentage: 80, src: "images/skills/c.png"},
    {id: 8, name: "MySQL", percentage: 90, src: "images/skills/mysql.png"},
    {id: 9, name: "Laravel", percentage: 90, src: "images/skills/laravel.png"},
    {id: 10, name: "ReactJS", percentage: 70, src: "images/skills/react.png"},
    {id: 11, name: "Git", percentage: 85, src: "images/skills/git.png"},
];

export default function Skills() {

    const { t } = useLaravelReactI18n();

    const skillsCard = skills?.map(skill =>
        <SkillCard key={skill.id} name={skill.name} percentage={skill.percentage} src={skill.src}/>
    );

    return (
        <md-outlined-card id="card-skills">
            <h2>{t("SKILLS")}</h2>
            <md-layout-grid>
                {skillsCard}
            </md-layout-grid>
        </md-outlined-card>
    )
}
