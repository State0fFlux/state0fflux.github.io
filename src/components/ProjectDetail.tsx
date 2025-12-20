import React from "react";
import { Project } from "../types";
import { Github, Gamepad2, ExternalLink } from "lucide-react";

interface ProjectDetailProps {
	project: Project;
	onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
	const renderContent = (text: string) => {
		return text.split("\n").map((line, i) => {
			if (line.trim().startsWith("##")) {
				return (
					<h3 key={i} className="text-xl mb-6 text-slate-500">
						{line.replace("##", "").trim()}
					</h3>
				);
			} else if (line.trim().startsWith("#")) {
				return (
					<h3 key={i} className="text-2xl font-bold mb-6 text-slate-900">
						{line.replace("#", "").trim()}
					</h3>
				);
			} else if (line.trim().startsWith("-")) {
				return (
					<li key={i} className="ml-8 mb-2 list-disc">
						{line.replace("-", "").trim()}
					</li>
				);
			}
			return (
				<p key={i} className="mb-6 leading-relaxed">
					{line}
				</p>
			);
		});
	};

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center p-4 lg:p-12">
			<div className="absolute inset-0 cursor-pointer" onClick={onClose} />

			<div className="relative w-full max-w-6xl h-full rounded-3xl flex flex-col shadow-2xl zoom-in border-4 border-black overflow-hidden bg-white">
				{/* Header */}
				<div
					className="flex items-center justify-between p-8 bg-black sticky top-0 box-interactable border-0 border-b-4 rounded-t-2xl"
					onClick={onClose}>
					<div className="space-y-1">
						<span className="text-[10px] font-bold uppercase tracking-[0.2em]">
							{project.category}
						</span>
						<h2 className="text-3xl font-bold text-white">{project.title}</h2>
					</div>
				</div>

				{/* Content Scroll Area */}
				<div className="flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-16">
					<div className="max-w-4xl mx-auto space-y-20">
						{/* Main Visuals */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
							<div className="lg:col-span-2">
								<img
									src={project.images[0]}
									alt="Main highlight"
									className="w-full rounded-3xl shadow-2xl object-cover aspect-[16/10]"
								/>
							</div>

							<div className="space-y-8">
								<div className="space-y-4">
									<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
										Connect & Launch
									</h4>
									<div className="flex flex-col gap-8">
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												className="flex items-center justify-between p-1 box-interactable">
												<span className="flex items-center gap-3 font-bold">
													<Github size={20} /> View Codebase
												</span>
												<ExternalLink size={20} />
											</a>
										)}
										{project.itchUrl && (
											<a
												href={project.itchUrl}
												className="flex items-center justify-between p-1 box-interactable">
												<span className="flex items-center gap-3 font-bold">
													<Gamepad2 size={20} /> Play Game
												</span>
												<ExternalLink size={20} />
											</a>
										)}
									</div>
								</div>

								<div className="space-y-4">
									<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
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

						{/* Writeup Content */}
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
							<div className="lg:col-span-4 lg:sticky lg:top-0 h-fit">
								<div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
									<p className="text-slate-900 font-bold italic text-xl leading-relaxed">
										"{project.shortDescription}"
									</p>
								</div>
							</div>
							<div className="lg:col-span-8">
								<article className="prose prose-slate max-w-none">
									{renderContent(project.longWriteup)}
								</article>
							</div>
						</div>

						{/* Gallery Expansion */}
						{project.images.length > 1 && (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20 border-t border-slate-100">
								{project.images.slice(1).map((img, idx) => (
									<div key={idx} className="space-y-4">
										<img
											src={img}
											alt={`Detail ${idx}`}
											className="w-full rounded-3xl shadow-lg border border-slate-100"
										/>
										<p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
											Process Insight #{idx + 1}
										</p>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
