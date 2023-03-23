import '@material/web/divider/divider'
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@maicol07/material-web-additions/card/outlined-card';

export default function AboutItem(props) {
    return (
        <>
                <div grid-span={4} >
                    <md-outlined-card class="container about-card">
                        <h2 className="about-item-title">{props.title}</h2>
                        <p className="about-item-value">{props.value}</p>
                    </md-outlined-card>
                </div>
        </>
    )
}
