import './Users.css';
import {useState} from "react";
import Gallery from "./Gallery";

function Album(props) {
    const id = props.id;
    const [albums, setAlbums] = useState([]);

    async function getAlbumsData(){
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums/"
        ).then((response) => response.json());
        setAlbums(filterAlbums(response));
    }

    function filterAlbums(data){
        const userAlbums = data.filter(function (el) {
            return el.userId === id
        });
        return userAlbums
    }

    return (
        <div className="albums">
            <button onClick={getAlbumsData} className="albums-btn">Show Albums</button>
            <ul className="albums-list">
                {albums.map((item, index) => (
                   <li key={item.id}>
                       <div className="album-title">Album: {item.title}</div>
                       <Gallery id={item.id}/>
                   </li>
                ))}
            </ul>
        </div>
    );
}
export default Album;
