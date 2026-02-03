import { Link } from 'react-router-dom';


function Navbar() {
    return (
        
        <nav className="nav">
            
        
            <Link to="/" className="site-name">EZ StreamList <span className="material-symbols-outlined">video_camera_front</span></Link>

            <div className="nav-page">
            <Link to="/pages/Movies">Movies </Link>
            <Link to="/pages/Cart">Cart </Link>
            <Link to="/pages/About">About </Link>
            </div>
        </nav>
    );
}

export default Navbar;