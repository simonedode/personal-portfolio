import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/iconbutton/standard-icon-button';
import Icon from '@mdi/react';
import {mdiGithub, mdiInstagram, mdiLinkedin} from "@mdi/js";
import {useLaravelReactI18n} from "laravel-react-i18n";

const icons = [
    {id: 1, path: mdiGithub, href: "https://github.com/simonedode"},
    {id: 2, path: mdiLinkedin, href: "https://www.linkedin.com/in/simone-redighieri-b4aa31252"},
    {id: 3, path: mdiInstagram, href: "https://www.instagram.com/simone_dode"},
];

export default function CardHome(props) {

    const { t } = useLaravelReactI18n();

    const iconButtons = icons?.map(icon =>
        <md-standard-icon-button key={icon.id} href={icon.href}
                                 selectedAriaLabel={"navigate to " + (icon.id === 1 ? "GitHub" : icon.id === 2 ? "Linkedin" : "Instagram")}>
            <Icon path={icon.path} size={1} style={{"color": "var(--md-sys-color-on-surface)"}}/>
        </md-standard-icon-button>
    );

    return (
        <md-outlined-card id="home-card">
            <md-layout-grid>
                <div id="home-image" className="container" grid-span-desktop={6} grid-span-tablet={8} grid-span-phone={4}>
                    <img className="profile" src={props.src} alt={t("profile image")}/>
                </div>
                <div className="container" grid-span-desktop={6} grid-span-tablet={8} grid-span-phone={4}>
                    <h1>{props.name}</h1>
                    <h2>{props.info}</h2>
                    {iconButtons}
                </div>
            </md-layout-grid>
        </md-outlined-card>
    )
}
