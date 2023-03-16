import AboutItem from "./AboutItem";
import '@maicol07/material-web-additions/card/outlined-card';

export default function About(props) {

    const about = props.sections?.map((item) =>
            <AboutItem key={item.id} title={item.title} value={item.value}/>
    )

    return (
        <md-outlined-card id="about">
            <h1 className="container">ABOUT</h1>
            <md-layout-grid>
                {about}
            </md-layout-grid>
        </md-outlined-card>
    )
}
