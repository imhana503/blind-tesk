const Button = ({ text, typeClass, onClick }) => {
    return(
        <button 
            className={['btn', `${typeClass}`].join(' ')} 
            onClick={onClick}>{text}
        </button>
    )
}

export default Button;