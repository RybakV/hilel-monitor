import './Smiles.css';

function Smile({setSmileData, ...props}) {

    function clickHandler(){
        props.smileData[props.index].quantity++;
        const data = JSON.parse(JSON.stringify(props.smileData));
        console.log(data);
        setSmileData(data);
        }

    return (
    <div className="smile-item">
        <span className="smile-emoji" onClick={clickHandler}>
            {props.item.smile}
        </span>
        <span className="smile-quantity">
            {props.item.quantity}
        </span>
    </div>
    );
}
export default Smile;
