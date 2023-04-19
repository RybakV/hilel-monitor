import './PageBody.css';

import {Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import Smiles from "./smiles/Smiles";
import Todo from "./todo/Todo";
import Users from "./users/Users";
import User from "./users/User";
import Test from "./test/Test";
import FormikPage from "./formik-page/FormikPage";

function PageBody() {
    return (
        <div className="page-body">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/vote">
                    <Route index element={<Smiles/>} />
                    <Route path="smiles" element={<Smiles/>} />
                    <Route path="todo" element={<Todo/>} />
                </Route>
                <Route path="/users" element={<Users/>} />
                <Route path="users/:id" element={<User/>} />
                <Route path="/formik" element={<FormikPage/>} />
                <Route path="/test" element={<Test/>} />
            </Routes>
        </div>
    );
}

export default PageBody;
