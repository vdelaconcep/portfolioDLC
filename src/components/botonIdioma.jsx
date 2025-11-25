import { useLanguage } from "@/context/langContext";

const BotonIdioma = ({ clase }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <article className={`text-white montserrat flex ${clase && clase}`}>
            <button
                className={`mr-1 ${language === 'es' ? 'text-gray-700' : 'cursor-pointer'}`}
                onClick={toggleLanguage}
                disabled={language === 'es'}
                title={language === 'en' ? 'Cambiar idioma' : undefined}>
                ESP
            </button>
            <span className="text-gray-400">|</span>
            <button
                className={`ml-1 ${language === 'en' ? 'text-gray-700' : 'cursor-pointer'}`}
                onClick={toggleLanguage}
                disabled={language === 'en'}
                title={language === 'es' ? 'Toggle language' : undefined}>
                ENG
            </button>
            
        </article>
        
    );
};

export default BotonIdioma;