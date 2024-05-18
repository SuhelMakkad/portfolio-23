export type Project = {
  title: string;
  subTitle: string;
  description: string;
  links: {
    live: string;
    github: string;
  };
  usedTechs: Tech[];
};

export type Tech = {
  label: string;
  href?: string;
};

export const githubLink = "https://github.com/SuhelMakkad";

export const universityLink = "https://www.ddu.ac.in/";

export const socialLinks = [
  {
    label: "email",
    href: "mailto:makadsuhel11@gmail.com",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/suhel-makkad-606a3219b/",
  },
  {
    label: "GitHub",
    href: githubLink,
  },
  {
    label: "twitter",
    href: "https://twitter.com/suhel_makad",
  },
];

export const techMap = {
  next13: {
    label: "Next 13",
    href: "https://beta.nextjs.org/docs",
  },
  typescript: {
    label: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  tailwind: {
    label: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  tmdb: {
    label: "TMDB API",
    href: "https://www.themoviedb.org/",
  },
  vite: {
    label: "Vite",
    href: "https://vitejs.dev/",
  },
  webGames: {
    label: "Web Games",
  },
  githubActions: {
    label: "GitHub Actions",
    href: "https://github.com/features/actions",
  },
  openSource: {
    label: "Open Source",
  },
  vsCodeExtension: {
    label: "VS Code Extension",
    href: "https://code.visualstudio.com/docs/editor/extension-marketplace",
  },
  shadcnUI: {
    label: "shadcn/UI",
    href: "https://ui.shadcn.com/",
  },
};

export const projects: Project[] = [
  {
    title: "Metflix",
    subTitle: "A Netflix Clone",
    links: {
      live: "https://met-flix.vercel.app",
      github: "https://github.com/SuhelMakkad/metflix",
    },
    description:
      "This app allows users to search for movies and TV shows and view their details such as the genre, release year, rating, and cast.",
    usedTechs: [
      techMap.next13,
      techMap.tailwind,
      techMap.typescript,
      techMap.tmdb,
    ],
  },
  {
    title: "VS Code Extension for shadcn/UI",
    subTitle: "Add components from shadcn/ui directly from VS Code",
    links: {
      live: "https://marketplace.visualstudio.com/items?itemName=SuhelMakkad.shadcn-ui",
      github: "https://github.com/SuhelMakkad/vscode-shadcn-ui",
    },
    description:
      "This extensions helps install the shadcn/ui components directly from VS Code. This extension is a great way to speed up the development process and make it easier to use shadcn/ui components in your react projects. This project has over 5.8K downloads on the VS Code marketplace.",
    usedTechs: [
      techMap.openSource,
      techMap.typescript,
      techMap.shadcnUI,
      techMap.vsCodeExtension,
    ],
  },
  {
    title: "Game of Life",
    subTitle: "Zero Player Game",
    links: {
      live: "https://suhelmakkad.github.io/GameOfLife/",
      github: "https://github.com/SuhelMakkad/GameOfLife",
    },
    description:
      "Experimenting with the idea of Conway's Game of Life, where a living cell is represented by a dot on a screen. These colonies of cells undergo some amazing generation cycles when certain rules are applied to them. Just set the seed value and enjoy the show",
    usedTechs: [techMap.typescript, techMap.vite, techMap.webGames],
  },
  {
    title: "Fashion",
    subTitle: "Responsive Modern Landing Page",
    links: {
      live: "https://suhelmakkad.github.io/fashion-landing-page/",
      github: "https://github.com/SuhelMakkad/fashion-landing-page",
    },
    description:
      "Modern, responsive landing page using Tailwind CSS and TypeScript with semantic HTML, best practices, and modern CSS features for a high-quality user experience.",
    usedTechs: [techMap.tailwind, techMap.typescript, techMap.githubActions],
  },
];
