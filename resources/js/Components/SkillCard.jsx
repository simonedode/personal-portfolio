import {Line} from "rc-progress";

export default function SkillCard(props) {
    return (
        <div grid-span-desktop={6} grid-span-tablet={4}>
            <span>{props.name}</span>
            <Line percent={props.percentage} strokeWidth={1} />
        </div>
    )
}
