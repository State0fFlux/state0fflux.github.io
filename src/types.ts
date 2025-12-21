export type ProjectCategory = "Video Game" | "Web" | "Software";

export interface Project {
	id: string;
	title: string;
	category: ProjectCategory;
	thumbnail: string;
	shortDescription: string;
	longWriteup: string;
	githubUrl?: string;
	demoUrl?: string;
	images: string[];
	tags: string[];
}

export type ActiveTab = "home" | "projects";
