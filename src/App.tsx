import React, { useState } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectGallery from "./components/ProjectGallery";

const App: React.FC = () => {
	const [activeTab, setActiveTab] = useState<ActiveTab>("home");

	return (
		<div className="min-h-screen flex flex-col bg-white selection:bg-purple-100 selection:text-purple-900">
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

			<main className="flex-1 max-w-6xl mx-auto px-4 w-full">
				{activeTab === "home" ? <AboutMe /> : <ProjectGallery />}
			</main>

			<footer className="bg-slate-50 py-20 mt-32 border-t border-slate-100">
				<div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-10">
					<div className="flex gap-12 text-sm font-bold text-slate-400">
						<a
							href="https://github.com/State0fFlux"
							className="hover:text-purple-600 transition-colors">
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/brady-manske/"
							className="hover:text-purple-600 transition-colors">
							LinkedIn
						</a>
						<a
							href="https://state0fflux.itch.io/"
							className="hover:text-purple-600 transition-colors">
							Itch.io
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
