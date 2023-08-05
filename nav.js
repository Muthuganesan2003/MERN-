import {Link} from "react-router-dom";
const nav=()=>(
    
    <ul className="nav justify-content-end">
    <li className="nav-item">
        <Link className="nav-link active"  to="/">Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
    </li>
</ul>

)
    
export default nav;
