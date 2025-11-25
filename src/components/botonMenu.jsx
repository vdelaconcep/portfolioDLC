const BotonMenu = ({ abierto, setAbierto }) => {
    return (
        <button
            onClick={() => setAbierto(!abierto)}
            className="text-gray-400 text-2xl bg-blue-500 relative w-10 h-10 hover:bg-[#8473FF] hover:text-gray-900 rounded-xl"
            aria-label="toggle-menu">
            {abierto ? <i className="fa-solid fa-x absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/4" /> :
                <i className="fa-solid fa-bars absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2" />
            }

        </button>
    );
};

export default BotonMenu;