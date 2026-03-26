export type Work = {
  title: string;
  titledesc: string;
  description: string;
  images: {
    image1: string;
    image2?: string;
    image3?: string;
  };
  techStack: string[];
  date: string;
  githubLink?: string;
  liveLink?: string;
};

export const workData: Work[] = [
  {
    title: "DLnet",
    titledesc:
      "Forum with live match updates built for the popular game Deadlock, using TanStack Start and Supabase",
    description:
      "Developed a full-stack social media platform with a TanStack Start frontend, Supabase database, and Better-auth authentication, implementing efficient data fetching using TanStack Query for database interactions.",
    images: {
      image1: "/dlnet/1.png",
      image2: "/dlnet/2.png",
    },
    techStack: ["TanStack Start", "Supabase", "Better auth", "Drizzle ORM"],
    githubLink: "https://github.com/kokobus122/dlnet",
    liveLink: "https://dlnet.vercel.app/",
    date: "2026",
  },
  {
    title: "LCJ express",
    titledesc:
      "Professional transport website featuring service listings, contact forms and location detail integrations.",
    description:
      "Professional transport website featuring service listings, contact forms and location detail integrations.",
    images: {
      image1: "/lcjexpress/1.png",
      image2: "/lcjexpress/2.png",
    },
    techStack: ["TanStack Start", "shadCN"],
    githubLink: "",
    liveLink: "https://www.lcjexpress.se/",
    date: "2025",
  },
  {
    title: "LCJ horse",
    titledesc:
      "Professional horse transport website featuring live contact forms, service listings and id-based integrations.",
    description:
      "Professional horse transport website featuring live contact forms, service listings and id-based integrations. Contact forms are built with Resend and the website is built with TanStack Start for server-side functions and client-side rendering.",
    images: {
      image1: "/lcjhorse/1.png",
      image2: "/lcjhorse/2.png",
    },
    techStack: ["TanStack Start", "Resend", "shadCN"],
    githubLink: "",
    liveLink: "https://www.lcjhorse.se/",
    date: "2025",
  },
  {
    title: "Bumflix",
    titledesc:
      "Netflix clone built with TanStack Start and Supabase, featuring user authentication and responsive design.",
    description:
      "This project was first built using Vite and React-router along with TanStack Query, but was later rebuilt using TanStack Start to leverage its server-side rendering capabilities and efficient data fetching. It features user authentication, a responsive design, and a RESTful API.",
    images: {
      image1: "/bumflix/1.png",
    },
    techStack: ["TanStack Start", "Supabase", "Drizzle ORM", "Better auth"],
    githubLink: "",
    liveLink: "https://bumflix-gamma.vercel.app/",
    date: "2025",
  },
  {
    title: "Memory",
    titledesc:
      "A memory game built with TanStack Start and Redis for real-time updates.",
    description:
      "Memory game built with TanStack Start and serverless platform upstash Redis, featuring real-time updates and a responsive design. The game features live chat and game rooms for players to join and play together, with game state and chat messages stored in Redis for fast access and real-time updates.",
    images: {
      image1: "/memory/1.png",
      image2: "/memory/2.png",
    },
    techStack: ["TanStack Start", "Redis"],
    githubLink: "",
    liveLink: "https://memory-tau-six.vercel.app/",
    date: "2025",
  },
  {
    title: "Wave",
    titledesc:
      "Gaming social media platform built with Next.js, featuring user authentication and upload functionality.",
    description:
      "My first full-stack project, built with Next.js and featuring user authentication with Kinde, upload functionality, and a responsive design. The platform allows users to create profiles, upload gaming content, and interact with other users through comments and likes.",
    images: {
      image1:
        "https://utfs.io/f/277daa0a-5139-4242-8f01-0a4c132e0008-2629l.jpg",
      image2:
        "https://utfs.io/f/a44539de-bfb0-4166-b91e-56f75ca60b3b-1v7yah.jpg",
    },
    techStack: ["Next.js", "UploadThing", "Kinde"],
    githubLink: "",
    liveLink: "https://kinde-gilt.vercel.app/",
    date: "2024",
  },
  {
    title: "Invitely",
    titledesc:
      "Invite card builder with live updates for a simpler user experience.",
    description:
      "Made during the span of 3 hours using AI assistance to experiment with live updates and real-time features in connection to a Postgres database.",
    images: {
      image1: "/invitely/1.png",
      image2: "/invitely/2.png",
      image3: "/invitely/3.png",
    },
    techStack: ["TanStack Start", "Drizzle ORM", "Better auth", "Supabase"],
    githubLink: "https://github.com/kokobus122/invitely",
    liveLink: "https://invitely-iota.vercel.app/",
    date: "2026",
  },
  {
    title: "PCThrill",
    titledesc: "A PC related e-commerce website built with vanilla JavaScript.",
    description:
      "An old project of mine built without any JavaScript framework. The site features state management using local storage and a custom-built backend to allow users to add products to the store and manage their orders.",
    images: {
      image1:
        "https://utfs.io/f/c184be2a-8da7-4866-8b62-f22ef0e60136-l8uoyq.jpg",
      image2:
        "https://utfs.io/f/68d3d450-be00-4cea-a322-ba6dd6270c6d-jcf030.jpg",
    },
    techStack: ["JavaScript", "HTML", "SCSS"],
    githubLink: "https://kokobus122.github.io/PCThrill/",
    liveLink: "https://kokobus122.github.io/PCThrill/",
    date: "2023",
  },
  {
    title: "SBAutoReview",
    titledesc:
      "Account review website for the minecraft minigame Hypixel Skyblock featuring precise stat calculations and custom progression tracking.",
    description:
      "A minecraft account review website built for the popular minigame Hypixel Skyblock. Data fetching is done using a custom-built backend in Next.js that connects to the Mojang API and the Hypixel API to fetch player data and calculate precise stats for the users account. The website also features custom progression tracking for various in-game activities such as skill leveling and boss kills.",
    images: {
      image1:
        "https://utfs.io/f/04048ae1-4062-4ffd-be2a-430b6ae7f823-755cuk.jpg",
      image2:
        "https://utfs.io/f/9f9ea36e-1289-4ba1-9343-0a3e77065b03-755dii.jpg",
    },
    techStack: ["Next.js", "TypeScript"],
    githubLink: "https://github.com/kokobus122/SBAutoReview",
    liveLink: "https://sb-auto-review.vercel.app/",
    date: "2024",
  },
  {
    title: "GDPL",
    titledesc: "Platformer level leaderboard for the game Geometry Dash.",
    description:
      "A platformer level leaderboard for the popular game Geometry Dash. Data is manually inputted by users and stored in a json database, and the website features progression tracking for various difficulty tiers to allow users to stay engaged in the list. Now that I look back at this project, I realize how overkill using Next.js for this stack was since I never implemented any login or database functionality, but it was fun learning the page router along with their documentation. If I would redo the same project in the future, I would probably use Astro.js for a more static site approach.",
    images: {
      image1:
        "https://utfs.io/f/8df6077f-0378-4d98-8a5b-d29b8f2113c5-755f02.jpg",
      image2:
        "https://utfs.io/f/fbbe7a88-58d8-4e92-9ce5-bb8520ac96f7-755f1p.jpg",
    },
    techStack: ["Next.js", "DaisyUI", "TailwindCSS"],
    githubLink: "https://github.com/kokobus122/gdpl",
    liveLink: "https://gdpl.vercel.app/",
    date: "2023",
  },
];
