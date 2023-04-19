import './PageWrapper.css';
import Sidebar from "./sidebar/Sidebar";
import PageBody from "./PageBody";
import VisualFilter from "./VisualFilter";

function PageWrapper() {
    return (
        <div className="PageWrapper">
            <PageBody />
            <VisualFilter />
            <Sidebar />
        </div>
    );
}

export default PageWrapper;
