import { Link } from 'react-router-dom';


function Navbar() {
    return (
        
        <nav className="nav">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=video_camera_front" />
            
            <Link to="/" className="site-name">EZ StreamList <span class="material-symbols-outlined">video_camera_front</span></Link>

            <div className="nav-page">
            <Link to="/pages/Movies">Movies </Link>
            <Link to="/pages/Cart">Cart </Link>
            <Link to="/pages/About">About </Link>
            </div>
        </nav>
    );
}

export default Navbar;