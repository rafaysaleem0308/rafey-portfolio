import type { Project, SkillCategory, Experience, Education, LeadershipRole, NavLink } from '../types'

export const personal = {
  name: 'Rafey Saleem',
  title: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'MERN Developer', 'Flutter Developer', 'Software Engineer'],
  tagline: 'Building scalable web applications, cross-platform mobile apps, and robust RESTful backends.',
  summary:
    'Computer Science graduate from FAST-NUCES with hands-on experience building production-grade MERN web applications, cross-platform Flutter mobile apps, and scalable RESTful backends. Proven track record leading mobile development teams during software internships, designing relational databases, and shipping end-to-end features.',
  location: 'Lahore, Pakistan',
  email: 'rafeysaleem66@gmail.com',
  phone: '+92 333 7463316',
  github: 'https://github.com/rafaysaleem0308',
  linkedin: 'https://www.linkedin.com/in/rafey-saleem',
  resumeUrl: '/Rafey_Saleem_Resume.pdf',
  avatar: 'https://avatars.githubusercontent.com/u/119732562?v=4',
  stats: [
    { label: 'GitHub Repos', value: '20+' },
    { label: 'Tech Stacks', value: '5+' },
    { label: 'Years CS', value: '4' },
    { label: 'Internship', value: '1' },
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
    id: 'motorhub',
    title: 'MotorHub — Vehicle Service Marketplace',
    description:
      'Full-stack vehicle service marketplace connecting owners with verified workshops, featuring secure JWT authentication, real-time chat, booking workflows, and integrated Stripe payments.',
    longDescription:
      'Production-grade MERN/PostgreSQL automotive service management system. Engineered REST APIs for multi-role user access (Customers, Service Providers, Admin), automated service booking pipelines, real-time status notifications via WebSockets, and payment processing.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'JWT', 'Stripe', 'Socket.io', 'Tailwind CSS'],
    category: ['Full-Stack', 'MERN'],
    githubUrl: 'https://github.com/rafaysaleem0308/MotorHub',
    stars: 3,
    featured: true,
    internshipLabel: 'TefTeq Software — Internship Project',
    internshipRole: 'Mobile Development Project Lead',
    demoVideoUrl: 'https://res.cloudinary.com/yzk3kcga/video/upload/v1787507857/motorhub-demo.mp4',
    hideGithub: true,
    highlights: [
      'Multi-role access control (Customers, Service Providers, Super Admin)',
      'Real-time messaging & live appointment status tracking',
      'PostgreSQL relational schema with optimized query indexing',
      'Stripe payment gateway integration for transparent invoicing',
      'Docker containerized deployment with Nginx reverse proxy',
    ],
    architectureHighlights: ['JWT Auth & RBAC', 'PostgreSQL & Knex/Prisma', 'Socket.io Real-time', 'Stripe Payments', 'Docker Containerized'],
  },
  {
    id: 'pawcare',
    title: 'PawCare — Pet Health & Care Platform',
    description:
      'Cross-platform mobile pet health platform combining real-time medical record tracking, automated vet appointment scheduling, Stripe subscriptions, and a local scikit-learn ML model for symptom triaging.',
    longDescription:
      'Comprehensive pet health management ecosystem featuring a Flutter mobile frontend and Node.js/Express backend. Implemented secure medical history logging, recurring vaccine alerts, local machine learning symptom classification, and Stripe payments.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'PostgreSQL', 'scikit-learn', 'Docker', 'Stripe', 'JWT'],
    category: ['Full-Stack', 'Mobile', 'AI/ML'],
    githubUrl: 'https://github.com/rafaysaleem0308/PawCare',
    stars: 2,
    featured: true,
    internshipLabel: 'TefTeq Software — Internship Project',
    internshipRole: 'Mobile Development Project Lead',
    demoVideoUrl: 'https://res.cloudinary.com/yzk3kcga/video/upload/v1787507453/pawcare-demo.mp4',
    hideGithub: true,
    highlights: [
      'Cross-platform Flutter mobile UI with offline-first local cache',
      '30+ RESTful API endpoints written in Node.js and Express.js',
      'Local scikit-learn ML model for instant symptom severity triaging',
      'Stripe subscription integration and push notifications',
      'PostgreSQL database containerized with Docker',
    ],
    architectureHighlights: ['Flutter & BLoC/Provider', '30+ Node.js REST APIs', 'PostgreSQL & Docker', 'Local Scikit-learn ML', 'Stripe Billing'],
  },
  {
    id: 'indielife',
    title: 'IndieLife — Independent Living App (FYP)',
    description:
      'Final Year Project at FAST-NUCES: Cross-platform independent-living suite for students integrating meal planning, expense management, housing search, and an NLP-driven AI budget recommendations engine.',
    longDescription:
      'Architected a multi-service platform for independent living. Combines a Flutter mobile application with a Node.js/Express REST backend and a Python Flask microservice utilizing spaCy NLP and statistical modeling to generate dynamic financial advice.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'spaCy', 'React', 'Material UI'],
    category: ['Full-Stack', 'Mobile', 'AI/ML', 'MERN'],
    githubUrl: 'https://github.com/rafaysaleem0308/INDIELIFE',
    stars: 2,
    featured: true,
    highlights: [
      'Multi-module Flutter mobile application deployed to Android/iOS',
      'NLP Expense Planner using spaCy and custom budget algorithms',
      'Node.js & Express REST API deployed on cloud infrastructure',
      'React + Material UI administrative management portal',
      'Typewriter-style real-time financial recommendation engine',
    ],
    architectureHighlights: ['Flutter Cross-Platform', 'Node/Mongo REST Backend', 'Python Flask NLP Microservice', 'React Admin Panel'],
  },
  {
    id: 'medikart',
    title: 'Medikart — Healthcare E-Commerce',
    description:
      'Full-stack MERN healthcare e-commerce application featuring prescription order management, real-time customer service chat, admin inventory control, and automated transactional email alerts.',
    longDescription:
      'A complete healthcare e-commerce platform built on the MERN stack. Features MongoDB schema design for medical supplies, cart & checkout workflows, real-time customer support chat, and a custom administrative management dashboard.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'CSS3', 'JWT', 'Socket.io'],
    category: ['Full-Stack', 'MERN', 'Web'],
    githubUrl: 'https://github.com/rafaysaleem0308/Medikart',
    stars: 1,
    featured: true,
    highlights: [
      'Full MERN stack with administrative inventory control panel',
      'Shopping cart, checkout pipeline, and order status tracking',
      'Real-time customer-to-support messaging powered by Socket.io',
      'Automated email notifications for order updates and receipts',
    ],
    architectureHighlights: ['MERN Stack', 'Admin Inventory Controls', 'Socket.io Customer Support', 'JWT Session Management'],
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
    featured: true,
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
    id: 'gamezone',
    title: 'GameZone — Interactive Gaming Platform',
    description:
      'Web gaming portal backed by Express.js RESTful APIs providing responsive web interface client-server interactions with dynamic game state synchronization.',
    longDescription:
      'Multi-game web application demonstrating structured client-server architecture, low-latency REST API communications, and custom JavaScript game state loops.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js'],
    category: ['Full-Stack', 'Web'],
    githubUrl: 'https://github.com/rafaysaleem0308',
    stars: 0,
    featured: false,
    highlights: [
      'Express.js RESTful backend managing client game requests',
      'Asynchronous state synchronization across game sessions',
      'Responsive UI layout optimized across device screens',
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
      { name: 'Dart' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [{ name: 'React.js' }, { name: 'Flutter' }, { name: 'Bootstrap 5' }, { name: 'Material UI' }],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'Flask' }, { name: 'REST API Design' }],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [{ name: 'MongoDB' }, { name: 'Oracle 11g (SQL)' }],
  },
  {
    name: 'AI / ML',
    icon: '🤖',
    skills: [
      { name: 'PyTorch' },
      { name: 'spaCy (NLP)' },
      { name: 'scikit-learn' },
      { name: 'Vision Transformers' },
      { name: 'LSTM / ResNet50' },
      { name: 'Statistical Modeling' },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Postman' },
      { name: 'VS Code' },
      { name: 'Android Studio' },
      { name: 'Render' },
      { name: 'Vercel' },
    ],
  },
  {
    name: 'Concepts',
    icon: '📐',
    skills: [
      { name: 'DSA' },
      { name: 'OOP' },
      { name: 'Agile Development' },
      { name: 'REST API Design' },
      { name: 'Mutation Testing' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: 'tefteq',
    role: 'Software Development Intern / Mobile Development Project Lead',
    company: 'TefTeq Software',
    location: 'Remote',
    period: 'Jun 2026 – Aug 2026',
    type: 'Internship & Leadership',
    description: [
      'Led the Mobile Development team for MotorHub and PawCare company projects, coordinating tasks and sprint goals.',
      'Coordinated and distributed mobile development tasks among team members while guiding architecture and code reviews.',
      'Contributed hands-on to Flutter cross-platform mobile application development and complex UI/UX workflows.',
      'Engineered REST APIs and integrated backend microservices built with Node.js, Express.js, and PostgreSQL.',
      'Assisted with feature implementation, debugging, automated testing, and successful project delivery.',
      'Collaborated with the broader cross-functional engineering team during full-lifecycle project development.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs', 'Node.js', 'PostgreSQL', 'Firebase', 'Git', 'Docker'],
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
      'Built and maintained full-stack features across React, Node.js, and Flutter codebases, contributing to 3+ production modules during the internship period.',
      'Integrated REST APIs and managed MongoDB data layers, reducing manual data-handling steps in internal tooling.',
      'Collaborated in an agile team of 5+ engineers using Git/GitHub, participating in code reviews and sprint planning to ship features on schedule.',
    ],
    tech: ['React', 'Node.js', 'Flutter', 'MongoDB', 'Git', 'Agile'],
  },
]

export const education: Education[] = [
  {
    id: 'fast-nuces',
    degree: 'BS Computer Science',
    institution: 'FAST-NUCES, Chiniot-Faisalabad Campus',
    location: 'Faisalabad, Pakistan',
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
    description: 'Leading the university e-gaming society, organizing tournaments, managing a team of officers, and growing the community across campus.',
  },
  {
    id: 'gen-sec',
    role: 'General Secretary',
    organization: 'FAST E-Gaming Society — FAST-NUCES CFD',
    period: '2024 – 2025',
    description: 'Managed day-to-day operations, event planning, and inter-society coordination for the gaming community.',
  },
  {
    id: 'fifa-head',
    role: 'FIFA Head',
    organization: 'FAST E-Gaming Society — FAST-NUCES CFD',
    period: '2023 – 2024',
    description: 'Organized and managed all FIFA tournament events, player registrations, and competitive brackets.',
  },
]
