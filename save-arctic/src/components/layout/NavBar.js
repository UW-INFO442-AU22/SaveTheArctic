import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <section>
            <nav className="fixed-top">
                <div className="nav-left">
                    <span className="logo" aria-hidden="true">&nbsp;</span><b className="hide-mobile">Save the Arctic</b>
                    <NavLink className="nav-text" exact to="/">About Us</NavLink>
                    <NavLink className="nav-text" to="/education">Education</NavLink>
                    <NavLink className="nav-text" to="/account">My Account</NavLink>
                </div>
            </nav>
        </section>
    );

}

export default NavBar;