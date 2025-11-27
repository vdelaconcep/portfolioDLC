const Triangulo = ({clase}) => {
    return (
        <div
            className={`h-0 w-0 border-b-[20px] border-b-pink-500 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent ${clase && clase}`}>

        </div>
    );
};

export default Triangulo;