import '@material/web/divider/divider'
import '@maicol07/material-web-additions/layout-grid/layout-grid'

export default function AboutItem(props) {
    return (
        <>
            <md-layout-grid>
                <div className="container about-item-title" grid-span={6} grid-align="middle"><h2>{props.title}</h2></div>
                <div className="container about-item-value" grid-span={6} grid-align="middle">{props.value}</div>
                <md-divider grid-span={12}/>
            </md-layout-grid>
        </>
    )
}
