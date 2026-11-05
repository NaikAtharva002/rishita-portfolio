import { PortfolioData } from '../types/portfolio'

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Rishita Vikas",
    title: "Cloud Computing & Automation Engineer",
    tagline: "Engineering resilient cloud infrastructures, intelligent automation pipelines, and high-craft digital experiences.",
    roles: [
      "Cloud & Automation Engineer",
      "Python & Media Pipeline Developer",
      "UI/UX Research & Product Thinker",
      "Core Member @ iOS & Eureka Clubs"
    ],
    university: "VIT Bhopal University",
    degree: "Bachelor of Technology - B.Tech",
    branch: "Cloud Computing and Automation",
    period: "2025 – 2029",
    location: "Bhopal, Madhya Pradesh, India",
    email: "rishita.vikas2025@vitbhopal.ac.in",
    linkedin: "https://www.linkedin.com/in/rishita-vikas-1ba569371/",
    github: "https://github.com/rishita1524-source",
    bioShort: "B.Tech undergraduate in Cloud Computing & Automation at VIT Bhopal University. Passionate about turning ideas into impact through resilient cloud architectures, Python automation, and user-centric software design.",
    bioLong: [
      "I am embarking on a high-velocity journey in modern technology, driven by the conviction that distributed cloud infrastructure and automated workflows are the backbone of future innovation.",
      "As a core member across multiple technical student bodies at VIT Bhopal (including the iOS Club, The Eureka Club, and Bit By Bit Club), I actively champion collaborative development, peer mentorship, and hands-on system building.",
      "My technical foundation bridges robust backend & automation capabilities (Python, AWS, Azure, CI/CD) with thoughtful user experience principles acquired through hands-on industry simulations like the Lloyds Banking Group UX Design program."
    ],
    philosophy: "Great technology is both mathematically resilient under the hood and effortlessly intuitive on the surface. I design systems that scale reliably while keeping the human experience at the center."
  },
  skills: [
    // Cloud & Automation
    {
      id: "skill-1",
      name: "Cloud Platforms (AWS & Azure)",
      category: "Cloud & Automation",
      level: 80,
      levelLabel: "Intermediate",
      highlight: "Cloud infrastructure provisioning, IAM security, S3 storage, and compute basics."
    },
    {
      id: "skill-2",
      name: "Automation & CI/CD Pipelines",
      category: "Cloud & Automation",
      level: 78,
      levelLabel: "Intermediate",
      highlight: "Workflow automation, GitHub Actions, Dockerized environment orchestration."
    },
    {
      id: "skill-3",
      name: "DevOps Fundamentals",
      category: "Cloud & Automation",
      level: 75,
      levelLabel: "Intermediate",
      highlight: "Linux system administration, containerization, environment reproducibility."
    },
    // Languages & Dev
    {
      id: "skill-4",
      name: "Python",
      category: "Languages & Dev",
      level: 88,
      levelLabel: "Proficient",
      highlight: "Core scripting, automation logic, data processing, and Cloudinary API media optimization."
    },
    {
      id: "skill-5",
      name: "JavaScript & Modern Web (React)",
      category: "Languages & Dev",
      level: 78,
      levelLabel: "Intermediate",
      highlight: "Modern component-driven web interfaces, state management, and API integrations."
    },
    {
      id: "skill-6",
      name: "Cloudinary Media API",
      category: "Languages & Dev",
      level: 85,
      levelLabel: "Proficient",
      highlight: "Cloud to Crowd certified: dynamic image/video transformations and programmatic asset delivery."
    },
    // UI/UX & Design
    {
      id: "skill-7",
      name: "UI/UX & Design Thinking",
      category: "UI/UX & Design",
      level: 82,
      levelLabel: "Proficient",
      highlight: "Completed Lloyds Banking Group UX Simulation; customer journey mapping and interface design."
    },
    {
      id: "skill-8",
      name: "User Research & Survey Design",
      category: "UI/UX & Design",
      level: 80,
      levelLabel: "Intermediate",
      highlight: "Formulating quantitative research, persona creation, and empathy-driven validation."
    },
    {
      id: "skill-9",
      name: "Competitive Analysis & Wireframing",
      category: "UI/UX & Design",
      level: 84,
      levelLabel: "Proficient",
      highlight: "Deconstructing competitor flows, low-to-high fidelity wireframing, and usability heuristics."
    },
    // Tools & Platforms
    {
      id: "skill-10",
      name: "Git & Version Control",
      category: "Tools & Platforms",
      level: 85,
      levelLabel: "Proficient",
      highlight: "Branching strategies, pull requests, collaborative repositories on GitHub."
    },
    {
      id: "skill-11",
      name: "Docker & Container Basics",
      category: "Tools & Platforms",
      level: 72,
      levelLabel: "Intermediate",
      highlight: "Writing Dockerfiles, multi-stage builds, container isolation for microservices."
    },
    {
      id: "skill-12",
      name: "Figma & Design Systems",
      category: "Tools & Platforms",
      level: 80,
      levelLabel: "Intermediate",
      highlight: "Interactive prototyping, responsive auto-layout, token-based design systems."
    },
    // Core Strengths
    {
      id: "skill-13",
      name: "Creative Problem Solving",
      category: "Core Strengths",
      level: 90,
      levelLabel: "Advanced",
      highlight: "Algorithmic thinking, rapid troubleshooting in hackathons and club projects."
    },
    {
      id: "skill-14",
      name: "Time & Sprint Management",
      category: "Core Strengths",
      level: 88,
      levelLabel: "Proficient",
      highlight: "Balancing academic rigor with active leadership across 3 technical student chapters."
    },
    {
      id: "skill-15",
      name: "Cross-Functional Collaboration",
      category: "Core Strengths",
      level: 90,
      levelLabel: "Advanced",
      highlight: "Fostering inclusive team communication, knowledge sharing, and peer mentorship."
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Cloudinary MediaIQ Optimization Suite",
      subtitle: "Automated Cloud Media Ingestion & Dynamic CDN Delivery",
      description: "Python-powered cloud pipeline that automates media ingestion, intelligent asset tagging, dynamic transformation, and edge CDN distribution using the Cloudinary Developer API.",
      longDescription: "Engineered as an end-to-end cloud solution applying competencies from the Cloudinary 'Media IQ for Developers' certification. The system ingests raw multi-format media, executes asynchronous Python transforms (responsive breakpoints, WebP/AVIF transcoding, automated facial focal cropping), and surfaces optimized assets with sub-50ms global latency.",
      category: "Python",
      tags: ["Python", "Cloudinary API", "AWS S3", "DevOps", "REST APIs"],
      status: "Verified Credential Project",
      metrics: "Sub-50ms Edge Delivery • 65% Bandwidth Reduction",
      liveUrl: "https://cloudinary.com",
      githubUrl: "https://github.com/rishita1524-source",
      accentColor: "#ec4899",
      features: [
        "Automated responsive image & video transformation matrix",
        "Cloudinary REST API integration with secure credential vaulting",
        "Intelligent edge-delivery caching and format transcoding",
        "CLI batch processing script for developer productivity"
      ],
      architecture: "Python Pipeline Client → Cloudinary Transformations API → AWS S3 Asset Lake → Global Fastly CDN Cache"
    },
    {
      id: "project-2",
      title: "Lloyds NextGen Digital Banking UX",
      subtitle: "Accessibility-First Mobile Banking Redesign & Research",
      description: "Comprehensive UX case study and high-fidelity prototype re-imagining mobile banking onboarding and financial management, completed during the Lloyds Banking Group Job Simulation.",
      longDescription: "Conducted structured competitive benchmarking across tier-1 financial apps, designed user survey protocols, and mapped empathetic customer journeys. Translated pain-points into an accessible, WCAG AAA compliant mobile interface with streamlined transaction verification.",
      category: "UI/UX & Design",
      tags: ["Figma", "User Research", "Competitive Benchmarking", "WCAG 2.1", "Prototyping"],
      status: "Lloyds Simulation Showcase",
      metrics: "WCAG AAA Compliant • 40% Reduced Task Steps",
      liveUrl: "https://www.forage.com",
      githubUrl: "https://github.com/rishita1524-source",
      accentColor: "#be185d",
      features: [
        "Rigorous competitive landscape analysis across 4 major banking platforms",
        "User persona development and qualitative survey synthesis",
        "Figma design system with interactive micro-states & tactile feedback",
        "Streamlined biometric authentication and multi-account overview flow"
      ],
      architecture: "Empathize & Discover → Competitive Synthesis → Wireframing → High-Fidelity Prototype → Usability Evaluation"
    },
    {
      id: "project-3",
      title: "Resilient Cloud Infrastructure & CI/CD",
      subtitle: "Automated Deployment Pipeline with Docker & Cloud Telemetry",
      description: "Declarative infrastructure configuration and GitHub Actions continuous integration pipeline for containerized microservices deployed to AWS cloud instances.",
      longDescription: "Constructed an automated deployment environment incorporating Docker containerization, linting, automated testing, and zero-downtime deployment scripts. Integrated cloud logging and uptime health monitoring to ensure high availability.",
      category: "Cloud & Automation",
      tags: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Linux", "Bash"],
      status: "Production Ready",
      metrics: "99.9% Uptime Architecture • Zero-Downtime Rollouts",
      liveUrl: "https://github.com/rishita1524-source",
      githubUrl: "https://github.com/rishita1524-source",
      accentColor: "#db2777",
      features: [
        "Multi-stage Docker builds minimizing production image footprint",
        "GitHub Actions CI/CD automation triggering on release tags",
        "AWS EC2 and S3 integration with least-privilege IAM roles",
        "Automated health-check pings and alerting webhooks"
      ],
      architecture: "Git Commit → GitHub Actions Pipeline → Docker Registry → AWS Cloud Instance Deployment → CloudWatch Metrics"
    },
    {
      id: "project-4",
      title: "Dawn of Code: Collaborative DevSpace",
      subtitle: "Real-Time Developer Collaboration & Task Sprint Board",
      description: "Full-stack web application developed for the Dawn of Code Hackathon hosted by the MERN Stack Club at VIT Bhopal, facilitating peer collaboration and sprint tracking.",
      longDescription: "Built during an intensive hackathon organized by VIT Bhopal University and Sheryians Coding School. DevSpace empowers student developer teams to organize tasks, share snippet architectures, and synchronize milestones in real time.",
      category: "Full-Stack",
      tags: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
      status: "Hackathon 2025 Submission",
      metrics: "Built in 24h Sprint • 100% Responsive Interface",
      liveUrl: "https://github.com/rishita1524-source",
      githubUrl: "https://github.com/rishita1524-source",
      accentColor: "#f43f5e",
      features: [
        "Interactive Kanban-style sprint task board with drag-and-drop mechanics",
        "Code snippet repository with syntax highlighting and tag filtering",
        "Real-time team chat & milestone notification indicators",
        "Responsive, accessible UI with soft glassmorphic aesthetic"
      ],
      architecture: "React Frontend → RESTful API Server (Node/Express) → MongoDB Atlas Cloud Database"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Core Member",
      organization: "iOS Club - VIT Bhopal",
      organizationType: "Apprenticeship",
      period: "May 2026 – Present",
      location: "Bhopal, Madhya Pradesh, India · On-site",
      description: "Selected as a core member of the prestigious iOS Club at VIT Bhopal University. Driving mobile ecosystem awareness, peer workshops, and collaborating on native iOS software initiatives.",
      achievements: [
        "Collaborated with senior student engineers on Swift and iOS ecosystem workshops.",
        "Helped curate technical onboarding sessions for incoming fresher developers.",
        "Contributed to event logistics, technical problem design, and community hack challenges."
      ],
      badge: "Core Member • iOS Club"
    },
    {
      id: "exp-2",
      role: "Core Member",
      organization: "The Eureka Club - VITB",
      organizationType: "Apprenticeship",
      period: "Apr 2026 – Present",
      location: "Bhopal, Madhya Pradesh, India · On-site",
      description: "Driving creative problem solving, multidisciplinary tech ideation, and student community initiatives within The Eureka Club, VIT Bhopal's flagship innovation hub.",
      achievements: [
        "Organized campus-wide ideation sessions connecting tech developers with creative designers.",
        "Led project planning and sprint alignment for internal club showcases.",
        "Championed peer knowledge-sharing circles around emerging cloud tools and automation."
      ],
      badge: "Core Member • Eureka Club"
    },
    {
      id: "exp-3",
      role: "Core Member",
      organization: "Bit By Bit Club",
      organizationType: "Apprenticeship",
      period: "Apr 2026 – Present",
      location: "Bhopal, Madhya Pradesh, India · On-site",
      description: "Active core member contributing to algorithmic training, coding bootcamps, and foundational software engineering curriculum for student members.",
      achievements: [
        "Assisted in structuring hands-on coding challenges for beginner developers.",
        "Mentored peers in fundamental data structures, problem-solving, and Python logic.",
        "Co-organized technical quizzes and programming meetups with high engagement."
      ],
      badge: "Core Member • Bit By Bit"
    },
    {
      id: "exp-4",
      role: "Hackathon Participant & Builder",
      organization: "Dawn of Code Hackathon - MERN Stack Club VIT Bhopal",
      organizationType: "Hackathon",
      period: "September 4, 2025",
      location: "VIT Bhopal University (in association with Sheryians Coding School)",
      description: "Participated in an intensive university-wide hackathon sprint focused on rapid full-stack prototyping, real-time collaboration, and innovative web architecture.",
      achievements: [
        "Delivered a working web prototype under strict 24-hour sprint deadlines.",
        "Applied modern component architecture and clean state management.",
        "Awarded official Certificate of Participation from VIT Bhopal University and Sheryians Coding School."
      ],
      badge: "Hackathon Competitor"
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Cloud to Crowd: Media IQ for Developers with Python",
      issuer: "Cloudinary",
      issueDate: "May 2026",
      credentialId: "cldacad-bb4d5d6d1v",
      credentialUrl: "https://cloudinary.com/credentials/cldacad-bb4d5d6d1v",
      badgeText: "Cloudinary Certified",
      skillsCovered: [
        "Python Media SDK",
        "Dynamic Image & Video Transformations",
        "Cloud Ingestion & Asset Delivery",
        "Performance & Responsive Breakpoint Optimization"
      ],
      verificationNote: "Official credential awarded upon demonstrating mastery of programmatic media manipulation, transformation algorithms, and Python cloud SDK execution."
    },
    {
      id: "cert-2",
      title: "UX Design Introduction Job Simulation",
      issuer: "Lloyds Banking Group (via Forage)",
      issueDate: "May 9, 2026",
      credentialUrl: "https://www.forage.com/simulations/lloyds-banking-group/ux-design",
      badgeText: "Industry Simulation",
      skillsCovered: [
        "Competitive Analysis",
        "Customer Research & Survey Design",
        "User Experience Architecture",
        "Empathy-Driven Journey Mapping"
      ],
      verificationNote: "Completed realistic industry simulation for Lloyds Banking Group, designing user-centered customer research and synthesizing insights for digital banking touchpoints."
    },
    {
      id: "cert-3",
      title: "Dawn of Code Hackathon Participation",
      issuer: "MERN Stack Club, VIT Bhopal University & Sheryians Coding School",
      issueDate: "September 4, 2025",
      credentialUrl: "https://vitbhopal.ac.in",
      badgeText: "Hackathon Award",
      skillsCovered: [
        "Full-Stack Web Development",
        "Collaborative Problem Solving",
        "Rapid Prototyping",
        "Frontend Engineering"
      ],
      verificationNote: "Officially certified for participating and engineering solutions at the university hackathon recognized by academic directors and Sheryians Coding School."
    }
  ]
}
