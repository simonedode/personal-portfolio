import '@maicol07/material-web-additions/layout-grid/layout-grid'
import '@material/web/button/outlined-link-button'
import {useEffect, useState} from "react";

export default function NavBar(props) {

    const [buttons, setButtons] = useState([
        {id: 1, label: "HOME", href: "#home-card"},
        {id: 2, label: "ABOUT", href: "#"},
        {id: 3, label: "SKILLS", href: "#card-skills"},
        {id: 4, label: "CONTACT", href: "#"},
    ]);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", controlNavBar);
        return () => window.removeEventListener("scroll", controlNavBar);
    }, [lastScrollY]);

    const controlNavBar = () => {
        window.scrollY > lastScrollY ? setShow(false) : setShow(true);
        setLastScrollY(window.scrollY);
    };

    const navButtons = buttons?.map(button =>
        <md-outlined-link-button key={button.id} label={button.label} href={button.href}></md-outlined-link-button>
    );

    return (
        <nav id="navbar" className={show ? "active" : "hidden"}>
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
