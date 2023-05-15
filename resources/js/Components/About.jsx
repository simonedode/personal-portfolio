import '@maicol07/material-web-additions/card/outlined-card';
import '@maicol07/material-web-additions/layout-grid/layout-grid';
import '@material/web/divider/divider';
import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import {mdiSchool} from "@mdi/js";
import Icon from "@mdi/react";
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function About() {

    const { t } = useLaravelReactI18n();

    return (
        <md-outlined-card class="container" id="about">
            <h1>{t("ABOUT ME")}</h1>
            <md-divider/>
                <h2>{t("I'm Simone")}</h2>
                <h3>{t("Full Stack Web Developer | Engineer and Computer Science Student")}</h3>
                <p>{t("I am a Full Stack Web Developer based in Rimini, Italy. I am reaching a Bachelor's Degree in Engineering and Computer Science in Cesena.")}<br/>
                    {t("I am very passionate about improving my")} <u>{t("coding skills")}</u> & <u>{t("developing applications")}</u> & <u>{t("websites")}</u>.<br/>
                    {t("I can count on a strong motivation and the desire to learn and grow professionally as a Web Developer proactively contributing to the achievement of individual and team goals.")}</p>
                <md-divider/>
            {/*TODO: sistemare il margin -3*/}
                <h2>{t("INSTRUCTION")}{<Icon path={mdiSchool} size={1} style={{"marginBottom": "-3px"}}/>}</h2>
                <div id="instruction">
                    <ActionAreaCard path="/images/serpieri.jpg" alt="" title={t("Scientific High School - Alessandro Serpieri")}
                                    body={t("2015 - 2020 | Completed")} href="https://www.liceoserpieri.it/"/>
                    <ActionAreaCard path="/images/alma-mater-studiorum.jpeg" alt="" title={t("Alma Mater Studiorum - Engineer and Computer Science")}
                                    body={t("2020 - | Earning")} href="https://corsi.unibo.it/laurea/IngegneriaScienzeInformatiche/index.html"/>
                </div>
        </md-outlined-card>
    )
}
