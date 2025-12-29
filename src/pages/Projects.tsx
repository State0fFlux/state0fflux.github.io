import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { Project, ProjectCategory } from "../types";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

import { useSearchParams } from "react-router-dom";

const Projects: React.FC = () => {
	const [filter, setFilter] = useState<ProjectCategory | "All">("All");

	const [searchParams, setSearchParams] = useSearchParams();
	const selectedTitle = searchParams.get("title");
	const selectedProject: Project = PROJECTS.find((p) => p.title === selectedTitle) ?? null;

	const filteredProjects =
		filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

	const categories: (ProjectCategory | "All")[] = [
		"All",
		...Array.from(new Set(PROJECTS.map((p) => p.category))),
	];

	return (
		<div className="space-y-8 py-16 fade-in">
			<div className="flex flex-col items-center text-center space-y-8">
				<div className="space-y-2">
					<h1 className="text-3xl">My Projects</h1>
					<p>
						A deep dive into some of my favorite technical challenges and creative explorations.
					</p>
				</div>

				{categories.length > 2 && (
					<div className="flex flex-wrap items-center gap-x-0 lg:gap-x-16 px-2 py-1 backdrop-blur bg-black/25 border-4 border-black rounded-full">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setFilter(cat)}
								className={`px-6 py-2 text-xs lg:text-sm text-interactable ${
									filter === cat ? "active" : ""
								}`}>
								{cat.toUpperCase()}
							</button>
						))}
					</div>
				)}
			</div>

			{filteredProjects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{filteredProjects.map((project) =>
						selectedProject == project ? (
							<div></div>
						) : (
							<ProjectCard
								key={project.title}
								project={project}
								onClick={() => setSearchParams({ title: project.title })}
							/>
						)
					)}
				</div>
			) : (
				<div className="h-64 flex flex-col items-center justify-center text-slate-400 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
					<p className="text-xl">Stay tuned! More projects coming soon.</p>
				</div>
			)}

			{selectedProject && (
				<ProjectModal project={selectedProject} onClose={() => setSearchParams({})} />
			)}
		</div>
	);
};

export default Projects;
