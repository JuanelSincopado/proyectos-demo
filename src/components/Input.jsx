const Input = ({ className, placeholder, name, value, funcion }) => {
    return (
        <input
            type="text"
            className={className}
            placeholder={placeholder}
            spellCheck="false"
            name={name}
            value={value}
            onChange={funcion}
        />
    );
};

export default Input;
