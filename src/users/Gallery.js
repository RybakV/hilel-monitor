import './Users.css';
import {useState} from "react";

function Gallery(props) {
    const id = props.id;
    const [galleryClass, setGalleryClass] = useState('');
    const [photos, setPhotos] = useState([]);

    async function getAlbumsData(){
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        ).then((response) => response.json());
        setPhotos(filterAlbums(response));
        setGalleryClass('photos-shown');
    }

    function filterAlbums(data){
        const albumPhotos = data.filter(function (el) {
            return el.albumId === id
        });
        return albumPhotos
    }

    return (
        <div className={`gallery ${galleryClass}`}>
            <button onClick={getAlbumsData} className="gallery-btn">Show Photos</button>
            <ul className="photos">
                {photos.map((item, index) => (
                    <img src={item.thumbnailUrl + '.jpg'} alt={item.title} className="photo" key={item.id}></img>
                ))}
            </ul>
        </div>
    );
}
export default Gallery;
