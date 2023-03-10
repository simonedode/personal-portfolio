import React from "react";
import NavBar from "../Components/NavBar";
import CardHome from "../Components/CardHome";
import Skills from "../Components/Skills";

export default function App() {

    const name = "Simone Redighieri";
    const avatar =  "/images/avatar2.png";

    return (
        <>
            <NavBar name={name} src={avatar}/>
            <CardHome name={name} info="Full Stack Web Developer | Engineer and Computer Science Student"
                      src={avatar}/>
            <Skills />
        </>
    )
}
