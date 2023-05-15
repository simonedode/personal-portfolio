import Icon from "@mdi/react";

export default function ContactDetailsItem(props) {
    return (
        <div className="details-item">
            <Icon path={props.path} size={1} style={{"color": "var(--md-sys-color-on-surface)","marginRight": "3px"}}/>
            {props.value}
        </div>
    )
}
