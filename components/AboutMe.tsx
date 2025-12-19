import React from "react";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FaItchIo, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe: React.FC = () => {
	return (
		<div className="space-y-24 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
			{/* Profile Section */}
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div className="relative group mx-auto lg:mx-0">
					<div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
					<img
						src="attachments/brady-headshot.JPG"
						alt="Brady Manske Portrait"
						className="relative rounded-3xl w-72 h-72 lg:w-96 lg:h-96 object-cover transition-all duration-700 shadow-2xl"
					/>
					<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
						<p className="text-[10px] font-bold text-purple-600 uppercase tracking-[0.2em]">
							Based In
						</p>
						<p className="text-lg font-bold text-slate-900">Seattle, WA</p>
					</div>
				</div>

				<div className="space-y-8">
					<div className="space-y-2">
						<h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em]">
							Software Engineer & Game Dev
						</h2>
						<h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
							Crafting digital <br />
							<span className="text-slate-400">experiences.</span>
						</h1>
					</div>

					<p className="text-slate-600 leading-relaxed text-xl font-light">
						I'm a developer who loves building worlds. From complex backend systems to tactile game
						mechanics, I focus on performance, accessibility, and high-fidelity polish. Currently
						exploring the bounds of real-time graphics and procedural generation.
					</p>

					<div className="flex flex-wrap items-center gap-6">
						<a
							href="mailto:bmanske505@gmail.com"
							className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white hover:bg-purple-600 rounded-full font-bold transition-all shadow-lg hover:shadow-purple-200">
							<Mail size={18} />
							Let's Connect
						</a>

						<div className="flex gap-4">
							<a
								href="https://www.linkedin.com/in/brady-manske/"
								className="p-3 text-slate-400 hover:text-slate-900 transition-all">
								<FaLinkedin size={22} />
							</a>
							<a
								href="https://github.com/State0fFlux"
								className="p-3 text-slate-400 hover:text-slate-900 transition-all">
								<FaGithub size={22} />
							</a>
							<a
								href="https://bradymanske.itch.io"
								className="p-3 text-slate-400 hover:text-slate-900 transition-all">
								<FaItchIo size={22} />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Resume Section */}
			<section className="space-y-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-8">
					<div>
						<h3 className="text-3xl font-black text-slate-900">My Resume</h3>
						<p className="text-slate-500 mt-2">A summary of my professional journey and skills.</p>
					</div>
					<a
						href="attachments/BradyManske.pdf"
						className="group flex items-center gap-2 text-sm font-bold text-purple-600 px-6 py-2 rounded-full border border-purple-100 hover:bg-purple-50 transition-all">
						<FileText size={16} />
						Download PDF
					</a>
				</div>

				<div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-inner h-[800px] relative group">
					<iframe
						src="attachments/BradyManske.pdf"
						className="w-full h-full p-4"
						title="Resume PDF"
					/>
				</div>
			</section>
		</div>
	);
};

export default AboutMe;
