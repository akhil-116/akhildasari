import './Button.css';

const Button = ({href, type="primary",text, size, specifyWidth, onClick }) => {
    return(
        <>
        <a href={href} className={`btn ${type}-btn ${size}-btn ${specifyWidth}-btn`} onClick={onClick}>
            {text} <span className='btn-arrow'>&rarr;</span>
        </a>
        </>
    );
    
};

export default Button;