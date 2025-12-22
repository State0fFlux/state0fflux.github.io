import { Project } from "./types";

export const PROJECTS: Project[] = [
	{
		title: "Crust's Bakery",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIzNzI1MjUwLnBuZw==/315x250%23c/fJX9Ap.png",
		tagline: "It’s not just about the bread you make; it’s about who you share it with!",
		writeup: `
    `,
		githubUrl: "https://github.com/State0fFlux/crusts-bakery",
		demoUrl: "https://itch.io/embed-upload/15322444?color=000000",
		images: [],
		tags: ["Unity", "C#"],
		award: "3rd Place",
	},
	{
		title: "Kindling",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIxOTU2NTg2LnBuZw==/315x250%23c/kTiFuJ.png",
		tagline: "Defend warmth against a world gone cold.",
		writeup: `
      ## Project Background
      Kindling was developed as part of the Imaginary Game Jam, a 2-week long event during Summer 2025. This game jam was exclusive to solo developers, meaning I built this game from scratch in 2 weeks, completely independently!
      ## Features
      - Modular wave system with timed event triggers and scalable difficulty to ensure engaging gameplay
      - Multiple enemy types with unique movement and attack logic
      - Robust UI system to communicate changes in inventory, health, and stamina
      - Custom shaders for hurt/death feedback effects
    `,
		githubUrl: "https://github.com/State0fFlux/Kindling",
		demoUrl: "https://itch.io/embed-upload/15906793?color=000000",
		images: [],
		tags: ["Unity", "C#"],
		award: "Community Favorite",
	},
	{
		title: "Bug Hunt",
		category: "Video Game",
		thumbnail: "https://img.itch.zone/aW1nLzIxNjI4ODU5LnBuZw==/315x250%23c/Nocoo%2F.png",
		tagline: "Collect bugs to earn your Bug-Catching Badge and impress your scout leader!",
		writeup: `
    `,
		githubUrl: "https://github.com/State0fFlux/Bug-Hunt",
		demoUrl: "https://itch.io/embed-upload/15906853?color=000000",
		images: [],
		tags: ["Unity", "C#"],
		award: "1st Place",
	},
];

/*

TO ADD:
- trophy (print with an award icon and text next to it)
- array of objects with title, array of images (LHS), & text (RHS) (for devlogs / process, that can be side)
- date / time period
*/
