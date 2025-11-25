
import { createContext, useContext, useState, useEffect } from "react";

const MobileContext = createContext();

export const useMobile = () => {
    const context = useContext(MobileContext);

    if (!context) throw new Error('useMobile debe usarse dentro de MobileProvider');

    return context;
};

export const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <MobileContext.Provider value={{ isMobile }}>
            {children}
        </MobileContext.Provider>
    );
};