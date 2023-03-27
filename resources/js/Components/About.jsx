import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/divider/divider';
import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import {mdiSchool} from "@mdi/js";
import Icon from "@mdi/react";

export default function About(props) {

    return (
        <md-outlined-card class="container" id="about">
            <h1>ABOUT ME</h1>
            <md-divider/>
                <h2>I'm Simone</h2>
                <h3>Full Stack Web Developer | Engineer and Computer Science Student</h3>
                <p>I am a Full Stack Web Developer based in Rimini, Italy. I am reaching a Bachelor's Degree in
                    Engineering and Computer Science in Cesena.<br/>
                I am very passionate about improving my <u>coding skills</u> & <u>developing
                    applications</u> & <u>websites</u>.<br/>
                I can count on a strong motivation and the desire to learn and grow professionally as a Web Developer
                    proactively contributing to the achievement of individual and team goals.</p>
                <md-divider/>
                <h2>INSTRUCTION{<Icon path={mdiSchool} size={1} style={{"marginBottom": "-3px"}}/>}</h2>
                <div id="instruction">
                    <ActionAreaCard path="/images/serpieri.jpg" alt="Scientific High School image" title="Scientific High School - Alessandro Serpieri"
                                    body="2015 - 2020 | Completed" href="https://www.liceoserpieri.it/"/>
                    <ActionAreaCard path="/images/alma-mater-studiorum.jpeg" alt="University image" title="Alma Mater Studiorum - Engineer and Computer Science"
                                    body="2020 - | Pursuing" href="https://corsi.unibo.it/laurea/IngegneriaScienzeInformatiche/index.html"/>
                </div>
        </md-outlined-card>
    )
}
