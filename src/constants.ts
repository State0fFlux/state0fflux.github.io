
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nebula-strider',
    title: 'Nebula Strider',
    category: 'Game',
    thumbnail: 'https://picsum.photos/seed/game1/800/600',
    shortDescription: 'A fast-paced celestial platformer built with Unity and C#.',
    longWriteup: `
      ## The Concept
      Nebula Strider started as a weekend game jam project. The core mechanic is "Momentum Shifting" where the player can change gravity locally to navigate complex 3D structures.

      ## Technical Challenges
      One of the biggest hurdles was implementing the custom physics engine that allows for non-standard gravity vectors. I solved this by using dot products to determine the player's alignment relative to the nearest orbital body.

      ## Visual Design
      The aesthetic is inspired by 80s synthwave. I created custom shaders in HLSL to achieve the glowing neon outlines and grid-based terrain.

      ## Future Development
      I plan to add a level editor and online leaderboards using a Firebase backend.
    `,
    githubUrl: 'https://github.com/placeholder/nebula-strider',
    itchUrl: 'https://itch.io/placeholder/nebula-strider',
    images: [
      'https://picsum.photos/seed/nebula1/1200/800',
      'https://picsum.photos/seed/nebula2/1200/800',
      'https://picsum.photos/seed/nebula3/1200/800'
    ],
    tags: ['Unity', 'C#', 'HLSL', 'Game Jam']
  },
  {
    id: 'algo-visualizer',
    title: 'Pathfinding Visualizer',
    category: 'Software',
    thumbnail: 'https://picsum.photos/seed/code1/800/600',
    shortDescription: 'Interactive visualization of A*, Dijkstra, and BFS algorithms.',
    longWriteup: `
      ## Overview
      This project was born from my curiosity about how different algorithms explore search spaces. It allows users to draw walls, place start/end nodes, and watch the algorithm step through the grid in real-time.

      ## Tech Stack
      - **React**: For the state management and UI.
      - **Canvas API**: For high-performance grid rendering.
      - **TypeScript**: Ensuring type safety for complex algorithm logic.

      ## What I Learned
      Building this taught me a lot about asynchronous programming in JavaScript (using Promises to control visualization speed) and the memory trade-offs between different search strategies.
    `,
    githubUrl: 'https://github.com/placeholder/algo-visualizer',
    demoUrl: 'https://example.com/demo',
    images: [
      'https://picsum.photos/seed/algo1/1200/800',
      'https://picsum.photos/seed/algo2/1200/800'
    ],
    tags: ['React', 'TypeScript', 'Algorithms', 'Data Viz']
  },
  {
    id: 'cyber-runner',
    title: 'Cyber Runner VR',
    category: 'Game',
    thumbnail: 'https://picsum.photos/seed/game2/800/600',
    shortDescription: 'A high-octane VR experience focusing on fluid parkour movement.',
    longWriteup: `
      ## VR Challenges
      Developing for VR requires a strict 90FPS target. I optimized the environment using static batching and bake-light techniques to maintain performance while keeping high visual fidelity.

      ## Movement Mechanics
      Comfort is key in VR. I implemented a "Vignette" system during high-velocity movement to reduce motion sickness, which significantly improved playtest feedback.
    `,
    githubUrl: 'https://github.com/placeholder/cyber-runner',
    itchUrl: 'https://itch.io/placeholder/cyber-runner',
    images: [
      'https://picsum.photos/seed/vr1/1200/800',
      'https://picsum.photos/seed/vr2/1200/800'
    ],
    tags: ['VR', 'Unity', 'Optimization', 'Interaction Design']
  }
];
