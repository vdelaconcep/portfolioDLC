import { motion } from 'framer-motion';

const ExperienciaCard = ({ titulo, periodo, items }) => {
    
    return (
        <article className="h-full bg-gradient-to-r from-[#1A0091] to-[#822ae0] p-4 rounded-2xl text-white flex-1 border-2 border-[#28FD9A] hover:bg-gradient-to-r hover:from-[#153d92] hover:to-[#c005d1]">
            <div>
                <h1 className="mb-2"><span className='font-bold text-lg mr-3'>{titulo}</span><span className='text-[#f57cba] whitespace-nowrap'>{periodo}</span></h1>
            </div>
            <ul className="list-disc ml-4">
                {items.map(item =>
                    <li>{item}</li>
                )}
            </ul>
        </article>
    );
};

export default ExperienciaCard;