function Button(props) {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { className = ' bg-blue-600 hover:bg-red-600 ', text, children } = props;

    return (
        <button {...props} className={`${className}[&>svg]:w-5 [&>svg]h-5 [&>svg]stroke-1 text-white font-bold py-2 px-4 rounded`}>
            {text || children}
        </button>
    );
}

export default Button;
