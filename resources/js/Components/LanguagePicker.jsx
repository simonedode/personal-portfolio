import {router, usePage} from "@inertiajs/react";
import {useEffect, useRef, useState} from "react";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import Flag from "react-flagkit";
import Icon from "@mdi/react";
import {mdiTriangleSmallDown} from "@mdi/js";
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function LanguagePicker() {
    const { t, setLang, isLoaded } = useLaravelReactI18n();

    const { locale } = usePage().props;
    const [language, setLanguage] = useState(locale ?? "en");
    const [isPhoneDevice, setPhoneDevice] = useState(window.innerWidth < 600)
    const select = useRef(null)

    useEffect(() => {
        if (isLoaded()) {
            setLang(language);
        }
    }, [language])

    useEffect(()=> {
        if (select.current && select.current.shadowRoot) {
            const shadowRoot = select.current.shadowRoot
            if(shadowRoot.childNodes.length >= 3 && shadowRoot.childNodes[2].childNodes.length >= 8){
                select.current.shadowRoot.childNodes[2].childNodes[7].style.minWidth = "152px"
            }
        }
    })

    window.onresize = () => {
        setPhoneDevice(window.innerWidth < 600)
    }

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
            <md-outlined-select hasLeadingIcon onInput={handleChangeLang} style={{minWidth: "auto"}} value={language} ref={select}
                                displayText={!isPhoneDevice ? (language === "en" ? t('English') : t('Italian')) : ""}>
                <div slot="leadingicon">{<Flag country={language === "en" ? "GB" : "IT"}/>}</div>
                <div slot="trailingicon">{<Icon path={mdiTriangleSmallDown} size={1}/>}</div>
                <md-select-option value="en" headline={isPhoneDevice ? "" : t('English')}>
                    <div slot="start" style={{marginLeft: "10px", marginTop: "2px"}}>
                        <Flag country="GB"/>
                    </div>
                </md-select-option>
                <md-select-option value="it" headline={isPhoneDevice ? "" : t('Italian')}>
                    <div slot="start" style={{marginLeft: "10px", marginTop: "2px"}}>
                        <Flag country="IT"/>
                    </div>
                </md-select-option>
            </md-outlined-select>
        </>
    )
}
