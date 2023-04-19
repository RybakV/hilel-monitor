import './Smiles.css';
import Smile from "./Smile";
import {smileList} from "../data.js";
import {useState} from "react";
function Smiles() {

    const [smileData, setSmileData] = useState(smileList)

    const [winner, setState] = useState("")
    function endVote(){
        let winnerSmile = {index: 0, votes: 0};
        smileData.forEach((item, index) => {
            if (item.quantity > winnerSmile.votes) {
                winnerSmile.votes = item.quantity;
                winnerSmile.index = index;
            }
        })
        setState(`The winner is: ${smileList[winnerSmile.index].smile} With the score: ${winnerSmile.votes}`);
    }

    return (
        <div className="smile-rating">
            <h1>Happy/unhappy people scaner:</h1>
            <div className="smile-list">
                {smileData.map((item, index) => (
                    <Smile
                        item={item}
                        index={index}
                        key={item.smile}
                        setSmileData={setSmileData}
                        smileData={smileData}
                    />
                ))}
            </div>
            <div className="smile-end-vote" onClick={endVote}>Scan people</div>
            <div className="smile-vote-result">{winner===''? 'Vote please' : `${winner}` }</div>
        </div>
    );
}
export default Smiles;
