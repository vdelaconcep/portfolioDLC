import { motion } from 'framer-motion';

const Navegacion = () => {

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
    ]

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <nav>
            <ul className="list-none flex text-gray-300 text-lg font-medium">
                {simpleItems.map(item => 
                    <li
                        className="mx-2 last-of-type:mr-0 cursor-pointer hover:bg-pink-300 hover:text-gray-900 px-3 rounded-2xl"
                        onClick={()=>{scrollToSection(item.linkto)}}>
                        {item.titulo}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navegacion;