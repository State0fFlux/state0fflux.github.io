import React from "react";
import { Project } from "../types";
import { LuGamepad2, LuGithub, LuTrophy } from "react-icons/lu";
import { Heading } from "./FormattedBlocks";

interface ProjectCardProps {
	project: Project;
	onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
	return (
		<div
			onClick={() => onClick(project)}
			className="group bg-black/75 backdrop-blur border-4 border-black rounded-3xl overflow-hidden box-interactable">
			<div className="aspect-[4/3] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
				<img
					src={project.thumbnail}
					alt={project.title}
					className="w-full h-full border-b-4 border-black object-cover"
				/>
			</div>

			<div className="p-8 space-y-4">
				<div className="flex justify-between">
					<Heading project={project} />
					<div className="flex gap-3">
						{project.githubUrl && <LuGithub size={18} />}
						{project.category == "Video Game" && <LuGamepad2 size={18} />}
					</div>
				</div>

				<p className="text-white text-xs leading-relaxed line-clamp-2 font-medium">
					{project.tagline}
				</p>

				<div className="flex flex-wrap gap-2 pt-2">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 bg-slate-50 text-[10px] font-bold rounded-full text-slate-600 border border-slate-100">
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
