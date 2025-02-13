import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export const COLOR_THEMES_LIST = [
    "#10bfff",
    "#f0404f",
    "#fcae1e",
    "#a3e635",
    "#34d399",
];

export const SOCIALS_LIST = [
    {
        name: "Github",
        link: "https://github.com/rajatverma311201",
        icon: <FaGithub />,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/rajatverma311201/",
        icon: <FaLinkedin />,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/rajat_verma3112/",
        icon: <FaInstagramSquare />,
    },
];

export const PROJECTS_LIST = [
    {
        slug: "the-wild-oasis-react",
        name: "The Wild Oasis",
        description: "A React app for managing a fictional resort. Admin Panel",
        descriptionSecondary:
            "Admin panel includes charts and statistics for bookings, revenue, etc.",
        liveLink: "https://the-wild-oasis-react.vercel.app/",
        githubLink: "https://github.com/rajatverma311201/the-wild-oasis-react",
        mainImage:
            "/projects-images/the-wild-oasis-react/the-wild-oasis-react-main.png",
        technologies: [
            "React",
            "Supabase",
            "React Query",
            "Styled Components",
            "React Hook Form",
            "Recharts",
        ],
        topics: [
            "React",
            "React Query",
            "Styled Components",
            "React Hook Form",
            "Supabase",
            "Authentication - Supabase",
            "Authorization - Supabase",
            "Supabase Storage",
            "React Design Patterns",
            "Compound Component Pattern",
            "Highly Reusable Components",
            "React Custom Hooks",
            "React Router",
            "Recharts",
            "React Hot Toast",
        ],
    },

    {
        slug: "auth-nextjs",
        name: "Auth NextJS",
        description:
            "A NextJS app with authentication, authorization and roles",
        descriptionSecondary:
            "Users can login, signup, reset password, update profile. Admin can manage users, roles, permissions",
        liveLink: "https://auth-nextjs.rajat-verma.in/",
        githubLink: "https://github.com/rajatverma311201/auth-nextjs",
        mainImage: "/projects-images/auth-nextjs/auth-nextjs-main.png",
        technologies: [
            "NextJS",
            "MongoDB",
            "Prisma",
            "Auth.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Server Actions",
        ],
        topics: [
            "🔐 Next-auth v5 (Auth.js)",
            "🚀 Next.js 14 with server actions",
            "🔑 Credentials Provider",
            "🌐 OAuth Provider (Social login with Google & GitHub)",
            "🔒 Forgot password functionality",
            "✉️ Email verification",
            "📱 Two factor verification (2FA)",
            "👥 User roles (Admin & User)",
            "🔓 Login component (Opens in redirect or modal)",
            "📝 Register component",
            "🤔 Forgot password component",
            "✅ Verification component",
            "⚠️ Error component",
            "🔘 Login button",
            "🚪 Logout button",
            "🚧 Role Gate",
            "🔍 Exploring next.js middleware",
            "📈 Extending & Exploring next-auth session",
            "🔄 Exploring next-auth callbacks",
            "👤 useCurrentUser hook",
            "🛂 useRole hook",
            "🧑 currentUser utility",
            "👮 currentRole utility",
            "🖥️ Example with server component",
            "💻 Example with client component",
            "👑 Render content for admins using RoleGate component",
            "🛡️ Protect API Routes for admins only",
            "🔐 Protect Server Actions for admins only",
            "📧 Change email with new verification in Settings page",
            "🔑 Change password with old password confirmation in Settings page",
            "🔔 Enable/disable two-factor auth in Settings page",
            "🔄 Change user role in Settings page (for development purposes only)",
        ],
    },

    {
        slug: "jotion",
        name: "Jotion",
        description:
            "A platform similar to notion for jotting down notes and tasks",
        descriptionSecondary:
            "Users can create, edit, delete notes and tasks. Dark mode available, publish notes and tasks",
        liveLink: "https://jotion.rajat-verma.in/",
        githubLink: "https://github.com/rajatverma311201/next-jotion",
        mainImage: "/projects-images/jotion/jotion-main.png",
        technologies: [
            "NextJS",
            "Convex",
            "Blocknote",
            "Clerk Auth",
            "React Hook Form",
            "Tailwind CSS",
            "Shadcn UI",
        ],
        topics: [
            "Real-time database with Prisma",
            "Notion-style editor 📝 ",
            "Light and Dark mode 🌓",
            "Infinite children documents 🌲",
            "Trash can & soft delete 🗑️",
            "Authentication 🔐 ",
            "File upload",
            "File deletion",
            "File replacement",
            "Icons for each document (changes in real-time) 🌠",
            "Expandable sidebar ➡️🔀⬅️",
            "Full mobile responsiveness 📱",
            "Publish your note to the web 🌐",
            "Fully collapsable sidebar ↕️",
            "Landing page 🛬",
            "Cover image of each document 🖼️",
            "Recover deleted files 🔄📄",
        ],
    },
    {
        slug: "g1aqua",
        name: "G1 Aqua",
        description: "Website for a water purifier company",
        descriptionSecondary:
            "Users can see products, services, contact details, send and enquiry",
        liveLink: "https://g1aqua.com/",
        technologies: [
            "NextJS",
            "Tailwind CSS",
            "Shadcn UI",
            "Firebase",
            "Nodemailer",
        ],
        mainImage: "/projects-images/g1aqua/g1aqua-main.png",
    },
    {
        slug: "adventour-app",
        name: "Adventour",
        description:
            "A Server Side Rendered Website for Booking Adventure Tours",
        descriptionSecondary:
            "User can book tours, give reviews,login, signup, reset password, update profile. Admin can manage tours, users, bookings and reviews",
        liveLink: "https://adventour-production.up.railway.app/",
        githubLink: "https://github.com/rajatverma311201/Adventour",
        mainImage: "/projects-images/adventour-app/adventour-main.png",
        technologies: ["NodeJS", "Express", "Mongoose", "MongoDB", "EJS"],
        topics: [
            "NodeJS",
            "Express",
            "Server Side Javascript",
            "Backend Development",
            "Event Loop",
            "Mongoose ",
            "MongoDB",
            "HTTP Methods",
            "REST APIs",
            "Express Middlewares",
            "Error Handling",
            "Routes and Models",
            "MVC Architecture",
            "JWT Authentication & Cookies",
            "Authorization & Web Security",
            "Nodemailer",
            "EJS and View Engines",
            "Payments using Stripe",
        ],
    },

    {
        slug: "forkify-app-javascript",
        name: "Forkify",
        description:
            "A webapp to search for recipes and save them to your favourites",
        descriptionSecondary:
            "Built while learning JavaScript, ES6, Parcel, MVC",
        liveLink: "https://forkify-app-js-rajat.netlify.app/",
        githubLink:
            "https://github.com/rajatverma311201/forkify-app-javascript",
        mainImage: "/projects-images/forkify-app-javascript/forkify-main.png",
        technologies: ["JavaScript", "Sass", "Parcel", "ES6"],
        topics: [
            "Javascript",
            "Advanced DOM Manipulation",
            "ES6",
            "Parcel",
            "MVC",
            "APIs",
            "Asynchronous JavaScript",
            "Netlify Forms",
        ],
    },

    {
        slug: "mapty-app",
        name: "Mapty",
        description:
            "A simple webapp to log your running and cycling on a map using the Geolocation API and Leaflet Maps",
        descriptionSecondary:
            "Built while learning JavaScript, ES6, Object Oriented Programming, GeoLocation API",
        liveLink: "https://rajatverma311201.github.io/Mapty-App/",
        githubLink: "https://github.com/rajatverma311201/Mapty-App",
        mainImage: "/projects-images/mapty-app/mapty-main.png",
        technologies: ["JavaScript", "ES6", "OOPs"],
        topics: [
            "Javascript",
            "Advanced DOM Manipulation",
            "ES6",
            "Parcel",
            "MVC",
            "APIs",
            "Asynchronous JavaScript",
            "Netlify Forms",
        ],
    },

    {
        slug: "natours-sass",
        name: "Natours",
        description:
            "A beautiful Landing Page for a fictional adventour tour company",
        descriptionSecondary: "Built while learning Advanced CSS and Sass",
        liveLink: "https://natours-sass-web.netlify.app/",
        githubLink: "https://github.com/rajatverma311201/natours-sass",
        mainImage: "/projects-images/natours-sass/natours-main.png",
        technologies: ["CSS", "Sass", "HTML"],
        topics: [
            "Advanced CSS",
            "Pseudo classes & elements",
            "CSS animations",
            "Specificity and Cascading",
            "Sass",
            "7-1 Sass Architecture",
            "Responsive Design",
            "BEM Methodology",
        ],
    },

    {
        slug: "omnifood-html-css",
        name: "Omnifood",
        description:
            "A beautiful home page for a food delivery website using HTML and CSS",
        descriptionSecondary:
            "Built while learning HTML, CSS, Responsive Design",
        liveLink: "https://omnifood-html-css-rv.netlify.app/",
        githubLink: "https://github.com/rajatverma311201/omnifood-html-css",
        mainImage: "/projects-images/omnifood-html-css/omnifood-main.png",
        technologies: ["CSS", "CSS Grid", "CSS Flexbox", "HTML"],
        topics: [
            "CSS",
            "CSS Grid",
            "CSS Flexbox",
            "Responsive Design",
            "BEM Methodology",
            "Netlify Forms",
        ],
    },

    {
        slug: "tourist-css",
        name: "Tourist",
        description:
            "A beautiful responsive home page for a travelling website",
        descriptionSecondary: "A fun project for refreshing my css skills",
        liveLink: "https://rajatverma311201.github.io/Tourist",
        githubLink: "https://github.com/rajatverma311201/Tourist",
        mainImage: "/projects-images/tourist-css/tourist-main.png",
        technologies: ["CSS", "Javascript", "HTML"],
        topics: [
            "CSS Flexbox",
            "CSS Grid",
            "Javascript",
            "HTML",
            "Responsive Design",
        ],
    },

    {
        slug: "trillo-sass",
        name: "Trillo",
        description:
            "A beautiful home page for a fictional hotel booking website",
        descriptionSecondary: "Built while learning CSS Flexbox and Sass",
        liveLink: "https://trillo-sass-web.netlify.app/",
        githubLink: "https://github.com/rajatverma311201/trillo-sass",
        mainImage: "/projects-images/trillo-sass/trillo-main.png",
        technologies: ["CSS Flexbox", "Sass", "HTML"],
        topics: [
            "CSS Flexbox",
            "Pseudo elements and classes",
            "7-1 Sass Architecture",
            "Responsive Design",
            "BEM Methodology",
        ],
    },

    {
        slug: "nexter-sass",
        name: "Nexter",
        description:
            "A beautiful home page for a fictional real estate website",
        descriptionSecondary: "Built while learning Sass and CSS Grid",
        liveLink: "https://nexter-sass-web.netlify.app/",
        githubLink: "https://github.com/rajatverma311201/nexter-sass",
        mainImage: "/projects-images/nexter-sass/nexter-main.png",
        technologies: ["CSS Grid", "Sass", "HTML"],
        topics: [
            "CSS",
            "Sass",
            "7-1 Sass Architecture",
            "CSS Grid",
            "Responsive Design",
            "BEM Methodology",
        ],
    },
];

export const EXPERIENCE_LIST = [
    {
        company: "Nucleus Software",
        location: "Noida, Uttar Pradesh",
        expType: "Job",
        position: "Software Engineer",
        type: "Full Time",
        startMonth: "Jul",
        startYear: "2024",
        endMonth: "Present",
        // endYear: "2023",
        // duration: "6 months",
        technologies: [
            "React",
            "Spring Boot",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
            "NodeJS",
        ],
    },
    {
        company: "G1 Aqua | R-Tech Systems & Services",
        location: "Noida, Uttar Pradesh",
        expType: "Personal Business",
        position: "Full Stack Developer",
        // type: "Full Time",
        startMonth: "Jan",
        startYear: "2023",
        endMonth: "Present",
        // endYear: "2023",
        // duration: "6 months",
        technologies: [
            "React",
            "NextJS",
            "NodeJS",
            "Firebase",
            "Tailwind CSS",
            "Shadcn UI",
            "Nodemailer",
        ],
    },
    {
        company: "Nucleus Software",
        location: "Noida, Uttar Pradesh",
        expType: "Internship",
        position: "Software Engineer",
        type: "Full Time",
        startMonth: "Jan",
        startYear: "2023",
        endMonth: "June",
        endYear: "2023",
        duration: "6 months",
        technologies: [
            "React",
            "Spring Boot",
            "NodeJS",
            "Flask",
            "Elastic Search",
        ],
    },
    {
        company: "Anaemia Mukt Bharat, Ministry of Health and Family Welfare",
        location: "Remote",
        expType: "Internship",
        position: "Frontend Developer",
        type: "Part Time",
        startMonth: "April",
        startYear: "2023",
        endMonth: "May",
        endYear: "2023",
        duration: "2 months",
        technologies: ["React"],
    },
    {
        company: "Svasth 360",
        location: "Remote",
        expType: "Internship",
        position: "Software Engineer",
        type: "Part Time",
        startMonth: "Mar",
        startYear: "2023",
        endMonth: "April",
        endYear: "2023",
        duration: "2 months",
        technologies: [
            "React Native",
            "NextJS",
            "NodeJS",
            "MongoDB",
            "Mongoose",
            "AgoraSDK",
        ],
    },
    {
        company: "Plasium",
        location: "Remote",
        expType: "Internship",
        position: "Software Engineer",
        type: "Part Time",
        startMonth: "Feb",
        startYear: "2023",
        endMonth: "Mar",
        endYear: "2023",
        duration: "2 months",
        technologies: [
            "React Native",
            "React",
            "NodeJS",
            "MongoDB",
            "Mongoose",
        ],
    },
];

export const EDUCATION_LIST = [
    {
        institute: "Indian Institute of Technology, Mandi",
        location: "Mandi, Himachal Pradesh",
        degreeShort: "B.Tech",
        degreeLong: "Bachelor of Technology",
        major: "Engineering Physics",
        minor: "Computer Science and Engineering",
        startMonth: "Nov",
        startYear: "2020",
        endMonth: "June",
        endYear: "2024",
        time: "2020-24",
    },
    {
        institute: "St. Antony's Inter College",
        location: "Lucknow, Uttar Pradesh",
        degreeShort: "12th (ISC)",
        degreeLong: "Intermediate",
        startMonth: "April",
        startYear: "2018",
        endMonth: "March",
        endYear: "2019",
        time: "2019",
    },
    {
        institute: "St. Antony's Inter College",
        location: "Lucknow, Uttar Pradesh",
        degreeShort: "10th (ICSE)",
        degreeLong: "High School",
        startMonth: "April",
        startYear: "2016",
        endMonth: "March",
        endYear: "2017",
        time: "2017",
    },
];

export const COURSES_LIST = [
    {
        slug: "react-course",
        platform: "Udemy",
        name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        certificateImg: "/course-images/react-course.jpg",
        certificateLink:
            "https://www.udemy.com/certificate/UC-7438d0b8-f930-4b09-bbd2-56733e310171/",
        duration: "48",
        technologies: ["React", "Redux", "NextJS"],
        topics: [
            "React Basics and Single Page Applications",
            "React Components & Styling",
            "CSS Modules & Styled Components",
            "React fragment & Portals",
            "React State Management",
            "React Hooks",
            "Handling Side Effects and using Reducers",
            "Custom React Hooks",
            "React Routing",
            "React Forms & Validation",
            "Application wide State Management",
            "Http Requests",
            "Authentication & Authorization with React",
            "React Context API",
            "React Redux",
            "NextJS Basics",
            "React Animations",
            "React Testing and Deployment",
            "React Performance Optimization",
            "React Design Patterns",
            "React with Typescript",
        ],
    },
    {
        slug: "nodejs-course",
        platform: "Udemy",
        name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
        certificateImg: "/course-images/nodejs-course.jpg",
        certificateLink:
            "https://www.udemy.com/certificate/UC-6ba710f0-9f24-4581-9f52-7183902296fd/",
        duration: "42",
        technologies: ["NodeJS", "Express", "MongoDB", "Mongoose"],
        topics: [
            "NodeJS Basics and Backend Development",
            "NPM and Modules and MVC Architecture",
            "Event Loop and NodeJS Internals",
            "Express Basics and HTTP Methods",
            "REST APIs and Express Routing",
            "Express Middlewares and Request-Response Cycle",
            "MongoDB Basics and CRUD Operations",
            "Mongoose Models and Database Schema",
            "Aggregation Pipeline and Middleware",
            "Document and Query Middleware",
            "Virtual Properties and Static Methods",
            "Error Handling in Express",
            "JWT Authentication and Authorization",
            "Password Hashing and Security",
            "Cookies and Sessions",
            "HTTP headers and CORS",
            "Data Sanitization and Rate Limiting",
            "Credit Card Payments with Stripe",
        ],
    },
    {
        slug: "javascript-course",
        platform: "Udemy",
        name: "The Complete JavaScript Course 2021: From Zero to Expert!",
    },
];

export const LANGUAGES_LIST = [
    {
        name: "JavaScript",
        icon: "javascript.svg",
    },
    {
        name: "TypeScript",
        icon: "typescript.svg",
    },
    {
        name: "Java",
        icon: "java.svg",
    },
    {
        name: "Python",
        icon: "python.svg",
    },
    {
        name: "Dart",
        icon: "dart.svg",
    },
    {
        name: "C++",
        icon: "cpp.svg",
    },
];

export const MOBILE_SKILLS_LIST = [
    {
        name: "React Native",
        icon: "react-native.svg",
    },

    {
        name: "Flutter",
        icon: "flutter.svg",
    },
];

export const WEB_SKILLS_LIST = [
    {
        name: "React",
        icon: "react.svg",
    },
    {
        name: "Redux",
        icon: "redux.svg",
    },
    {
        name: "NextJS",
        icon: "nextjs.svg",
    },
    {
        name: "NodeJS",
        icon: "nodejs.svg",
    },
    {
        name: "Express",
        icon: "express.svg",
    },
    { name: "Prisma", icon: "prisma.svg" },
    {
        name: "NestJS",
        icon: "nestjs.svg",
    },

    {
        name: "Sass",
        icon: "sass.svg",
    },
    {
        name: "CSS",
        icon: "css.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwindcss.svg",
    },
    {
        name: "Django",
        icon: "django.svg",
    },
    {
        name: "Flask",
        icon: "flask.svg",
    },
    {
        name: "HTML",
        icon: "html.svg",
    },
];

export const DATABASE_SKILLS_LIST = [
    {
        name: "MongoDB",
        icon: "mongodb.svg",
    },
    {
        name: "Redis",
        icon: "redis.svg",
    },
    {
        name: "PostgreSQL",
        icon: "postgresql.svg",
    },
    {
        name: "MySQL",
        icon: "mysql.svg",
    },
];

export const TOOLS_LIST = [
    {
        name: "Git",
        icon: "git.svg",
    },
    {
        name: "Supabase",
        icon: "supabase.svg",
    },
    {
        name: "Firebase",
        icon: "firebase.svg",
    },
    {
        name: "Docker",
        icon: "docker.svg",
    },
    {
        name: "Postman",
        icon: "postman.svg",
    },
    {
        name: "VS Code",
        icon: "vscode.svg",
    },
];
