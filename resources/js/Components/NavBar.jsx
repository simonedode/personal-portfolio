import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/button/outlined-button';
import {useEffect, useState} from "react";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import LanguagePicker from "./LanguagePicker";
import {useLaravelReactI18n} from "laravel-react-i18n";
import Icon from "@mdi/react";
import {mdiClose, mdiMenu} from "@mdi/js";
import "@material/web/menu/menu";
import "@material/web/menu/menu-item-link";
import "@material/web/iconbutton/outlined-icon-button"

export default function NavBar(props) {

    const { t } = useLaravelReactI18n()

    const buttons = [
        {id: 1, label: t("HOME"), href: "#home-card"},
        {id: 2, label: t("SKILLS"), href: "#card-skills"},
        {id: 3, label: t("ABOUT"), href: "#about"},
        {id: 4, label: t("CONTACT"), href: "#contact"},
    ];

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isToggled, setToggled] = useState((localStorage.getItem("selected-theme") ?? "light") === "light");
    const [isScrollByButton, setScrollByButton] = useState(false);

    const [isMenuOpen, setMenuOpen] = useState(false);

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
        <md-outlined-button className="nav-button" key={button.id} href={button.href}
                                 onClick={() => setScrollByButton(true)}>{button.label}</md-outlined-button>
    );

    return (
        <nav id="navbar" className={show ? "active" : "hidden"}>
            <md-layout-grid>
                <div id="nav-profile" grid-span-desktop={4} grid-span-phone={2} grid-span-tablet={4}>
                    <span id="open-menu">
                        <md-outlined-icon-button toggle onClick={() => setMenuOpen(!isMenuOpen)} selectedAriaLabel="open menu">
                            <Icon path={mdiMenu} size={1.3} />
                            <Icon path={mdiClose} size={1.3} slot="selectedIcon"/>
                        </md-outlined-icon-button>
                        {/*TODO: open menu and Accessibility*/}
                        <md-menu id="nav-menu" open={isMenuOpen}>
                            <md-menu-item-link header="Home" href="#home-card" />
                        </md-menu>
                    </span>
                    <a href="#home-card" onClick={() => setScrollByButton(true)}>
                        <img className="profile" src={props.src} alt={t("alt")}/>
                    </a>
                    <a href="#home-card" onClick={() => setScrollByButton(true)}>
                        <h1>{props.name}</h1>
                    </a>
                </div>
                <div id="navbar-buttons" className="container" grid-span-desktop={5} grid-align="middle">
                    {navButtons}
                </div>
                <div id="navbar-span" grid-span-desktop={4}></div>
                <div className="container" grid-span-desktop={3} grid-span-phone={2} grid-span-tablet={4} grid-align="middle">
                    <div id="container-top">
                        <LanguagePicker />
                        <Classic id="theme" duration={750} toggled={isToggled} toggle={setToggled}/>
                    </div>
                </div>
            </md-layout-grid>
        </nav>
    )
}
