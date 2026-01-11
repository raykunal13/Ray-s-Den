import { Code, Palette, Zap } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Movie Site",
    description:
      "A movie streaming platform built with React. Features include dynamic content loading, search functionality, and trailer playback using TMDB API.",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Firebase",
    ],
    icon: Code,
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description:
      "A modern e-commerce website with cart functionality, product filtering, and Stripe payment integration. Built using Next.js and Redux.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
    technologies: ["Next.js", "React", "Redux", "Tailwind CSS", "Stripe"],
    icon: Palette,
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Advanced Todo App",
    description:
      "A feature-rich todo application with drag-and-drop, categories, and local storage. Implements React Context for state management.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "DND Kit",
    ],
    icon: Zap,
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description:
      "An interactive Tic Tac Toe game with multiplayer support, move history, and AI opponent using minimax algorithm.",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
    technologies: ["React", "JavaScript", "CSS3", "Socket.io", "AI Logic"],
    icon: Code,
    github: "#",
    demo: "#",
  },
];
