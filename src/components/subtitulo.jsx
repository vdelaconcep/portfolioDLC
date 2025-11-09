const Subtitulo = ({ texto, clase }) => {
    return (
        <article className={`flex items-center gap-2 ${clase && clase}`}>
            <h2 className="[background-image:linear-gradient(to_right,#8473FF,#c005d1)] [background-clip:text] [-webkit-background-clip:text] [color:transparent] [-webkit-text-fill-color:transparent] w-fit text-3xl whitespace-nowrap font-bold">
                {texto}
            </h2>
            <hr className="flex-1 text-gray-600" />
        </article>
    )
};

export default Subtitulo;