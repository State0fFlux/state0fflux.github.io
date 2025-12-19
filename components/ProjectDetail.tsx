
import React from 'react';
import { Project } from '../types';
import { X, Github, Gamepad2, ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.trim().startsWith('##')) {
        return <h3 key={i} className="text-2xl font-bold mt-12 mb-6 text-slate-900">{line.replace('##', '').trim()}</h3>;
      }
      if (line.trim().startsWith('-')) {
        return <li key={i} className="ml-6 mb-2 text-slate-600 list-disc">{line.replace('-', '').trim()}</li>;
      }
      return <p key={i} className="mb-6 text-slate-600 leading-relaxed text-lg">{line}</p>;
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 lg:p-12 overflow-hidden">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300 border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-slate-50 bg-white sticky top-0 z-10">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em]">{project.category}</span>
            <h2 className="text-3xl font-black text-slate-900">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-all shadow-sm"
          >
            <X size={24} />
          </button>
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
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect & Launch</h4>
                  <div className="flex flex-col gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="flex items-center justify-between p-4 bg-slate-900 text-white rounded-2xl hover:bg-purple-600 transition-all group">
                        <span className="flex items-center gap-3 font-bold">
                          <Github size={20} /> View Source
                        </span>
                        <ChevronRight size={18} />
                      </a>
                    )}
                    {project.itchUrl && (
                      <a href={project.itchUrl} className="flex items-center justify-between p-4 bg-purple-50 text-purple-600 border border-purple-100 rounded-2xl hover:bg-purple-100 transition-all font-bold">
                        <span className="flex items-center gap-3">
                          <Gamepad2 size={20} /> Play Game
                        </span>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-700 border border-slate-100">
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
                    <img src={img} alt={`Detail ${idx}`} className="w-full rounded-3xl shadow-lg border border-slate-100" />
                    <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Process Insight #{idx + 1}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50/50 border-t border-slate-100 text-center text-[10px] font-black text-slate-400 tracking-[0.3em]">
          CASE STUDY: {project.title.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
