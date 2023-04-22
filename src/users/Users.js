import './Users.css';
import {useState} from "react";
import {Link} from "react-router-dom";

function Users() {

    const [users, setUsers] = useState([]);

    async function getApiData(){
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        ).then((response) => response.json());
        setUsers(response);
    }
    getApiData();

    return (
        <div className="users">
            <h2>Illuminati Users:</h2>
            <div className="users-list">
                {users.map((item, index) => (
                    <div className="user" key={item.id} id={'user'+item.id}>
                        <div className="user-name">
                            {item.username}
                        </div>
                        <Link to={"/users/"+item.id} data-title="Link">Link</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Users;
