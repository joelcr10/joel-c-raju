import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <label>JoelCR</label>
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Work</Link>
            </div>
        </div>
     );
}
 
export default Navbar;