import React from "react";
import NavBar from "../Components/NavBar";
import CardHome from "../Components/CardHome";
import Skills from "../Components/Skills";
import About from "../Components/About";
import Contact from "../Components/Contact";

export default function App() {

    const name = "Simone Redighieri";
    const avatar =  "/images/avatar2.png";
    const about = [
        {id: 1, title: "Name", value: "Simone"},
        {id: 2, title: "Surname", value: "Redighieri"},
        {id: 3, title: "Age", value: 21},
        {id: 4, title: "Nationality", value: "Italian"},
        {id: 5, title: "City", value: "Rimini, Italy"},
        {id: 6, title: "Instruction", value: <a href=' https://corsi.unibo.it/laurea/IngegneriaScienzeInformatiche/index.html'>Alma Mater Studiorum - Engineer and Computer Science</a>},
        {id: 7, title: "Personality", value: "Enterprising and determined personality, I am reaching a Bachelor's Degree in " +
                "Engineering and Computer Science in Cesena. I can count on a strong motivation and the " +
                "desire to learn and grow professionally as a Web Developer, " +
                "proactively contributing to the achievement of individual and team goals."},
        {id: 8, title: "Language Skills", value: "English: B1"},
        {id: 9, title: "Hobby", value: "Gym, Football"},
    ]

    return (
        <>
            <NavBar name={name} src={avatar}/>
            <CardHome name={name} info="Full Stack Web Developer | Engineer and Computer Science Student"
                      src={avatar}/>
            <Skills />
            <About sections={about}/>
            <Contact />
        </>
    )
}
