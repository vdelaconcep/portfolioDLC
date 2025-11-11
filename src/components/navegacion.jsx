import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navegacion = ({ clase }) => {

    const { scrollY } = useScroll();

    const [inUXUI, setInUXUI] = useState(false);

    useEffect(() => {
        const uxuiSection = document.getElementById('uxui');

        if (!uxuiSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setInUXUI(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-80px 0px 10% 0px'
            }
        );

        observer.observe(uxuiSection);

        return () => observer.disconnect();
    }, []);

    const opacidadBg = useTransform(
        scrollY,
        [0, 10],
        [0, 1]
    );

    const simpleItems = [
        {
            titulo: 'Sobre mí',
            linkto: 'about'
        },
        {
            titulo: 'FullStack',
            linkto: 'fullstack'
        },
        {
            titulo: 'Diseño UX/UI',
            linkto: 'uxui'
        },
        {
            titulo: 'Contacto',
            linkto: 'contacto'
        }
    ];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };


    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 py-4 flex justify-center ${clase && clase}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
                backgroundColor: useTransform(
                    opacidadBg,
                    (opacity) => inUXUI ? `rgba(0, 0, 0, ${opacity * 0.9})` : `rgba(0, 0, 0, ${opacity * 0.4})`
                ),
                backdropFilter: useTransform(
                    opacidadBg,
                    (opacity) => `blur(${opacity * 12}px)`
                ),
                borderBottom: useTransform(
                    opacidadBg,
                    (opacity) => `1px solid rgba(255, 255, 255, ${opacity * 0.1})`
                )
            }}>
            <ul className='list-none flex text-lg font-medium text-gray-400'>
                {simpleItems.map(item => 
                    <li
                        key={item.linkto}
                        className="mx-2 last-of-type:mr-0 cursor-pointer hover:bg-[#8473FF] hover:text-gray-900 px-3 rounded-2xl"
                        onClick={() => { scrollToSection(item.linkto); }}>
                        {item.titulo}
                    </li>
                )}
            </ul>
        </motion.nav>
    );
};

export default Navegacion;