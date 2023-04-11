import {router, usePage} from "@inertiajs/react";
import {useEffect, useState} from "react";

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
        const lang = e.target.value;
        router.post("/lang/" + lang, {
            "lang": lang
        }, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setLanguage(lang);
            }
        })
    }

    return (
        <>
            {/*TODO: change with <select> of material design 3*/}
            <select value={language} onChange={handleChangeLang}>
                <option value="en">{t('English')}</option>
                <option value="it">{t('Italian')}</option>
            </select>
        </>
    )
}
