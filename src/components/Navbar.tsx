import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const location = useLocation();

	return (
		<nav className="sticky top-0 z-10 milky border-y-4 py-6 items-center flex justify-center gap-20">
			<Link
				to="/"
				className={`text-interactable primary uppercase ${
					location.pathname === "/" ? "active" : ""
				}`}>
				About
			</Link>

			<Link
				to="/projects"
				className={`text-interactable primary uppercase ${
					location.pathname === "/projects" ? "active" : ""
				}`}>
				Projects
			</Link>
		</nav>
	);
};

export default Navbar;
