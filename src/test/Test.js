import {useState} from "react";

function Test() {

    let smilesData = [
        {smile: ':)', votes: 0},
        {smile: ':|', votes: 0},
        {smile: ':(', votes: 0}
    ];

    const [smiles, setSmiles] = useState(smilesData);

    function updateCounter(event){
        // шукаю об'єкт массиву по смайлу
        const smile = event.target.getAttribute('data-smile');
        const smileObject = smiles.find(item => item.smile === smile);

        // додаю обраному обсмайлу один голос
        smileObject.votes = smileObject.votes + 1;

        // далі перезаписую об'єкт smilesData, тому що він якось коряво зчитується якщо не перезаписати
        smilesData = JSON.parse(JSON.stringify(smiles));

        //передаю новий об'єкт в useState
        setSmiles(smilesData);
    }

    return (
        <div className="box">
            <h1 className="title">Test Smiles</h1>
            {smiles.map((item, index) => (
                <button data-smile={item.smile} onClick={updateCounter}>{item.smile} {item.votes}</button>
            ))}
        </div>
    );
}
export default Test;
