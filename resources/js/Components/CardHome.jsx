import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/iconbutton/outlined-icon-button';
import Icon from '@mdi/react';
import {mdiGithub, mdiInstagram, mdiLinkedin} from "@mdi/js";
import {useState} from "react";

export default function CardHome(props) {

    const t = props.translate;

    const [icons, setIcons] = useState([
        {id: 1, path: mdiGithub, href: "https://github.com/simonedode"},
        {id: 2, path: mdiLinkedin, href: "https://www.linkedin.com/in/simone-redighieri-b4aa31252"},
        {id: 3, path: mdiInstagram, href: "https://www.instagram.com/simone_dode"},
    ]);

    const iconButtons = icons?.map(icon =>
        <md-outlined-icon-button key={icon.id} href={icon.href}>
            <Icon path={icon.path} size={1} style={{"color": "var(--text-color)"}}/>
        </md-outlined-icon-button>
    );

    return (
        <md-outlined-card id="home-card">
            <md-layout-grid>
                <div id="home-image" className="container" grid-span={6}>
                    <img className="profile" src={props.src} alt={t("profile image")}/>
                </div>
                <div className="container" grid-span={6}>
                    <h1>{props.name}</h1>
                    <h2>{props.info}</h2>
                    {iconButtons}
                </div>
            </md-layout-grid>
        </md-outlined-card>
    )
}
