import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const location = useLocation();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav className="sticky top-0 z-10 milky border-y-[3px] py-6 items-center flex justify-center gap-20">
			<Link
				to="/"
				onClick={scrollToTop}
				className={`text-interactable primary uppercase ${
					location.pathname === "/" ? "active" : ""
				}`}>
				About
			</Link>

			<Link
				to="/projects"
				onClick={scrollToTop}
				className={`text-interactable primary uppercase ${
					location.pathname === "/projects" ? "active" : ""
				}`}>
				Projects
			</Link>
		</nav>
	);
};

export default Navbar;
