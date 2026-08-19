export interface Project {
  id: string;
  name: string;
  description: string;
  domain: string;
  technologies: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  stars: number;
  beginnerFriendly: boolean;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "freecodecamp",
    name: "freeCodeCamp",
    description:
      "Open source platform that helps people learn to code for free through interactive lessons, certifications, and a massive community-driven curriculum.",
    domain: "Education",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    difficulty: "Intermediate",
    stars: 417000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/freeCodeCamp/freeCodeCamp",
  },
  {
    id: "react",
    name: "React",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture, developed and maintained by Meta and a large open source community.",
    domain: "Frontend",
    technologies: ["JavaScript", "TypeScript", "Flow"],
    difficulty: "Intermediate",
    stars: 236000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/facebook/react",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    description:
      "An end-to-end open source platform for machine learning, enabling developers to build and deploy ML models at scale across many devices.",
    domain: "Machine Learning",
    technologies: ["Python", "C++", "CUDA"],
    difficulty: "Advanced",
    stars: 190000,
    beginnerFriendly: false,
    githubUrl: "https://github.com/tensorflow/tensorflow",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "The React framework for production with hybrid static and server rendering, TypeScript support, smart bundling, and route pre-fetching.",
    domain: "Web Frameworks",
    technologies: ["TypeScript", "React", "Node.js"],
    difficulty: "Intermediate",
    stars: 132000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/vercel/next.js",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    description:
      "An open source system for automating deployment, scaling, and management of containerized applications originally designed by Google.",
    domain: "DevOps",
    technologies: ["Go", "Bash", "Docker"],
    difficulty: "Advanced",
    stars: 114000,
    beginnerFriendly: false,
    githubUrl: "https://github.com/kubernetes/kubernetes",
  },
  {
    id: "vscode",
    name: "VS Code",
    description:
      "A source-code editor built on Electron with rich extension ecosystem, built-in Git support, and powerful debugging capabilities.",
    domain: "Developer Tools",
    technologies: ["TypeScript", "JavaScript", "CSS"],
    difficulty: "Advanced",
    stars: 167000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/microsoft/vscode",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    description:
      "An open source machine learning library providing a flexible tensor library and deep neural networks built on a tape-based autograd system.",
    domain: "Machine Learning",
    technologies: ["Python", "C++", "CUDA"],
    difficulty: "Advanced",
    stars: 88000,
    beginnerFriendly: false,
    githubUrl: "https://github.com/pytorch/pytorch",
  },
  {
    id: "flutter",
    name: "Flutter",
    description:
      "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    domain: "Mobile",
    technologies: ["Dart", "C++", "Swift"],
    difficulty: "Intermediate",
    stars: 168000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/flutter/flutter",
  },
  {
    id: "numpy",
    name: "NumPy",
    description:
      "The fundamental package for scientific computing in Python, providing powerful N-dimensional array objects and broadcasting capabilities.",
    domain: "Scientific Computing",
    technologies: ["Python", "C", "Cython"],
    difficulty: "Intermediate",
    stars: 29000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/numpy/numpy",
  },
  {
    id: "redis",
    name: "Redis",
    description:
      "An in-memory data structure store used as a database, cache, message broker, and streaming engine, written in C.",
    domain: "Databases",
    technologies: ["C", "Lua", "Go"],
    difficulty: "Intermediate",
    stars: 68000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/redis/redis",
  },
];
