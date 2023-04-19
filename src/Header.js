import './Header.css';
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="header-badge">
                Monitor 90s
            </div>
            <nav className="header-nav">
                <Link to="/" className="header-nav-btn" data-title="Home">Home</Link>
                <Link to="/vote" className="header-nav-btn" data-title="Vote">Vote</Link>
                <Link to="/users" className="header-nav-btn" data-title="Users">Users</Link>
                <Link to="/formik" className="header-nav-btn" data-title="Formik">Formik</Link>
                <Link to="/test" className="header-nav-btn" data-title="Test">Test</Link>
            </nav>
        </header>
    );
}

export default Header;
