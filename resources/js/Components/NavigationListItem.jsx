import Icon from "@mdi/react";

export default function NavigationListItem(props) {
    const close = (e, href) => {
        e.preventDefault()
        props.closeMenu()
        window.location = href
    }

    return (
        <md-list-item href={props.href} headline={props.text} onFocus={(e)=>close(e, props.href)}>
            <div slot="start" style={{marginLeft: "16px"}}>
                <Icon path={props.path} size={1} />
            </div>
        </md-list-item>
    )
}
