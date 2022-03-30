import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar navbar-ligth text-white bg-dark'>
			<div className='container'>
				<NavLink to='/' className='btn btn-outline-warning'>
					Home
				</NavLink>
				<NavLink to='/blog' className='btn btn-outline-warning'>
					Blog
				</NavLink>
				<NavLink to='/contact' className='btn btn-outline-warning'>
					Contact
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
