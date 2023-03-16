import '@material/web/divider/divider'
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@maicol07/material-web-additions/card/outlined-card';

export default function AboutItem(props) {
    return (
        <>
            {/*<md-layout-grid>
                <div className="container about-item-title" grid-span={6} grid-align="middle"><h2>{props.title}</h2></div>
                <div className="container about-item-value" grid-span={6} grid-align="middle">{props.value}</div>*/}
                <div grid-span={4} >
                    <md-outlined-card class="container about-card" style={{"width": "100%"}}>
                        <h2 className="about-item-title">{props.title}</h2>
                        <p className="about-item-value">{props.value}</p>
                    </md-outlined-card>
                </div>
{/*
                <md-divider grid-span={12}/>
*/}
           {/* </md-layout-grid>*/}
        </>
    )
}
