import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/first'>
                <li>First</li>
            </Link>
            <Link to='/login'>
                <li>Login</li>
            </Link>
            <Link to='/read'>
                <li>Read</li>
            </Link>
            <Link to='/opt-login'>
                <li>Optimized Login</li>
            </Link>
            <Link to='/landing'>
                <li>Landing</li>
            </Link>
        </>
    );
}

export default Home;