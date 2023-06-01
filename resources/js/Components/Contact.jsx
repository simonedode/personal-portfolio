import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import FormContact from "./FormContact";
import Icon from "@mdi/react";
import {mdiRocketLaunch} from "@mdi/js";
import ContactDetails from "./ContactDetails";
import {useLaravelReactI18n} from "laravel-react-i18n";
export default function Contact() {

    const { t } = useLaravelReactI18n();

    return (
        <>
            <md-outlined-card id="contact">
                <h1>{t("CONTACT")}</h1>
                <h2>{t("Send me a message")}!
                <Icon id="icon-rocket" path={mdiRocketLaunch} size={1} style={{"color": "var(--md-sys-color-on-surface)"}}/></h2>
                <md-layout-grid id="contact-container">
                    <div grid-span-desktop={8} grid-span-tablet={8} grid-span-phone={4}>
                        <FormContact />
                    </div>
                    <div grid-span-desktop={4} grid-span-tablet={8} grid-span-phone={4}>
                        <ContactDetails />
                    </div>
                </md-layout-grid>
            </md-outlined-card>
        </>
    )
}
