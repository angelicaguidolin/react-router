import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home Page</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/post-blog">Post Blog</NavLink>
                </li>
            </ul>
        </nav>
    )
}