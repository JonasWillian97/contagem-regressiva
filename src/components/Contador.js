import './Contador.css';

function Contador ({title,number}) {
    return(
        <div className="counter">
            <p className="counter-number">{number}</p>
            <h3 className="counter-text">{title}</h3>
        </div>
    )
}

export default Contador;