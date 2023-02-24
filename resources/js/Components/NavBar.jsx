import '@maicol07/material-web-additions/layout-grid/layout-grid'
import '@material/web/button/outlined-link-button'
import {useState} from "react";

export default function NavBar(props) {

    const [buttons, setButtons] = useState([
        {id: 1, label: "HOME", href: "#home-card"},
        {id: 2, label: "ABOUT", href: "#"},
        {id: 3, label: "SKILLS", href: "#card-skills"},
        {id: 4, label: "CONTACT", href: "#"},
    ])

    const navButtons = buttons?.map(button =>
        <md-outlined-link-button key={button.id} label={button.label} href={button.href}></md-outlined-link-button>
    );

    return (
        <nav>
            <md-layout-grid>
                <div id="nav-profile" grid-span={5}>
                    <img className="profile" src={props.src} alt="Personal image"/>
                    <h1>{props.name}</h1>
                </div>
                <div grid-span={7} grid-align="middle">
                    {navButtons}
                </div>
            </md-layout-grid>
        </nav>
    )
}
