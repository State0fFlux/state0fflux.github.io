
import React from 'react';
import { Project } from '../types';
import { Github, Gamepad2, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group bg-white border border-slate-100 rounded-3xl overflow-hidden cursor-pointer hover:border-purple-200 transition-all hover:shadow-[0_20px_50px_rgba(147,51,234,0.08)]"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={20} className="text-purple-600" />
        </div>
      </div>
      
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest">{project.category}</span>
            <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
          </div>
          <div className="flex gap-3 text-slate-300">
            {project.githubUrl && <Github size={18} />}
            {project.itchUrl && <Gamepad2 size={18} />}
          </div>
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-50 text-[10px] font-bold rounded-full text-slate-600 border border-slate-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
