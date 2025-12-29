import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

	return (
		<nav className="sticky top-0 z-10 bg-black/75 backdrop-blur border-y-4 border-black py-6 items-center flex justify-center gap-20">
      <Link
        to="/"
				className={`text-interactable text-white uppercase ${
					location.pathname === "/" ? "active" : ""
				}`}>
				About
			</Link>

			<Link
				to="/projects"
				className={`text-interactable text-white uppercase ${
					location.pathname === "/projects" ? "active" : ""
				}`}>
				Projects
			</Link>
		</nav>
	);
};

export default Navbar;
