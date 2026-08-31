import type { Project, SkillCategory, Experience, Education, LeadershipRole, NavLink } from '../types'

export const personal = {
  name: 'Rafey Saleem',
  title: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'MERN Developer', 'Flutter Developer', 'Software Engineer'],
  tagline: 'Building scalable web applications, cross-platform mobile apps, and robust RESTful backends.',
  summary:
    'Computer Science graduate and full-stack developer with hands-on experience shipping production-grade MERN (React, Node.js, Express.js, MongoDB) applications and cross-platform Flutter apps. Built and deployed multi-service systems spanning REST APIs, AI-driven features, and admin dashboards. Strong foundation in DSA, OOP, and agile collaboration via Git/GitHub. Seeking a Full-Stack or MERN Developer role to build scalable, user-facing products.',
  location: 'Lahore, Pakistan',
  email: 'rafeysaleem66@gmail.com',
  phone: '+92 333 7463316',
  github: 'https://github.com/rafaysaleem0308',
  linkedin: 'https://www.linkedin.com/in/rafey-saleem',
  resumeUrl: '/Rafey__Resume.pdf',
  avatar: 'https://avatars.githubusercontent.com/u/119732562?v=4',
  stats: [
    { label: 'GitHub Repos', value: '20+' },
    { label: 'Tech Stacks', value: '5+' },
    { label: 'Years CS', value: '4' },
    { label: 'Internships', value: '2' },
  ],
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'indielife',
    title: 'IndieLife — Cross-Platform Independent-Living Platform',
    description:
      'Final Year Project at FAST-NUCES (Faculty-Supervised): 5-module independent-living platform covering meal planning, expense tracking, accommodation, local services, and safety, backed by a Node.js/Express/MongoDB REST API on Render with an AI expense planner using Flask and spaCy.',
    longDescription:
      'Architected a 5-module Flutter app covering meal planning, expense tracking, accommodation, local services, and safety, backed by a Node.js, Express.js, and MongoDB REST API deployed on Render. Developed an AI-powered expense planner using Flask and spaCy, trained on real PKR restaurant data to deliver personalized budget recommendations.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'spaCy', 'React', 'Render'],
    category: ['Full-Stack', 'Mobile', 'AI/ML', 'MERN'],
    githubUrl: 'https://github.com/rafaysaleem0308/INDIELIFE',
    stars: 3,
    featured: true,
    highlights: [
      'Architected a 5-module Flutter app covering meal planning, expense tracking, accommodation, local services, and safety',
      'Backed by a high-performance Node.js, Express.js, and MongoDB REST API deployed on Render',
      'Developed an AI-powered expense planner using Flask and spaCy, trained on real PKR restaurant data to deliver personalized budget recommendations',
      'Engineered a React administrative portal for system management and user coordination',
      'Final Year Project at FAST-NUCES — Faculty-Supervised',
    ],
    architectureHighlights: [
      '5-Module Flutter App',
      'Node.js & MongoDB REST API',
      'Flask & spaCy AI Engine',
      'Render Cloud Hosting',
      'React Management Dashboard',
    ],
  },
  {
    id: 'motorhub',
    title: 'MotorHub — Automotive Service Marketplace',
    description:
      'Multi-role automotive service marketplace serving Customers, Service Providers, and Admins, backed by PostgreSQL-backed REST APIs with Stripe payments, WebSocket-based real-time booking alerts, and Docker/Nginx containerized deployment.',
    longDescription:
      'Led Flutter architecture for a multi-role marketplace serving Customers, Service Providers, and Admins, backed by PostgreSQL-backed REST APIs with Stripe payments and WebSocket-based real-time booking alerts. Containerized backend services with Docker and configured Nginx as a reverse proxy for reliable deployment.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Nginx', 'Stripe', 'WebSocket', 'JWT'],
    category: ['Full-Stack', 'Mobile'],
    githubUrl: 'https://github.com/rafaysaleem0308/MotorHub',
    stars: 3,
    featured: true,
    internshipLabel: 'Tefteq Software — Internship Project',
    internshipRole: 'Mobile Development Project Lead & Full-Stack Developer',
    demoVideoUrl: 'https://res.cloudinary.com/yzk3kcga/video/upload/v1787507857/motorhub-demo.mp4',
    hideGithub: true,
    highlights: [
      'Led Flutter architecture for a multi-role marketplace serving Customers, Service Providers, and Admins',
      'Engineered Node.js, Express.js, and PostgreSQL-backed REST APIs with secure JWT authentication and RBAC',
      'Integrated Stripe payment gateway for seamless and secure checkout transactions',
      'Implemented WebSocket-based real-time booking alerts and live appointment status tracking',
      'Containerized backend services with Docker and configured Nginx as a reverse proxy for reliable deployment',
    ],
    architectureHighlights: [
      'Flutter Multi-Role Architecture',
      'PostgreSQL Relational Schema',
      'Stripe Payment Gateway',
      'WebSocket Live Alerts',
      'Docker & Nginx Reverse Proxy',
    ],
  },
  {
    id: 'pawcare',
    title: 'PawCare — Pet Health & Care Mobile Platform',
    description:
      'Comprehensive pet health & care platform featuring 30+ offline-first REST endpoints with local caching, vaccination reminders, appointment scheduling, recurring Stripe subscription billing, and a scikit-learn model for real-time symptom triage.',
    longDescription:
      'Directed development of 30+ offline-first REST endpoints with local caching, plus vaccination reminders, appointment scheduling, and recurring Stripe subscription billing. Integrated a scikit-learn model for real-time, automated symptom-severity triage.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'PostgreSQL', 'Python', 'scikit-learn', 'Stripe', 'Docker', 'JWT'],
    category: ['Full-Stack', 'Mobile', 'AI/ML'],
    githubUrl: 'https://github.com/rafaysaleem0308/PawCare',
    stars: 2,
    featured: true,
    internshipLabel: 'Tefteq Software — Internship Project',
    internshipRole: 'Mobile Development Project Lead & Full-Stack Developer',
    demoVideoUrl: 'https://res.cloudinary.com/yzk3kcga/video/upload/v1787507453/pawcare-demo.mp4',
    hideGithub: true,
    highlights: [
      'Directed development of 30+ offline-first REST endpoints with local caching for seamless offline usability',
      'Built automated pet vaccination reminders and veterinary appointment scheduling workflows',
      'Implemented recurring Stripe subscription billing management and secure customer portals',
      'Integrated a scikit-learn machine learning model for real-time, automated symptom-severity triage',
      'Containerized backend services using PostgreSQL and Docker for predictable local and cloud execution',
    ],
    architectureHighlights: [
      'Flutter Offline-First Caching',
      '30+ Node.js REST Endpoints',
      'Scikit-learn Symptom Triage ML',
      'Stripe Recurring Billing',
      'PostgreSQL & Docker Backend',
    ],
  },
  {
    id: 'medikart',
    title: 'Medikart — Full-Stack Pharmacy Web App',
    description:
      'Full-stack MERN healthcare e-commerce web application featuring a React.js frontend connected to an Express.js/MongoDB backend for secure authentication, product catalog browsing, cart management, and order processing.',
    longDescription:
      'Built a React.js frontend connected to an Express.js/MongoDB backend for secure auth, browsing, and orders.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'CSS3', 'JWT'],
    category: ['Full-Stack', 'MERN', 'Web'],
    githubUrl: 'https://github.com/rafaysaleem0308/Medikart',
    stars: 2,
    featured: true,
    highlights: [
      'Built a responsive React.js frontend connected to an Express.js/MongoDB backend',
      'Secure JWT authentication, protected routes, and user session management',
      'Structured catalog search, shopping cart workflow, and order checkout pipeline',
      'Normalized MongoDB data layer for pharmaceuticals, inventory, and order history',
    ],
    architectureHighlights: [
      'React.js Component UI',
      'Express.js REST APIs',
      'MongoDB Document Store',
      'JWT Authentication & Auth Guard',
    ],
  },
  {
    id: 'gamezone',
    title: 'GameZone — Full-Stack Gaming Web App',
    description:
      'Full-stack gaming web application built with HTML, CSS, JavaScript, and a Node.js/Express backend enabling smooth, low-latency client-server interaction and dynamic game state synchronization.',
    longDescription:
      'Built a Node.js/Express backend for a responsive front-end, enabling smooth, low-latency client-server interaction.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js'],
    category: ['Full-Stack', 'Web'],
    githubUrl: 'https://github.com/rafaysaleem0308',
    stars: 1,
    featured: true,
    highlights: [
      'Built a Node.js/Express backend for a responsive front-end, enabling smooth, low-latency client-server interaction',
      'Clean vanilla JavaScript game rendering loop with DOM state synchronization',
      'RESTful endpoints managing game sessions, user scores, and dynamic leaderboards',
    ],
    architectureHighlights: [
      'Node.js / Express Server',
      'Low-Latency REST Handlers',
      'Dynamic DOM Game Loop',
      'Cross-Device Responsive Design',
    ],
  },
  {
    id: 'paktravel-ai',
    title: 'PakTravel AI — Road Network System',
    description:
      'AI-driven road navigation and traffic system implementing A*/UCS pathfinding on Pakistani road graphs, CSP bus scheduling, scikit-learn transit delay prediction, and traveler clustering.',
    longDescription:
      'Demonstrates advanced artificial intelligence techniques applied to urban transportation — road network route optimization via graph algorithms, constraint satisfaction problem (CSP) transit scheduling, ML delay forecasting, and customer segmentation.',
    tech: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'NetworkX', 'Matplotlib', 'IPywidgets'],
    category: ['AI/ML', 'Algorithms'],
    githubUrl: 'https://github.com/rafaysaleem0308/PakTravel-AI-System',
    stars: 1,
    featured: false,
    highlights: [
      'A* and Uniform Cost Search (UCS) route optimization on city graphs',
      'Constraint Satisfaction Problem (CSP) bus scheduler with backtracking',
      'Scikit-learn regression models for dynamic travel delay prediction',
      'K-Means clustering for traveler behavioral segmentation',
    ],
    architectureHighlights: ['A* & UCS Routing', 'CSP Transit Scheduler', 'Scikit-learn Delay Predictor', 'K-Means Clustering'],
  },
  {
    id: 'ai-flow-deploy',
    title: 'AI Flow — Wumpus World Logic Agent',
    description:
      'Web-based AI inference engine executing automated propositional logic refutation on dynamic Wumpus World grids to solve complex spatial decision problems with live analytics.',
    longDescription:
      'Full knowledge-based agent platform implementing CNF conversion and resolution refutation in Python/Flask to deduce unobserved hazards in real time. Features a dynamic frontend visualization grid deployed on Vercel.',
    tech: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    category: ['AI/ML', 'Algorithms', 'Web'],
    githubUrl: 'https://github.com/rafaysaleem0308/AI_Flow_deploy',
    liveUrl: 'https://ai-flow-deploy.vercel.app',
    stars: 1,
    featured: false,
    highlights: [
      'Resolution refutation engine for automated logical inference',
      'Dynamic grid sizing (3x3 to 12x12) with randomized hazard placement',
      'Real-time color-coded inference cell visualization',
      'Deployed live on Vercel platform',
    ],
  },
  {
    id: 'image-captioning',
    title: 'Deep Learning Image Captioning System',
    description:
      'End-to-end multimodal deep learning pipeline pairing a ResNet50 vision encoder with an LSTM text decoder for automated natural language image description generation.',
    longDescription:
      'Deep learning architecture combining transfer learning and sequence modeling. Uses a pretrained ResNet50 CNN to extract 2048-dimensional image feature vectors and a teacher-forced LSTM decoder with beam search to generate natural sentences.',
    tech: ['Python', 'PyTorch', 'ResNet50', 'LSTM', 'NLTK', 'Gradio'],
    category: ['AI/ML'],
    githubUrl: 'https://github.com/rafaysaleem0308/Image-Captioning-Model',
    stars: 0,
    featured: false,
    highlights: [
      'ResNet50 feature extractor coupled with LSTM sequence model',
      'Greedy decoding and beam search inference algorithms',
      'BLEU-4 evaluation score benchmarking',
      'Interactive Gradio web demonstration interface',
    ],
  },
  {
    id: 'mae-image-generator',
    title: 'Masked Autoencoder (MAE) Vision Transformer',
    description:
      'Self-supervised PyTorch implementation of Masked Autoencoders (MAE) using Vision Transformers (ViT) to reconstruct 75% masked image patches with high perceptual fidelity.',
    longDescription:
      'Implements self-supervised visual representation learning via ViT encoders. Masks 75% of input image patches, projects unmasked tokens into high-dimensional latent space, and reconstructs original pixel values using 2D sine-cosine positional embeddings.',
    tech: ['Python', 'PyTorch', 'Vision Transformers', 'Gradio', 'NumPy'],
    category: ['AI/ML'],
    githubUrl: 'https://github.com/rafaysaleem0308/MAE_IMAGE_GENERATOR',
    stars: 0,
    featured: false,
    highlights: [
      'Vision Transformer (ViT) encoder architecture',
      '2D sine-cosine positional embedding calculations',
      'Mixed-precision training via PyTorch AMP',
      'PSNR and SSIM quantitative image reconstruction metrics',
    ],
  },
  {
    id: 'cyclegan',
    title: 'CycleGAN — Unpaired Image Translation',
    description:
      'Generative AI system implementing CycleGAN architecture in PyTorch for unpaired image-to-image style translation using dual generators and discriminators.',
    longDescription:
      'Deep generative architecture utilizing cycle-consistency losses to translate visual datasets without paired training examples. Implemented in PyTorch with extensive hyperparameter validation.',
    tech: ['Python', 'PyTorch', 'Jupyter', 'Generative AI'],
    category: ['AI/ML'],
    githubUrl: 'https://github.com/rafaysaleem0308/CycleGan',
    stars: 0,
    featured: false,
    highlights: [
      'Dual generator/discriminator adversarial architecture',
      'Cycle-consistency and identity loss functions',
      'PyTorch deep learning implementation',
    ],
  },
  {
    id: 'solestyle',
    title: 'SoleStyle — Retail Footwear Web Platform',
    description:
      'Responsive e-commerce platform for footwear featuring user authentication, shopping cart workflows, AJAX dynamic catalog filtering, customer reviews, and live chat support.',
    longDescription:
      'Built a full web retail store with responsive Bootstrap components, AJAX asynchronous cart updates, client-side session management, customer feedback processing, and real-time chat functionality.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Node.js', 'AJAX'],
    category: ['Full-Stack', 'Web'],
    githubUrl: 'https://github.com/rafaysaleem0308/SoleStyle_Websiste',
    stars: 1,
    featured: false,
    highlights: [
      'Mobile-first responsive design utilizing Bootstrap 5',
      'AJAX-driven shopping cart updates without page reload',
      'User login and signup session workflows',
      'Customer feedback submission and support chat UI',
    ],
  },
  {
    id: 'smart-city-traffic',
    title: 'Smart City Traffic Simulation Engine',
    description:
      'Pygame urban traffic simulator modeling 4x4 grid intersections, priority emergency vehicle routing via shortest-path algorithms, and constraint-based light timing.',
    longDescription:
      'Simulation engine for multi-agent urban traffic. Features dynamic vehicle spawning (cars, buses, ambulances), emergency vehicle path prioritization using NetworkX graph algorithms, and constraint-based traffic signal timing.',
    tech: ['Python', 'Pygame', 'NetworkX', 'python-constraint', 'OOP'],
    category: ['Algorithms'],
    githubUrl: 'https://github.com/rafaysaleem0308/Smart-City-Traffic-Simulation',
    stars: 1,
    featured: false,
    highlights: [
      'Dynamic 4x4 grid traffic model with heterogeneous vehicle types',
      'Emergency vehicle shortest-path calculation and lane clearance',
      'Constraint-satisfaction traffic light timing optimization',
    ],
  },
  {
    id: 'maze-escape',
    title: 'Maze Escape — Scientist Pathfinding Visualizer',
    description:
      'Interactive game rendering procedurally generated mazes via Prim\'s algorithm with real-time A* optimal path calculation, dynamic hazards, and cost metrics.',
    longDescription:
      'Game application blending algorithmic maze generation with pathfinding visualization. Uses Prim\'s algorithm for structural generation and A* search with Manhattan heuristics for real-time optimal pathing.',
    tech: ['Python', 'Pygame', 'Mazelib', 'A* Algorithm', 'OOP'],
    category: ['Algorithms'],
    githubUrl: 'https://github.com/rafaysaleem0308/Maze-Escape-Save-The-Scientist',
    stars: 1,
    featured: false,
    highlights: [
      'Procedural maze generation via randomized Prim\'s algorithm',
      'A* optimal path solver with step-by-step visual tracking',
      'Dynamic obstacle spawning and path recalculation',
    ],
  },
  {
    id: 'find-the-gate',
    title: 'Find The Gate — AI Pathfinding Engine',
    description:
      'Algorithmic pathfinding visualizer supporting A* Search and Greedy Best-First Search with dynamic obstacle placement and real-time path replanning.',
    longDescription:
      'Interactive AI navigation visualizer built in Pygame. Allows users to compare A* and GBFS under Manhattan and Euclidean heuristics, with dynamic obstacle placement triggering mid-journey path recalculations.',
    tech: ['Python', 'Pygame', 'Tkinter', 'A*', 'GBFS'],
    category: ['AI/ML', 'Algorithms'],
    githubUrl: 'https://github.com/rafaysaleem0308/FIND_THE_GATE',
    stars: 0,
    featured: false,
    highlights: [
      'A* and Greedy Best-First Search algorithm implementations',
      'Manhattan and Euclidean heuristic evaluation functions',
      'Real-time path replanning upon dynamic obstacle insertion',
    ],
  },
  {
    id: 'connecthub',
    title: 'ConnectHub — C++ Social Network Engine',
    description:
      'Object-oriented social network platform written in C++ demonstrating core OOP principles, custom data structure memory management, and friend/messaging graphs.',
    longDescription:
      'Console-based social networking architecture built in C++. Demonstrates object-oriented concepts (inheritance, polymorphism, encapsulation) alongside custom data structures for users, posts, and friend connections.',
    tech: ['C++', 'OOP', 'Data Structures', 'Memory Management'],
    category: ['Systems'],
    githubUrl: 'https://github.com/rafaysaleem0308/ConnectHub',
    stars: 1,
    featured: false,
    highlights: [
      'Object-oriented C++ design with strict class encapsulation',
      'Friend relationship graph and direct messaging data structures',
      'Efficient dynamic memory allocation and pointer management',
    ],
  },
  {
    id: 'st-text-editor',
    title: 'ST Arabic Text Analytics Suite',
    description:
      'Java-based desktop Arabic text processing suite featuring TF-IDF analytics, part-of-speech tagging, stemming, and MariaDB document persistence.',
    longDescription:
      'Software engineering group project delivering an Arabic natural language text processing editor. Features TF-IDF document scoring, PMI calculation, root extraction, lemmatization, and relational database persistence.',
    tech: ['Java', 'MariaDB', 'NLP', 'TF-IDF', 'Swing'],
    category: ['Systems'],
    githubUrl: 'https://github.com/rafaysaleem0308/ST-Text-Editor-Group',
    stars: 0,
    featured: false,
    highlights: [
      'Arabic text processing pipeline (POS tagging, stemming, root extraction)',
      'TF-IDF and Pointwise Mutual Information (PMI) analytics',
      'MariaDB database schema for file and history management',
    ],
  },
  {
    id: 'mutation-testing',
    title: 'Mutation Testing SQA Framework',
    description:
      'Software quality assurance pipeline for AI modules achieving an 82.1% mutation score and 93% code coverage across 25 automated unit test suites.',
    longDescription:
      'Comprehensive software testing and mutation analysis framework targeting AI parsing modules. Used pytest, mutmut, and Coverage.py to generate 4 mutation-killing test suites and HTML audit reports.',
    tech: ['Python', 'pytest', 'mutmut', 'Coverage.py', 'PowerShell'],
    category: ['Systems', 'AI/ML'],
    githubUrl: 'https://github.com/rafaysaleem0308/Mutation_Testing_FYP',
    stars: 0,
    featured: false,
    highlights: [
      '82.1% mutation score exceeding the 75% software quality benchmark',
      '93% test coverage with 25 unit test suites',
      'Automated mutation operators (AOR, ROR, LCR, SDL)',
    ],
  },
  {
    id: 'sudoku-game',
    title: 'Sudoku CSP Solver Engine',
    description:
      'Constraint Satisfaction Problem Sudoku solver using backtracking search with MRV heuristics and performance analytics across difficulty levels.',
    longDescription:
      'Algorithmic Sudoku solver modeling board states as Constraint Satisfaction Problems. Implements pure backtracking with forward checking and Minimum Remaining Values (MRV) heuristics.',
    tech: ['Python', 'CSP', 'Backtracking', 'Algorithms'],
    category: ['Algorithms'],
    githubUrl: 'https://github.com/rafaysaleem0308/SUDOKU-GAME',
    stars: 0,
    featured: false,
    highlights: [
      'Backtracking search with constraint pruning',
      'Performance analytics measuring search tree backtrack depth',
      'Supports EASY through VERY HARD grid configurations',
    ],
  },
  {
    id: 'ecommerce-database',
    title: 'E-Commerce Relational Schema Design',
    description:
      'Normalized relational database schema design for e-commerce platforms featuring SQL triggers, stored procedures, and query index optimization on Oracle 11g.',
    longDescription:
      'Comprehensive database architecture project covering ERD modeling, 3NF schema normalization, complex SQL join optimization, and PL/SQL stored procedures.',
    tech: ['SQL', 'Oracle 11g', 'Database Design', 'PL/SQL'],
    category: ['Systems'],
    githubUrl: 'https://github.com/rafaysaleem0308/E-Commerce-Database',
    stars: 0,
    featured: false,
    highlights: [
      '3NF normalized relational database structure',
      'Optimized PL/SQL stored procedures and triggers',
      'Oracle 11g query execution profiling',
    ],
  },
  {
    id: 'guess-my-number',
    title: 'Guess My Number Game',
    description:
      'Interactive browser-based number guessing game built with pure vanilla HTML, CSS, and JavaScript featuring local high-score persistence.',
    longDescription:
      'Clean vanilla JavaScript web application showcasing DOM manipulation, state persistence, dynamic styling, and sound/visual UI feedback.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: ['Web'],
    githubUrl: 'https://github.com/rafaysaleem0308/Guess-My-Number',
    stars: 0,
    featured: false,
    highlights: [
      'Vanilla JavaScript without external framework dependencies',
      'Dynamic DOM manipulation and score tracking',
      'LocalStorage high-score persistence',
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: '💻',
    skills: [
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'C++' },
      { name: 'Dart' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Java' },
    ],
  },
  {
    name: 'Frontend & Mobile',
    icon: '📱',
    skills: [
      { name: 'React.js' },
      { name: 'Flutter' },
      { name: 'Bootstrap' },
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
    ],
  },
  {
    name: 'Backend & APIs',
    icon: '⚙️',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Flask' },
      { name: 'REST APIs' },
      { name: 'Postman' },
      { name: 'WebSockets' },
      { name: 'JWT Auth' },
    ],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Oracle 11g' },
      { name: 'SQL Query Optimization' },
    ],
  },
  {
    name: 'AI / ML',
    icon: '🤖',
    skills: [
      { name: 'spaCy' },
      { name: 'PyTorch' },
      { name: 'scikit-learn' },
      { name: 'Statistical Modeling' },
      { name: 'Vision Transformers' },
      { name: 'LSTM / ResNet50' },
    ],
  },
  {
    name: 'Tools & Cloud',
    icon: '🛠️',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Nginx' },
      { name: 'Render' },
      { name: 'VS Code' },
      { name: 'Android Studio' },
      { name: 'Vercel' },
    ],
  },
  {
    name: 'AI Tools',
    icon: '✨',
    skills: [
      { name: 'ChatGPT' },
      { name: 'Claude' },
      { name: 'Gemini' },
      { name: 'DeepSeek' },
      { name: 'GitHub Copilot' },
      { name: 'Codex' },
      { name: 'Antigravity' },
    ],
  },
  {
    name: 'Core Concepts',
    icon: '📐',
    skills: [
      { name: 'DSA' },
      { name: 'OOP' },
      { name: 'Agile & Scrum' },
      { name: 'REST Architecture' },
      { name: 'Software Quality Assurance' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: 'tefteq',
    role: 'Software Development Intern / Mobile Development Project Lead',
    company: 'Tefteq Software',
    location: 'Remote',
    period: 'Jun 2026 – Aug 2026',
    type: 'Internship & Leadership',
    description: [
      'Led Flutter/Dart mobile architecture for MotorHub and PawCare, building 10+ responsive UI flows and directing sprint planning and code reviews across both teams.',
      'Developed Node.js, Express.js, and PostgreSQL REST APIs with JWT authentication and Stripe payments, following Agile Git workflows and automated pre-deployment testing.',
    ],
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe', 'JWT', 'Docker', 'Nginx', 'Git'],
    relatedProjects: [
      { id: 'motorhub', title: 'MotorHub' },
      { id: 'pawcare', title: 'PawCare' },
    ],
  },
  {
    id: 'nextbridge',
    role: 'Trainee Software Engineer Intern',
    company: 'Nextbridge Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Jun 2025 – Jul 2025',
    type: 'Internship',
    description: [
      'Contributed to 3+ production-level features across React, Node.js, and Flutter codebases, designing REST APIs and managing MongoDB data layers.',
      'Collaborated with a 5+ engineer Agile team through Git-based code reviews and sprint planning to streamline internal tooling workflows.',
    ],
    tech: ['React.js', 'Node.js', 'Flutter', 'MongoDB', 'REST APIs', 'Git', 'Agile'],
  },
]

export const education: Education[] = [
  {
    id: 'fast-nuces',
    degree: 'BS Computer Science',
    institution: 'FAST-NUCES, Chiniot-Faisalabad Campus',
    location: 'Chiniot-Faisalabad, Pakistan',
    period: '2022 – 2026',
    status: 'completed',
  },
  {
    id: 'pgc',
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'Punjab Group of Colleges',
    location: 'Rahim Yar Khan, Pakistan',
    period: 'Completed',
    status: 'completed',
  },
]

export const leadershipRoles: LeadershipRole[] = [
  {
    id: 'president',
    role: 'President',
    organization: 'FAST E-Gaming Society — FAST-NUCES CFD',
    period: '2025 – 2026',
    description:
      'Leading the university e-gaming society, organizing large-scale gaming tournaments, directing executive committees, and expanding campus e-sports engagement.',
  },
  {
    id: 'gen-sec',
    role: 'General Secretary',
    organization: 'FAST E-Gaming Society — FAST-NUCES CFD',
    period: '2024 – 2025',
    description:
      'Supervised operational execution, event logistics, inter-society coordination, and community management for the university gaming society.',
  },
  {
    id: 'fifa-head',
    role: 'FIFA Head',
    organization: 'FAST E-Gaming Society — FAST-NUCES CFD',
    period: '2023 – 2024',
    description:
      'Organized and managed all competitive FIFA tournament events, rule frameworks, player matchmaking brackets, and live stream setups.',
  },
]
