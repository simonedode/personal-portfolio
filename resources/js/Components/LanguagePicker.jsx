import {router, usePage} from "@inertiajs/react";
import {useEffect, useState} from "react";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import Flag from "react-flagkit";
import Icon from "@mdi/react";
import {mdiTriangleSmallDown} from "@mdi/js";

export default function LanguagePicker(props) {

    const t = props.translate;
    const setLang = props.setLang;

    const { locale } = usePage().props;
    const [language, setLanguage] = useState(locale ?? "en");

    useEffect(() => {
        if (props.loaded) {
            setLang(language);
        }
    }, [language])

    const handleChangeLang = (e) => {
        e.preventDefault();
        const lang = e.target.value;
        router.post("/lang/" + lang, null, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setLanguage(lang);
            }
        })
    }

    return (
        <>
            <md-outlined-select hasLeadingIcon onInput={handleChangeLang} style={{minWidth: "auto"}} value={language}>
                <div slot="leadingicon">{<Flag country={language === "en" ? "GB" : "IT"}/>}</div>
                <div slot="trailingicon">{<Icon path={mdiTriangleSmallDown} size={1}/>}</div>
                <md-select-option value="en" headline={t('English')} /*selected={language === "en"}*/>
                    <div slot="start" style={{marginLeft: "10px", marginTop: "2px"}}>
                        <Flag country="GB"/>
                    </div>
                </md-select-option>
                <md-select-option value="it" headline={t('Italian')} >
                    <div slot="start" style={{marginLeft: "10px", marginTop: "2px"}}>
                        <Flag country="IT"/>
                    </div>
                </md-select-option>
            </md-outlined-select>
        </>
    )
}
