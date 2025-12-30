import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Socials } from "./components/FormattedBlocks";

import About from "./pages/About";
import Projects from "./pages/Projects";

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />

			<main className="mx-auto px-8 lg:px-16">
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/projects" element={<Projects />} />

					{/* Redirect unknown routes to "/" */}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>

			<footer className="milky border-y-4 py-6">
				<div className="grid grid-col justify-center gap-4">
					<p className="primary uppercase">© 2025 Brady Manske</p>
					<Socials className="primary" />
				</div>
			</footer>
		</Router>
	);
};

export default App;
