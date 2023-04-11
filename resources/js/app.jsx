import React from 'react';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import './bootstrap';
import {LaravelReactI18nProvider} from "laravel-react-i18n";

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <LaravelReactI18nProvider lang={'en'} fallbackLang={'en'}
                resolve={async (lang) => {
                    const langs = import.meta.glob('/lang/*.json')
                    const fn = langs[`/lang/${lang}.json`];

                    if (typeof fn === 'function') {
                        return await fn();
                    }
                }}>
                <App {...props} />
            </LaravelReactI18nProvider>
        )
    },
})
