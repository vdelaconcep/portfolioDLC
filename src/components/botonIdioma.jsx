import { useLanguage } from "@/context/langContext";

const BotonIdioma = ({ clase }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <article className={`text-white montserrat flex ${clase && clase}`}>
            <button
                className={`mr-1 ${language === 'es' ? 'text-gray-700' : 'cursor-pointer'}`}
                onClick={toggleLanguage}
                disabled={language === 'es'}>
                ESP
            </button>
            <span className="text-gray-400">|</span>
            <button
                className={`ml-1 ${language === 'en' ? 'text-gray-700' : 'cursor-pointer'}`}
                onClick={toggleLanguage}
                disabled={language === 'en'}>
                ENG
            </button>
            
        </article>
        
    );
};

export default BotonIdioma;