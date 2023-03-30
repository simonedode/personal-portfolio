import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/button/outlined-link-button';
import '@material/web/switch/switch';
import {useEffect, useState} from "react";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

export default function NavBar(props) {

    const [buttons, setButtons] = useState([
        {id: 1, label: "HOME", href: "#home-card"},
        {id: 2, label: "SKILLS", href: "#card-skills"},
        {id: 3, label: "ABOUT", href: "#about"},
        {id: 4, label: "CONTACT", href: "#contact"},
    ]);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isToggled, setToggled] = useState((localStorage.getItem("selected-theme") ?? "light") === "light");
    const [isScrollByButton, setScrollByButton] = useState(false);

    useEffect(() => {
        localStorage.setItem("selected-theme", isToggled ? "light" : "dark");
        document.querySelector("body").setAttribute("data-theme", localStorage.getItem("selected-theme"));
    }, [isToggled]);

    useEffect(() => {
        sectionsY = buttons.map(button => document.querySelector(button.href).offsetTop) ?? [];
    })

    let sectionsY = []

    const controlNavBar = () => {
        if (isScrollByButton && sectionsY.includes(Math.round(window.scrollY))) {
            setShow(false);
            setLastScrollY(window.scrollY - 1); //TODO: check it doesn't work without "-1"
            setScrollByButton(false);
        } else {
            window.scrollY > lastScrollY ? setShow(false) : setShow(true);
            setLastScrollY(window.scrollY);
        }
    };

    window.addEventListener("scroll", controlNavBar);

    const navButtons = buttons?.map(button =>
        <md-outlined-link-button style={{"--_label-text-color": "var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, var(--nav-button-color))"}}
                                 className="nav-button" key={button.id} label={button.label} href={button.href}
                                 onClick={() => setScrollByButton(true)}></md-outlined-link-button>
    );

    return (
        <nav id="navbar" className={show ? "active" : "hidden"}>
            <md-layout-grid>
                <div id="nav-profile" grid-span={5}>
                    <a href="#home-card" onClick={() => setScrollByButton(true)}>
                        <img className="profile" src={props.src} alt="Personal image"/>
                    </a>
                    <a href="#home-card" onClick={() => setScrollByButton(true)}>
                        <h1>{props.name}</h1>
                    </a>
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
