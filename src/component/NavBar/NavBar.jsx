import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container mx-auto lg:px-10">
            {/* navbar open */}
            <section className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Home</a></NavLink>
                            <NavLink to="/listbooks" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Listed Books</a></NavLink>
                            <NavLink to="/pagestoread" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Pages to Read</a></NavLink>
                            <NavLink to="/latest" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Latest Books</a></NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Contact</a></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Home</a></NavLink>
                        <NavLink to="/listbooks" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Listed Books</a></NavLink>
                        <NavLink to="/pagestoread" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Pages to Read</a></NavLink>
                        <NavLink to="/latest" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Latest Books</a></NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-500 underline font-bold' : 'font-bold'}><a className="text-base font-medium mr-5">Contact</a></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-green-500 text-base text-white mr-2">Sign In</a>
                    <a className="btn bg-blue-500 text-base text-white mr-2">Sign Up</a>
                </div>
            </section>
            {/* navbar end  */}
        </div>
    );
};

export default NavBar;