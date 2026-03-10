import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() =>
                 navigate("/About")}>Go to Contact</button>
        </div>
    );
};

export default Home;