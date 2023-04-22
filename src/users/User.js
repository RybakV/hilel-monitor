import './Users.css';
import {useParams} from "react-router-dom";
import Album from "./Album";

function User() {

    const {id} = useParams();

    return (
        <div className="user">
            <h3>User: {id}</h3>
            <Album id={id}/>
        </div>
    );
}
export default User;
