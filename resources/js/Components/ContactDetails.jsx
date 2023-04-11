import ContactDetailsItem from "./ContactDetailsItem";
import {mdiEmail, mdiGithub, mdiHome, mdiInstagram, mdiLinkedin, mdiPhone} from "@mdi/js";
import Icon from "@mdi/react";

export default function ContactDetails(props) {

    const t = props.translate;

    const details = [
        {path: mdiEmail, value: "simonedode10@gmail.com"},
        {path: mdiPhone, value: "3420079367"},
        {path: mdiHome, value: t("Via Pastore n°26, Rimini, Italy")}
    ];

    const iconButtons = ([
        {id: 1, path: mdiGithub, href: "https://github.com/simonedode"},
        {id: 2, path: mdiLinkedin, href: "https://www.linkedin.com/in/simone-redighieri-b4aa31252"},
        {id: 3, path: mdiInstagram, href: "https://www.instagram.com/simone_dode"},
    ]);

    const social = iconButtons?.map((icon, key) =>
        <md-standard-link-icon-button key={key} linkHref={icon.href}>
            <Icon path={icon.path} size={1} style={{"color": "var(--text-color)"}}/>
        </md-standard-link-icon-button>
    );

    return (
        <div id="details">
            <h3>{t("Contact Details")}</h3>
                {details.map((detail, key) => <ContactDetailsItem key={key} path={detail.path} value={detail.value}/>)}
            <h3>{t("Social")}</h3>
            {social}
        </div>
    )
}
