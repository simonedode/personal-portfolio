import React from "react";
import {mdiGithub, mdiInstagram, mdiLinkedin} from "@mdi/js";
import NavBar from "../Components/NavBar";
import CardHome from "../Components/CardHome";
import Skills from "../Components/Skills";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: [
                {id: 1, path: mdiGithub, href: "https://github.com/simonedode"},
                {id: 2, path: mdiLinkedin, href: "https://www.linkedin.com/in/simone-redighieri-b4aa31252"},
                {id: 3, path: mdiInstagram, href: "https://www.instagram.com/simone_dode"},
            ],
            navButtons: [
                {id: 1, label: "HOME", href: "#home-card"},
                {id: 2, label: "ABOUT", href: "#"},
                {id: 3, label: "SKILLS", href: "#card-skills"},
                {id: 4, label: "CONTACT", href: "#"},
            ],
        }
    }

    render() {
        const name = "Simone Redighieri";
        const avatar =  "/images/avatar2.png";

        return (
            <>
                <NavBar name={name} src={avatar} buttons={this.state.navButtons}/>
                <CardHome name={name} info="Full Stack Web Developer | Engineer and Computer Science Student"
                          src={avatar} icons={this.state.icons}/>
                <Skills />
            </>
        )
    }
}
