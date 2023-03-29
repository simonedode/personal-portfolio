import '@maicol07/material-web-additions/card/outlined-card';
import FormContact from "./FormContact";
import Icon from "@mdi/react";
import {mdiRocketLaunch} from "@mdi/js";
import ContactDetails from "./ContactDetails";
export default function Contact() {
    return (
        <>
            <md-outlined-card id="contact">
                <h1>CONTACT</h1>
                <h2>Send me a message!
                <Icon id="icon-rocket" path={mdiRocketLaunch} size={1} style={{"color": "var(--text-color)"}}/></h2>
                <div id="contact-container">
                    <FormContact />
                    <ContactDetails />
                </div>
            </md-outlined-card>
        </>
    )
}