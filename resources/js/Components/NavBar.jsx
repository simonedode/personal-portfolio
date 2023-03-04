import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/button/outlined-link-button';
import '@material/web/switch/switch';
import {useEffect, useState} from "react";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

export default function NavBar(props) {

    const [buttons, setButtons] = useState([
        {id: 1, label: "HOME", href: "#home-card"},
        {id: 2, label: "ABOUT", href: "#"},
        {id: 3, label: "SKILLS", href: "#card-skills"},
        {id: 4, label: "CONTACT", href: "#"},
    ]);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isToggled, setToggled] = useState(true);

    useEffect(() => {
        document.querySelector("body").setAttribute("data-theme", isToggled ? "light" : "dark");
    }, [isToggled]);

    useEffect(() => {
        window.addEventListener("scroll", controlNavBar);
        return () => window.removeEventListener("scroll", controlNavBar);
    }, [lastScrollY]);

    const controlNavBar = () => {
        window.scrollY > lastScrollY ? setShow(false) : setShow(true);
        setLastScrollY(window.scrollY);
    };

    const navButtons = buttons?.map(button =>
        <md-outlined-link-button style={{"--_label-text-color": "var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, var(--nav-button-color))"}}
                                 className="nav-button" key={button.id} label={button.label} href={button.href}></md-outlined-link-button>
    );

    return (
        <nav id="navbar" className={show ? "active" : "hidden"}>
            <md-layout-grid>
                <div id="nav-profile" grid-span={5}>
                    <img className="profile" src={props.src} alt="Personal image"/>
                    <h1>{props.name}</h1>
                </div>
                <div grid-span={6} grid-align="middle">
                    {navButtons}
                </div>
                <div grid-span={1} grid-align="middle">
                    <Classic id="theme" duration={750} toggled={isToggled} toggle={setToggled}/>
                </div>
            </md-layout-grid>
        </nav>
    )
}
