import logo from "../logo.svg";

function Home() {
    return (
        <>
            <div className="page-body-header">
                <img src={logo} className="page-body-logo" alt="logo" />
                <div className="page-body-name">Illuminati<br/>Monitor</div>
            </div>
            <h1>Welcome to the Illuminati Monitor</h1>
            <div>This is an experimental machine. Please feel free to explore its functionality.</div>
        </>
    );
}

export default Home;
