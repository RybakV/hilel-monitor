import './Users.css';
import {useState} from "react";
import Album from "./Album";

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
                    <div className="user" key={item.id}>
                        <div className="user-name">
                            {item.username}
                        </div>
                        <Album id={item.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Users;
