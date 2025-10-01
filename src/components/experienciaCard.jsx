const ExperienciaCard = ({ titulo, periodo, items }) => {
    return (
        <article className="bg-gradient-to-r from-[#678F6C] to-[#316149] p-4 border-black rounded-2xl text-white flex-1">
            <div className="flex justify-between">
                <h1>{titulo}</h1>
                <h5>{periodo}</h5>
            </div>
            <ul>
                {items.map(item =>
                    <li>{item}</li>
                )}
            </ul>
        </article>
    );
};

export default ExperienciaCard;