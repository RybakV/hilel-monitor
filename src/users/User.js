import './Users.css';
import {useParams} from "react-router-dom";

function User() {

    const {id} = useParams();


    return (
        <div className="user">
            <h3>User: {id}</h3>
        </div>
    );
}
export default User;
