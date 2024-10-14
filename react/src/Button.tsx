import './Button.css'


interface ButtonProps {
    text: string;
    className?: string;
}


function MyButton({ text, className}: ButtonProps ) {
    return (
        <div className={`button-container ${className}`}>
            <button className="button-child">{text}</button>
        </div>
    )
}

export default MyButton