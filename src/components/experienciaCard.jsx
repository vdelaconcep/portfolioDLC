import { motion } from 'framer-motion';

const ExperienciaCard = ({ titulo, periodo, items }) => {
    
    return (
        <article className="h-full p-4 rounded-2xl text-white flex-1 border-1 border-gray-600 bg-gradient-to-tr from-white/5 to-white/10">
            <div className='mb-2'>
                <h1 className="font-bold text-lg mr-3">{titulo}</h1>
                <h2 className='text-[#c005d1] whitespace-nowrap'>{periodo}</h2>
            </div>
            <ul className="list-disc ml-4 font-light">
                {items.map(item =>
                    <li>{item}</li>
                )}
            </ul>
        </article>
    );
};

export default ExperienciaCard;