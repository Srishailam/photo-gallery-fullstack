import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="Header">
			<header>
				<h1>Photo Gallery</h1>
				<div className="links">
					<NavLink to="/" className="link">
						Home
					</NavLink>
					<NavLink to="/gallery" className="link">
						Gallery
					</NavLink>
				</div>
			</header>
		</div>
	);
};

export default Header;
