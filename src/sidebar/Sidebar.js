import './Sidebar.css';
import {Link, Route, Routes} from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <Routes>
                    <Route path="/vote" element={
                        <>
                            <Link to="/vote/smiles" className="sidebar-btn" data-title="Smiles">Smiles</Link>
                            <Link to="/vote/todo" className="sidebar-btn" data-title="To Do List">To Do List</Link>
                        </>
                    } >
                        <Route path="smiles" element={
                            <>
                                <Link to="/vote/smiles" className="sidebar-btn" data-title="Smiles">Smiles</Link>
                                <Link to="/vote/todo" className="sidebar-btn" data-title="To Do List">To Do List</Link>
                            </>
                        } />
                        <Route path="todo" element={
                            <>
                                <Link to="/vote/smiles" className="sidebar-btn" data-title="Smiles">Smiles</Link>
                                <Link to="/vote/todo" className="sidebar-btn" data-title="To Do List">To Do List</Link>
                            </>
                        } />
                    </Route>
                </Routes>
            </nav>
            <div className="sidebar-louder">

            </div>
        </aside>
    );
}

export default Sidebar;
