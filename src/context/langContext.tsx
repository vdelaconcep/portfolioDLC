import { createContext, useContext, useState, ReactNode } from "react";
import { LanguageContextType, Language } from "@/types";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);

    if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');

    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {

    const lastLanguageSelected = localStorage.getItem('lastLanguageSelected');

    const [language, setLanguage] = useState<Language>(lastLanguageSelected as Language || 'es');

    const toggleLanguage = () => {
        const newSelectedLanguage: Language = language === 'es' ? 'en' : 'es';
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
