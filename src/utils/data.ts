export const portfolioData = {
  personalInfo: {
    name: "Sri Santhosh K",
    roles: ["Computer Science Student", "Software Developer", "Data Science Learner"],
    bio: "Passionate Computer Science student and software developer with a strong foundation in building scalable web applications and exploring data science. I thrive in challenging environments where I can leverage my technical skills to create innovative solutions.",
    contact: {
      email: "srisanthosh112006@gmail.com",
      phone: "9500205290",
      linkedin: "http://www.linkedin.com/in/sri-santhosh-dev", 
      github: "https://github.com/santhosh715376" 
    }
  },
  education: [
    {
      institution: "Sri Eshwar College of Engineering",
      degree: "COLLEGE EDUCATION",
      duration: "2024-2028",
      score: "7.0 (3rd-sem)",
      details: "Pursuing Engineering with a focus on core Computer Science principles and modern technologies."
    },
    {
      institution: "Vivek Vidyalaya Matriculation Higher Secondary School",
      degree: "SCHOOLING",
      duration: "2022-2024",
      score: "70.4%",
      details: "Higher Secondary Education."
    },
    {
      institution: "PMG Matriculation Higher Secondary School",
      degree: "SCHOOLING",
      duration: "2021-2022",
      score: "86.4%",
      details: "Secondary Education."
    }
  ],
  experience: [
    {
      company: "Better Tomorrow",
      role: "In-House Intern",
      duration: "Present",
      description: "Gained practical exposure to development workflows, collaborated on project tasks, and strengthened problem-solving and technical implementation skills."
    }
  ],
  skills: {
    frontend: [
      { name: "ReactJS", icon: "SiReact", description: "The industry standard for building dynamic, component-driven user interfaces. Highly valued for its virtual DOM and robust ecosystem." },
      { name: "JavaScript", icon: "SiJavascript", description: "The core language of the web. Essential for creating interactive client-side experiences and powering full-stack frameworks." },
      { name: "HTML", icon: "FaHtml5", description: "The fundamental building block of the web, providing semantic structure crucial for accessibility and SEO optimization." },
      { name: "CSS", icon: "FaCss3Alt", description: "Powers the visual aesthetics of the web. Mastery of CSS is critical for responsive, pixel-perfect UI design." }
    ],
    backend: [
      { name: "Node.js", icon: "SiNodedotjs", description: "Enables highly scalable, event-driven backend services using JavaScript. A staple in modern enterprise architectures." },
      { name: "FAST API", icon: "SiFastapi", description: "A high-performance Python framework. Widely adopted for building rapid, production-ready machine learning and data APIs." },
      { name: "MongoDB", icon: "SiMongodb", description: "A leading NoSQL database providing flexible schema design, critical for rapid iteration and handling unstructured data." },
      { name: "MySQL", icon: "SiMysql", description: "A robust, battle-tested relational database essential for systems requiring strict ACID compliance and complex querying." }
    ],
    languages: [
      { name: "Python", icon: "SiPython", description: "The backbone of modern AI, Data Science, and rapid backend development. Unmatched in its vast ecosystem of scientific libraries." },
      { name: "Java", icon: "FaJava", description: "The enterprise workhorse. Renowned for its 'write once, run anywhere' capability and massive scalability in corporate systems." },
      { name: "C++", icon: "SiCplusplus", description: "Crucial for performance-critical applications, game engines, and high-frequency trading platforms requiring low-level memory management." },
      { name: "C", icon: "SiC", description: "The foundation of modern computing. Essential for embedded systems, OS development, and understanding deep hardware-software interaction." }
    ],
    frameworks: [
      { name: "TensorFlow", icon: "SiTensorflow", description: "Google's premier deep learning framework. Powers enterprise-grade AI models, computer vision, and predictive analytics globally." },
      { name: "Spring Boot", icon: "SiSpringboot", description: "The dominant Java framework for building production-ready, highly secure enterprise microservices and REST APIs." },
      { name: "Express", icon: "SiExpress", description: "The minimalist web framework for Node.js. Essential for rapidly developing efficient backend routes and middleware." },
      { name: "Tailwind CSS", icon: "SiTailwindcss", description: "Revolutionizing frontend styling with utility-first CSS. Drastically reduces development time and enforces design consistency." },
      { name: "Pandas", icon: "SiPandas", description: "The industry standard for data manipulation in Python. Crucial for data cleaning and preparation in data science workflows." },
      { name: "NumPy", icon: "SiNumpy", description: "The fundamental package for scientific computing in Python, providing high-performance array operations for machine learning." },
      { name: "Streamlit", icon: "SiStreamlit", description: "An open-source app framework for Machine Learning and Data Science teams to create web apps in minutes." },
      { name: "Seaborn", icon: "FaChartLine", description: "A Python data visualization library based on matplotlib. Provides a high-level interface for drawing attractive statistical graphics." }
    ],
    cloudAndTools: [
      { name: "AWS EC2", icon: "FaAws", description: "The backbone of cloud computing. Essential for deploying scalable compute capacity in enterprise cloud environments." },
      { name: "AWS S3", icon: "FaAws", description: "Industry-standard object storage. Vital for hosting assets, data lakes, and scalable backup solutions." },
      { name: "Docker", icon: "SiDocker", description: "Standardizes software delivery through containerization. Essential for consistent deployments and microservice architectures." },
      { name: "Git & GitHub", icon: "SiGithub", description: "The industry standard for version control and collaborative development. Fundamental for all modern engineering teams." },
      { name: "GitHub Actions", icon: "SiGithubactions", description: "Powerful native CI/CD. Crucial for automating testing and deployment pipelines directly from the repository." },
      { name: "Postman", icon: "SiPostman", description: "The standard tool for API development and testing, ensuring reliable communication between software services." },
      { name: "Vercel", icon: "SiVercel", description: "A cloud platform for static frontend frameworks and Serverless Functions. Ideal for seamless deployment." },
      { name: "Netlify", icon: "SiNetlify", description: "An intuitive and powerful platform for automating web projects, from building to deploying." }
    ],
    coreConcepts: [
      { name: "Data Structures & Algorithms", icon: "FaNetworkWired", description: "The foundation of efficient software engineering. Critical for optimizing performance and solving complex computational problems." },
      { name: "Object-Oriented Programming", icon: "FaCubes", description: "A core programming paradigm that promotes code reusability, modularity, and clean architecture in large-scale systems." },
      { name: "Database Management Systems", icon: "FaDatabase", description: "Essential for designing robust data storage solutions, ensuring data integrity, performance, and secure retrieval." },
      { name: "Data Science", icon: "FaChartBar", description: "Extracting meaningful insights from raw data through statistics, scientific computing, and domain expertise." },
      { name: "Machine Learning", icon: "FaBrain", description: "Empowering systems to learn and adapt without following explicit instructions, using algorithms and statistical models." }
    ]
  },
  projects: [
    {
      title: "Intelligent AI Resume Screener and Skill Matching Platform",
      status: "Ongoing",
      techStack: ["Ollama", "React.js", "MySQL", "JavaScript"],
      description: "Designed an AI-driven Resume Screener that analyzes resumes, extracts key skills, and performs automated candidate-job matching to support efficient recruitment decisions.",
      link: "#",
      github: "#"
    },
    {
      title: "Email Response Generator and Summarizer",
      techStack: ["AI/NLP", "Python", "LLMs"],
      description: "AI Powered Email Response Generator and Summarizer uses NLP and LLMs to condense long emails into clear summaries and draft professional, context-aware replies.",
      link: "https://github.com/santhosh715376/Email-Response-Generator-and-Summarizer",
      github: "https://github.com/santhosh715376/Email-Response-Generator-and-Summarizer"
    },
    {
      title: "Air Quality Index Prediction",
      techStack: ["Python", "Flask", "Machine Learning"],
      description: "Air Quality Index Prediction is a Flask web application that predicts PM2.5 AQI from weather inputs using an ExtraTreesRegressor model, featuring a simple browser interface.",
      link: "https://github.com/santhosh715376/Air-Quality-Index-Prediction-",
      github: "https://github.com/santhosh715376/Air-Quality-Index-Prediction-"
    },
    {
      title: "Credit Card Fraud Detection system",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Streamlit"],
      description: "Designed and implemented a credit card fraud detection system that analyzes transaction patterns and flags anomalous activities using machine learning techniques and data analysis workflows.",
      link: "https://github.com/santhosh715376/credit-card-fraud-detection",
      github: "https://github.com/santhosh715376/credit-card-fraud-detection"
    },
    {
      title: "AURA - A professional E-commerce website",
      techStack: ["React.js", "MongoDB", "JavaScript", "HTML", "CSS"],
      description: "Built AURA, a responsive clothing and accessories e-commerce platform with dynamic product listings and database integration for efficient product management and user interaction.",
      link: "https://github.com/santhosh715376/AURA--a-professional-clothing-website",
      github: "https://github.com/santhosh715376/AURA--a-professional-clothing-website"
    },
    {
      title: "AWS Mini Capstone Project",
      techStack: ["AWS EC2", "Windows Server", "IIS"],
      description: "Configured a Windows Server instance on AWS EC2 and connected using Remote Desktop. Installed and configured IIS via Server Manager for hosting a web application.",
      link: "https://github.com/santhosh715376/AWS-mini-capstone-projects",
      github: "https://github.com/santhosh715376/AWS-mini-capstone-projects"
    },
    {
      title: "Vite E-commerce website",
      techStack: ["Vite", "React", "Node.js", "MongoDB"],
      description: "A basic level e-commerce website built with Vite and React delivering a fast, responsive frontend, with a Node.js and MongoDB backend handling user authentication and orders.",
      link: "https://github.com/santhosh715376/E-commerce-website",
      github: "https://github.com/santhosh715376/E-commerce-website"
    },
    {
      title: "Movie Booking System",
      techStack: ["Java", "MySQL"],
      description: "A beginner-level Movie Booking System built using Java and MySQL that allows users to browse movies, check show timings, and book tickets through basic CRUD operations.",
      link: "https://github.com/santhosh715376/beginner-level-movie-booking-system-using-java-and-mysql",
      github: "https://github.com/santhosh715376/beginner-level-movie-booking-system-using-java-and-mysql"
    },
    {
      title: "Fee Management System",
      techStack: ["Java", "MySQL"],
      description: "A Fee Management System developed using Java and MySQL to efficiently manage student fee records, allowing users to add, update, and view details securely.",
      link: "https://github.com/santhosh715376/fee_management_system",
      github: "https://github.com/santhosh715376/fee_management_system"
    },
    {
      title: "Insurance Cost Data Visualization",
      techStack: ["Python", "Machine Learning", "Random Forest", "Flask"],
      description: "Insurance Cost Prediction is a data science and machine learning project that predicts medical insurance charges based on factors like age, BMI, smoking habits, gender, and region.",
      link: "https://github.com/santhosh715376/Insurance-cost-data-visualization",
      github: "https://github.com/santhosh715376/Insurance-cost-data-visualization"
    },
    {
      title: "Minimal - Styled E-commerce Website",
      techStack: ["Web Design", "E-commerce"],
      description: "A minimal e-commerce store designed with a professional, modern interface that focuses on clarity and speed. It offers essential features like product browsing, search, cart management, and secure checkout.",
      link: "https://github.com/santhosh715376/Minimal---a-styled-e-commerce-website",
      github: "https://github.com/santhosh715376/Minimal---a-styled-e-commerce-website"
    },
    {
      title: "Smart Classroom and Timetable Scheduler",
      techStack: ["React.js", "Node.js", "MySQL", "AI"],
      description: "Built a Smart Classroom and Timetable Scheduler with AI-based optimization. Implemented conflict-free scheduling, classroom allocation, and role-based access. Integrated OR-Tools for intelligent timetable generation.",
      link: "https://github.com/santhosh715376/Smart-Classroom-and-Timetable-Scheduler",
      github: "https://github.com/santhosh715376/Smart-Classroom-and-Timetable-Scheduler"
    }
  ],
  roadmap: [
    {
      phase: "The Foundation",
      date: "2021 - 2024",
      title: "High School Education",
      description: "Built a strong academic foundation with a focus on logic, secondary, and higher secondary education at PMG and Vivek Vidyalaya.",
      icon: "FaGraduationCap"
    },
    {
      phase: "First Steps into Code",
      date: "Early 2024",
      title: "Core Programming",
      description: "Entered Sri Eshwar College of Engineering. Grasped core concepts like Object-Oriented Programming and Data Structures. Built initial CRUD applications like the Movie Booking and Fee Management Systems using Java and MySQL.",
      icon: "FaCode"
    },
    {
      phase: "Exploring Data & Machine Learning",
      date: "Mid 2024",
      title: "Analytical Thinking",
      description: "Branched out into Python and Data Science. Learned to extract insights and build predictive models, resulting in projects like Insurance Cost Prediction, Credit Card Fraud Detection, and the Air Quality Index Predictor.",
      icon: "FaChartArea"
    },
    {
      phase: "Mastering Web Development",
      date: "Late 2024",
      title: "Full-Stack Engineering",
      description: "Learned to build beautiful, responsive user interfaces and robust backends. Created production-ready platforms like AURA E-commerce and Vite E-commerce using React, Node.js, and MongoDB.",
      icon: "FaLaptopCode"
    },
    {
      phase: "The AI & Cloud Frontier",
      date: "Present",
      title: "Advanced Innovation",
      description: "Combining all previous skills to build intelligent, scalable systems. Working as an intern at Better Tomorrow and developing advanced tools like the AI Resume Screener, Email Response Generator, and Smart Timetable Scheduler.",
      icon: "FaBrain"
    }
  ],
  achievements: [
    {
      title: "Hackathon Participation",
      description: "Participated in the KGiSL Institute of Technology Hackathon, collaborating in a team to develop innovative solutions under time-constrained problem-solving conditions."
    }
  ],
  codingProfiles: {
    leetcode: {
      rating: 1560,
      globalRank: "14,32,545",
      problemsSolved: 110,
      link: "#"
    }
  },
  certifications: [
    {
      title: "MERN Stack Full-Stack Web Development Bootcamp",
      year: "2025"
    },
    {
      title: "Completion of spoken tutorial in C (IIT-Bombay)",
      year: "2024"
    },
    {
      title: "Completion of spoken tutorial in C++ (IIT-Bombay)",
      year: "2024"
    },
    {
      title: "Introduction to HTML, Java",
      year: "2024"
    }
  ]
};
