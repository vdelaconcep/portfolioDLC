import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');

    return context;
};

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('es');

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
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

