import React, { useState } from "react";
import { CategoryIcons, DefaultIcon, PROJECTS } from "../constants";
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
					<div className="flex flex-wrap justify-center items-center gap-8">
						{categories.map((cat) => {
							const Icon = CategoryIcons[cat] ?? DefaultIcon;

							return (
								<button
									key={cat}
									onClick={() => setFilter(cat)}
									className={`text-xs lg:text-sm box-depress radio ${filter === cat ? "active" : ""}`}>
									<span className="text-icon">
										<Icon size={22} title="Award Earned" />
										{cat.toUpperCase()}
									</span>
								</button>
							);
						})}
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
						),
					)}
				</div>
			) : (
				<div className="h-64 flex flex-col items-center justify-center milky border primary border-dashed">
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
