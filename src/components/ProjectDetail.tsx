import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../types";
import { Github, ExternalLink } from "lucide-react";
import GameEmbed from "./GameEmbed";
import { Heading, Writeup } from "./FormattedBlocks";

interface ProjectDetailProps {
	project: Project;
	onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const modalContent = (
		<div className="fixed z-20 inset-0 m-auto w-full max-w-6xl my-16 rounded-3xl flex flex-col shadow-2xl zoom-in border-4 border-black overflow-hidden bg-white">
			{/* Header */}
			<div
				className="flex items-center justify-between p-8 bg-black sticky top-0 box-interactable border-0 border-b-4 rounded-t-2xl"
				onClick={onClose}>
				<Heading project={project} />
			</div>

			{/* Content Scroll Area */}
			<div className="px-4 lg:px-16 overflow-y-auto">
				<div className="max-w-4xl mx-auto space-y-16">
					{/* Main Visuals */}
					<div className="game-wrapper"></div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2">
							<GameEmbed title={project.title} src={project.demoUrl} />
						</div>

						<div className="space-y-8">
							<div className="space-y-4">
								<h4 className="text-[10px] font-bold secondary uppercase tracking-[0.2em]">
									Connect & Launch
								</h4>
								<div className="flex flex-col gap-8">
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											className="w-fit p-2 box-interactable">
											<span className="flex items-center gap-3 font-bold">
												<Github size={20} /> View Codebase <ExternalLink size={20} />
											</span>
										</a>
									)}
								</div>
							</div>

							<div className="space-y-4">
								<h4 className="text-[10px] font-bold secondary uppercase tracking-[0.2em]">
									Technologies
								</h4>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-4 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-700 border border-slate-100">
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Writeup project={project} />
			</div>
		</div>
	);

	// This renders the modal at the top of the DOM, ignoring parent structure
	return createPortal(modalContent, document.body);
};

export default ProjectDetail;
