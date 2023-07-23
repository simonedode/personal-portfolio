import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/button/outlined-button';
import {useEffect, useRef, useState} from "react";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import LanguagePicker from "./LanguagePicker";
import {useLaravelReactI18n} from "laravel-react-i18n";
import Icon from "@mdi/react";
import {mdiApplicationBracketsOutline, mdiClose, mdiEmail, mdiHome, mdiMenu, mdiSchool} from "@mdi/js";
import "@material/web/iconbutton/outlined-icon-button";
import "@material/web/labs/navigationdrawer/navigation-drawer-modal";
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/elevation/elevation";
import NavigationListItem from "./NavigationListItem";

export default function NavBar(props) {

    const { t } = useLaravelReactI18n()

    const destinations = [
        {id: 1, label: t("HOME"), href: "#home-card", path: mdiHome},
        {id: 2, label: t("SKILLS"), href: "#card-skills", path: mdiApplicationBracketsOutline},
        {id: 3, label: t("ABOUT"), href: "#about", path: mdiSchool},
        {id: 4, label: t("CONTACT"), href: "#contact", path: mdiEmail},
    ];

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isToggled, setToggled] = useState((localStorage.getItem("selected-theme") ?? "light") === "light");
    const [isScrollByButton, setScrollByButton] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navigationDrawer = useRef(null)
    const isNavDrawerMount = useRef(false)

    useEffect(() => {
        //Set the application's theme
        localStorage.setItem("selected-theme", isToggled ? "light" : "dark");
        document.querySelector("body").setAttribute("data-theme", localStorage.getItem("selected-theme"));
    }, [isToggled]);

    useEffect(() => {
        sectionsY = destinations.map(button => document.querySelector(button.href).offsetTop) ?? [];
        if (!isNavDrawerMount.current && navigationDrawer.current.shadowRoot.childNodes.length >= 4) {
            navigationDrawer.current.shadowRoot.childNodes[4].style.zIndex = 50
            navigationDrawer.current.shadowRoot.childNodes[4].style.boxShadow = "0px 0px 5px"
            navigationDrawer.current.shadowRoot.childNodes[4].style.position = "fixed"
            isNavDrawerMount.current = true
        }
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
    window.addEventListener('click', (e) => {
        if(navigationDrawer.current !== null && e.target.id !== "close-menu"){
            setMenuOpen(navigationDrawer.current.contains(e.target) || e.target.id === "open-menu-button")
        }
    });

    const navButtons = destinations?.map(destination =>
        <md-outlined-button className="nav-button" key={destination.id} href={destination.href}
                                 onClick={() => setScrollByButton(true)}>{destination.label}</md-outlined-button>
    );
    const closeMenu = () => {
        setMenuOpen(false)
        setScrollByButton(true)
    }

    const navListItems = destinations.map(destination =>
        <NavigationListItem key={destination.id} href={destination.href} text={destination.label} path={destination.path} closeMenu={closeMenu} />
    )

    return (
        <>
        <nav id="navbar" className={show ? "active" : "hidden"}>
            <md-layout-grid>
                <div id="nav-profile" grid-span-desktop={4} grid-span-phone={2} grid-span-tablet={4}>
                    <span id="open-menu">
                        <md-outlined-icon-button id="open-menu-button" onClick={() => setMenuOpen(true)} selectedAriaLabel="open menu">
                            <Icon path={mdiMenu} size={1} />
                        </md-outlined-icon-button>
                    </span>
                    <a href="#home-card" onClick={() => setScrollByButton(true)}>
                        <img className="profile" src={props.src} alt={t("alt")}/>
                    </a>
                    {/*TODO: Remove text when device is phone*/}
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
        <md-navigation-drawer-modal id="nav-menu" opened={isMenuOpen ? true : undefined} ref={navigationDrawer}>
            <span>
                <h1>{t("Destinations")}</h1>
                <md-outlined-icon-button id="close-menu" onClick={() => setMenuOpen(false)} selectedAriaLabel="close menu">
                    <Icon path={mdiClose} size={1} />
                </md-outlined-icon-button>
            </span>
            <md-list>
                {navListItems}
            </md-list>
        </md-navigation-drawer-modal>
    </>
    )
}
