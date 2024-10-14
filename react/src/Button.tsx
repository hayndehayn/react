import './button.css'


interface ButtonProps {
    text: string;
    className?: string;
}


function myButton({ text, className}: ButtonProps ) {
    return (
        <div className={`button-container ${className}`}>
            <button className="button-child">{text}</button>
        </div>
    )
}

export default myButton