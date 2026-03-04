import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MobileContextType } from "@/types";

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export const useMobile = (): MobileContextType => {
    const context = useContext(MobileContext);

    if (!context) throw new Error('useMobile debe usarse dentro de MobileProvider');

    return context;
};

interface MobileProviderProps {
    children: ReactNode;
}

export const MobileProvider = ({ children }: MobileProviderProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

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
