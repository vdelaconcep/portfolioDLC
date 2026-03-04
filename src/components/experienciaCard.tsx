import { ExperienceItem } from "@/types";

interface ExperienciaCardProps {
    titulo: string;
    periodo: string;
    items: string[];
}

const ExperienciaCard = ({ titulo, periodo, items }: ExperienciaCardProps): JSX.Element => {

    return (
        <article className="h-full p-4 text-white flex-1 bg-radial-[at_75%_25%] from-gray-700 to-gray-900 rounded-xl ring-1 ring-gray-600">
            <div className='mb-2'>
                <h1 className="font-bold text-lg mr-3">{titulo}</h1>
                <h2 className='text-[#b86dbf] whitespace-nowrap'>{periodo}</h2>
            </div>
            <ul className="list-disc ml-4 font-light">
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </article>
    );
};

export default ExperienciaCard;
