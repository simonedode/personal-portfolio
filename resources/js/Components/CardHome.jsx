import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/iconbutton/standard-link-icon-button';
import Icon from '@mdi/react';

export default function CardHome(props) {

    const icons = props.icons?.map(icon =>
        <md-standard-link-icon-button key={icon.id} linkHref={icon.href}>
            <Icon path={icon.path} size={1}/>
        </md-standard-link-icon-button>
    );

    return (
        <md-outlined-card id="home-card">
            <md-layout-grid>
                <div id="home-image" className="container" grid-span={6}>
                    <img className="profile" src={props.src} alt="Personal image"/>
                </div>
                <div className="container" grid-span={6}>
                    <h1>{props.name}</h1>
                    <h2>{props.info}</h2>
                    {icons}
                </div>
            </md-layout-grid>
        </md-outlined-card>
    )
}
