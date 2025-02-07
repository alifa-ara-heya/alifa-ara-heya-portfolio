import './button.css'
const Button = ({ text, icon }) => {

    return (
        <button className='myButton space-x-3'>{icon}{text}</button>
    );
};

export default Button;