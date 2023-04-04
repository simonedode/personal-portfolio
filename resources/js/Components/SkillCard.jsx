import {Line} from "rc-progress";

export default function SkillCard(props) {
    return (
        <div className="skill-card" grid-span-desktop={6} grid-span-tablet={4}>
            <span>
                {props.name}
                <img className="skill-image" src={props.src} alt=""/>
            </span>
            <Line percent={props.percentage} strokeWidth={1} strokeColor={"var(--progress-bar-color)"} />
        </div>
    )
}
