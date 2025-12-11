const Button = ({value, functionClick, nameOfMyClass}) => {
    return(
        <button className={ nameOfMyClass } onClick={ functionClick } >
            { value }
        </button>
    )
}

export default Button;