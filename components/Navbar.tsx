import React from "react";
import { ActiveTab } from "../types";

interface NavbarProps {
	activeTab: ActiveTab;
	setActiveTab: (tab: ActiveTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
	return (
		<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-6">
			<div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
				{/* Name / Personal "Logo" */}
				<h1
					className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer hover:text-purple-600 transition-colors"
					onClick={() => setActiveTab("home")}>
					BRADY MANSKE
				</h1>

				{/* Centered Tabs */}
				<div className="flex gap-8 mt-6">
					<button
						onClick={() => setActiveTab("home")}
						className={`relative py-1 text-sm font-semibold tracking-wide transition-all ${
							activeTab === "home" ? "text-purple-600" : "text-slate-400 hover:text-slate-900"
						}`}>
						ABOUT
						{activeTab === "home" && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full" />
						)}
					</button>

					<button
						onClick={() => setActiveTab("projects")}
						className={`relative py-1 text-sm font-semibold tracking-wide transition-all ${
							activeTab === "projects" ? "text-purple-600" : "text-slate-400 hover:text-slate-900"
						}`}>
						PROJECTS
						{activeTab === "projects" && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full" />
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
