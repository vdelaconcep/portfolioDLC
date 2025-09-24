import { motion } from 'framer-motion';

const Navegacion = () => {

    const simpleItems = [
        {
            titulo: 'Curriculum',
            linkto: '/curriculum'
        },
        {
            titulo: 'FullStack',
            linkto: '/fullStack'
        },
        {
            titulo: 'Diseño UX/UI',
            linkto: '/uxui'
        },
        {
            titulo: 'Contacto',
            linkto: '/contacto'
        }
    ]

    return (
        <nav>
            <ul className="list-none flex text-gray-400 font-medium">
                {simpleItems.map(item => 
                    <li
                        className="mx-3 last-of-type:mr-0 cursor-pointer hover:bg-pink-300 hover:text-gray-900 px-2 rounded-2xl">
                        {item.titulo}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navegacion;