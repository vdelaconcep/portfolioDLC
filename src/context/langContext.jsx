import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');

    return context;
};

export const LanguageProvider = ({ children }) => {

    const lastLanguageSelected = localStorage.getItem('lastLanguageSelected');

    const [language, setLanguage] = useState(lastLanguageSelected || 'es');

    const toggleLanguage = () => {
        const newSelectedLanguage = language === 'es' ? 'en' : 'es';
        setLanguage(newSelectedLanguage);
        localStorage.setItem('lastLanguageSelected', newSelectedLanguage);
    };

    return (
        <LanguageContext.Provider value={{
            language,
            toggleLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    )
};

