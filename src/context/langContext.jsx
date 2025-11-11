import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');

    return context;
};

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('esp');

    const toggleLanguage = () => {
        setLanguage(!language);
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

