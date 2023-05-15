import React from "react";
import NavBar from "../Components/NavBar";
import CardHome from "../Components/CardHome";
import Skills from "../Components/Skills";
import About from "../Components/About";
import Contact from "../Components/Contact";
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function App() {

    const { t, isLoaded } = useLaravelReactI18n();

    const name = "Simone Redighieri";
    const avatar =  "/images/avatar.png";

    return (
        <>
            { isLoaded() && <NavBar name={name} src={avatar} />}
            { isLoaded() && <CardHome name={name} info={t("Full Stack Web Developer | Engineer and Computer Science Student")}
                      src={avatar} /> }
            { isLoaded() && <Skills /> }
            { isLoaded() && <About /> }
            { isLoaded() && <Contact /> }
        </>
    )
}
