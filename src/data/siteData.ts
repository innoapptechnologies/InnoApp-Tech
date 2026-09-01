// Static data for InnoApp Technologies website

export interface Service {
  id: string;
  icon: string;
  number: string;
  title: string;
  copy: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  stacks: {
    name: string;
    techs: string[];
  }[];
}

export interface PackageOption {
  name: string;
  technologyStack: string;
  description: string;
  features: string[];
  scope: string;
}

export interface Internship {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  duration: string;
  highlights: string[];
  description: string;
  skills: string[];
  programStructure: string[];
  weeklyTasks: { week: number; task: string }[];
  submissionProcess: string;
  termsAndConditions: string[];
  certificateInfo: string;
  bonafideInfo: string;
}

export interface Founder {
  name: string;
  designation: string;
  description: string;
  image: string;
  linkedin: string;
  portfolio: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link?: string;
}

export const services: Service[] = [
  {
    id: 'website-development',
    icon: 'Monitor',
    number: '01',
    title: 'Website Development',
    copy: 'Digital flagships that load fast, tell your story, and earn trust at first glance.',
    description: 'We build high-performance websites that combine stunning visuals with clean code. Every site is crafted to convert visitors into customers while maintaining brand consistency.',
    image: '/assets/services/website-development.jpg',
    features: [
      'Responsive design for all devices',
      'SEO-optimized structure',
      'Fast loading speeds',
      'Custom animations & interactions',
      'Content management systems',
      'Analytics integration',
    ],
    benefits: [
      'Professional online presence',
      'Improved search rankings',
      'Better user engagement',
      'Higher conversion rates',
    ],
    technologies: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    stacks: [
      { name: 'React Stack', techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
      { name: 'Next.js Stack', techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'] },
      { name: 'Classic Stack', techs: ['HTML', 'CSS', 'JavaScript', 'jQuery'] },
    ],
  },
  {
    id: 'web-applications',
    icon: 'Layers3',
    number: '02',
    title: 'Web Applications',
    copy: 'Focused products for real workflows — thoughtful on desktop, effortless on every screen.',
    description: 'Full-stack web applications built with modern frameworks. From dashboards to enterprise platforms, we create solutions that scale with your business.',
    image: '/assets/services/web-applications.jpg',
    features: [
      'User authentication & authorization',
      'Real-time data updates',
      'Role-based access control',
      'API integration',
      'Database design',
      'Cloud deployment',
    ],
    benefits: [
      'Streamlined operations',
      'Improved productivity',
      'Data-driven decisions',
      'Scalable architecture',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'TypeScript'],
    stacks: [
      { name: 'MERN Stack', techs: ['MongoDB', 'Express.js', 'React', 'Node.js'] },
      { name: 'Next.js Full-Stack', techs: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'] },
      { name: 'Java Enterprise', techs: ['Java', 'Spring Boot', 'PostgreSQL', 'React'] },
    ],
  },
  {
    id: 'saas-erp',
    icon: 'Boxes',
    number: '03',
    title: 'SaaS / ERP Systems',
    copy: 'The operational layer your business needs, shaped around the way your team actually works.',
    description: 'Custom SaaS platforms and ERP systems that automate workflows, centralize data, and provide actionable insights for growing businesses.',
    image: '/assets/services/saas-erp.jpg',
    features: [
      'Multi-tenant architecture',
      'Subscription management',
      'Reporting & analytics',
      'Inventory management',
      'CRM integration',
      'Workflow automation',
    ],
    benefits: [
      'Reduced operational costs',
      'Centralized data management',
      'Improved team collaboration',
      'Automated repetitive tasks',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'TypeScript'],
    stacks: [
      { name: 'Modern SaaS', techs: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'] },
      { name: 'Enterprise ERP', techs: ['Java', 'Spring Boot', 'PostgreSQL', 'React'] },
      { name: 'Cloud-Native', techs: ['React', 'AWS', 'Node.js', 'DynamoDB'] },
    ],
  },
  {
    id: 'ai-automation',
    icon: 'Bot',
    number: '04',
    title: 'AI Automation',
    copy: 'Useful intelligence that clears repetitive work and gives people back their best hours.',
    description: 'Leverage artificial intelligence and machine learning to automate processes, extract insights, and create intelligent experiences for your users.',
    image: '/assets/services/ai-automation.jpg',
    features: [
      'Chatbot development',
      'Natural language processing',
      'Predictive analytics',
      'Computer vision solutions',
      'Process automation',
      'Recommendation engines',
    ],
    benefits: [
      'Reduced manual workload',
      'Faster decision making',
      'Personalized user experiences',
      '24/7 automated operations',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'FastAPI'],
    stacks: [
      { name: 'Python AI', techs: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'] },
      { name: 'LLM Stack', techs: ['Python', 'LangChain', 'OpenAI', 'Pinecone'] },
      { name: 'Full-Stack AI', techs: ['Python', 'PyTorch', 'React', 'FastAPI'] },
    ],
  },
  {
    id: 'mobile-applications',
    icon: 'Smartphone',
    number: '05',
    title: 'Mobile Applications',
    copy: 'Native-feeling mobile experiences with clarity, rhythm, and a point of view.',
    description: 'Cross-platform and native mobile applications that deliver exceptional user experiences on iOS and Android devices.',
    image: '/assets/services/mobile-applications.jpg',
    features: [
      'Cross-platform development',
      'Native performance',
      'Push notifications',
      'Offline functionality',
      'App store deployment',
      'Analytics & crash reporting',
    ],
    benefits: [
      'Reach users on any device',
      'Single codebase, multiple platforms',
      'Native-like performance',
      'Faster time to market',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'TypeScript'],
    stacks: [
      { name: 'Flutter', techs: ['Flutter', 'Dart', 'Firebase', 'Provider'] },
      { name: 'React Native', techs: ['React Native', 'TypeScript', 'Expo', 'Node.js'] },
      { name: 'Native', techs: ['Swift', 'Kotlin', 'Firebase', 'REST APIs'] },
    ],
  },
  {
    id: 'custom-software',
    icon: 'Code2',
    number: '06',
    title: 'Custom Software',
    copy: 'When off-the-shelf stops short, we build the precise tool that moves you forward.',
    description: 'Bespoke software solutions tailored to your unique business requirements. From internal tools to customer-facing platforms.',
    image: '/assets/services/custom-software.jpg',
    features: [
      'Requirement analysis',
      'Custom architecture',
      'Integration with existing systems',
      'Ongoing maintenance',
      'Documentation',
      'Training & support',
    ],
    benefits: [
      'Perfect fit for your needs',
      'Competitive advantage',
      'Full ownership of code',
      'Long-term support',
    ],
    technologies: ['Java', 'Python', 'Node.js', 'C#', '.NET', 'PostgreSQL', 'MongoDB'],
    stacks: [
      { name: 'Enterprise', techs: ['Java', 'Spring Boot', 'PostgreSQL', 'React'] },
      { name: 'Modern Full-Stack', techs: ['Node.js', 'TypeScript', 'React', 'MongoDB'] },
      { name: 'Microsoft Stack', techs: ['.NET', 'C#', 'SQL Server', 'Azure'] },
    ],
  },
  {
    id: 'final-year-projects',
    icon: 'GraduationCap',
    number: '07',
    title: 'Final-Year Projects',
    copy: 'A rigorous technical partner for students building work they are proud to present.',
    description: 'End-to-end guidance and development support for engineering students working on their final-year projects. From concept to completion.',
    image: '/assets/services/final-year-projects.jpg',
    features: [
      'Topic selection guidance',
      'Architecture design',
      'Code development',
      'Documentation support',
      'Presentation preparation',
      'Viva voce guidance',
    ],
    benefits: [
      'Industry-standard development',
      'Professional code quality',
      'Complete documentation',
      'Placement-ready projects',
    ],
    technologies: ['Python', 'Java', 'React', 'Node.js', 'Machine Learning', 'IoT'],
    stacks: [
      { name: 'AI/ML Project', techs: ['Python', 'TensorFlow', 'Flask', 'React'] },
      { name: 'Web App Project', techs: ['MERN Stack', 'React', 'Node.js', 'MongoDB'] },
      { name: 'IoT Project', techs: ['Arduino', 'Python', 'React', 'MQTT'] },
    ],
  },
  {
    id: 'ui-ux-branding',
    icon: 'PenTool',
    number: '08',
    title: 'UI/UX & Brand Identity',
    copy: 'A visual system with enough character to be remembered and enough structure to scale.',
    description: 'Create memorable brand experiences through thoughtful design. From logo design to complete design systems that scale across products.',
    image: '/assets/services/ui-ux-branding.jpg',
    features: [
      'Brand identity design',
      'UI/UX design',
      'Design systems',
      'Prototyping',
      'User research',
      'Accessibility audits',
    ],
    benefits: [
      'Consistent brand experience',
      'Improved user satisfaction',
      'Professional visual identity',
      'Scalable design system',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'After Effects'],
    stacks: [
      { name: 'Design-to-Code', techs: ['Figma', 'Tailwind CSS', 'React', 'Storybook'] },
      { name: 'Brand System', techs: ['Figma', 'Illustrator', 'After Effects', 'Lottie'] },
      { name: 'UX Research', techs: ['Figma', 'Maze', 'Hotjar', 'Google Analytics'] },
    ],
  },
];

export const packages: Record<string, PackageOption[]> = {
  'website-development': [
    {
      name: 'Basic',
      technologyStack: 'React Stack',
      description: 'Perfect for startups and small businesses needing a professional online presence.',
      features: ['5-page responsive website', 'Basic SEO setup', 'Contact form', 'Mobile optimization', '1 month support'],
      scope: 'Small business website, portfolio, or landing page',
    },
    {
      name: 'Professional',
      technologyStack: 'Next.js Stack',
      description: 'For growing businesses that need performance and scalability.',
      features: ['10-page website', 'Advanced SEO', 'CMS integration', 'Analytics dashboard', 'Blog setup', '3 months support'],
      scope: 'Corporate website with content management',
    },
    {
      name: 'Enterprise',
      technologyStack: 'Custom Stack',
      description: 'Full-featured web presence with advanced functionality.',
      features: ['Unlimited pages', 'Custom functionality', 'E-commerce ready', 'Multi-language', 'Performance optimization', '6 months support'],
      scope: 'Large-scale corporate website or portal',
    },
  ],
  'web-applications': [
    {
      name: 'Basic',
      technologyStack: 'MERN Stack',
      description: 'Essential web application for small teams.',
      features: ['User authentication', 'Dashboard', 'CRUD operations', 'Basic API', '1 month support'],
      scope: 'Simple internal tool or MVP',
    },
    {
      name: 'Professional',
      technologyStack: 'Next.js Full-Stack',
      description: 'Production-ready application with advanced features.',
      features: ['Role-based access', 'Real-time updates', 'File uploads', 'Advanced analytics', 'API integration', '3 months support'],
      scope: 'Full-featured SaaS or business application',
    },
    {
      name: 'Enterprise',
      technologyStack: 'Java Enterprise',
      description: 'Mission-critical application with enterprise-grade architecture.',
      features: ['Multi-tenancy', 'Advanced security', 'Microservices', 'Load balancing', 'Disaster recovery', '12 months support'],
      scope: 'Enterprise-grade platform or ERP system',
    },
  ],
  'default': [
    {
      name: 'Basic',
      technologyStack: 'Standard Stack',
      description: 'Essential solution for small projects and MVPs.',
      features: ['Core functionality', 'Responsive design', 'Basic documentation', '1 month support'],
      scope: 'Small project or MVP',
    },
    {
      name: 'Professional',
      technologyStack: 'Advanced Stack',
      description: 'Comprehensive solution for growing businesses.',
      features: ['Advanced features', 'API integration', 'Analytics', 'Performance optimization', '3 months support'],
      scope: 'Medium-scale project',
    },
    {
      name: 'Enterprise',
      technologyStack: 'Enterprise Stack',
      description: 'Full-scale solution for complex requirements.',
      features: ['Custom architecture', 'High availability', 'Advanced security', 'Dedicated support', '12 months support'],
      scope: 'Large enterprise project',
    },
  ],
};

export const internships: Internship[] = [
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    shortDescription: 'Build intelligent systems that learn from data and make predictions.',
    category: 'Artificial Intelligence',
    duration: '1 Month',
    highlights: ['Hands-on ML model building', 'Real-world datasets', 'Model deployment', 'Certificate & bonafide'],
    description: 'Dive deep into artificial intelligence and machine learning. Work with popular frameworks like TensorFlow and PyTorch to build, train, and deploy machine learning models.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    programStructure: ['Week 1: Data preprocessing & exploration', 'Week 2: Model building & training', 'Week 3: Model evaluation & optimization', 'Week 4: Deployment & documentation'],
    weeklyTasks: [
      { week: 1, task: 'Data collection, cleaning, and exploratory data analysis' },
      { week: 2, task: 'Build and train a machine learning model' },
      { week: 3, task: 'Evaluate model performance and optimize hyperparameters' },
      { week: 4, task: 'Deploy the model and prepare documentation' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    shortDescription: 'Create AI systems that generate text, images, and creative content.',
    category: 'Artificial Intelligence',
    duration: '1 Month',
    highlights: ['LLM applications', 'Prompt engineering', 'AI content generation', 'Certificate & bonafide'],
    description: 'Explore the cutting edge of generative AI. Build applications using large language models, diffusion models, and other generative techniques.',
    skills: ['Python', 'OpenAI API', 'LangChain', 'Hugging Face', 'Streamlit', 'FastAPI'],
    programStructure: ['Week 1: LLM fundamentals & API integration', 'Week 2: Prompt engineering & fine-tuning', 'Week 3: Building generative applications', 'Week 4: Deployment & presentation'],
    weeklyTasks: [
      { week: 1, task: 'Set up and integrate LLM APIs, build a basic chatbot' },
      { week: 2, task: 'Implement prompt engineering techniques and RAG pipeline' },
      { week: 3, task: 'Build a complete generative AI application' },
      { week: 4, task: 'Deploy and document the project' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    shortDescription: 'Teach machines to see and understand visual information.',
    category: 'Artificial Intelligence',
    duration: '1 Month',
    highlights: ['Image processing', 'Object detection', 'Neural networks', 'Certificate & bonafide'],
    description: 'Master computer vision techniques including image classification, object detection, and image segmentation using deep learning.',
    skills: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'Image Processing'],
    programStructure: ['Week 1: Image processing fundamentals', 'Week 2: CNN architectures', 'Week 3: Object detection & segmentation', 'Week 4: Real-world application'],
    weeklyTasks: [
      { week: 1, task: 'Implement image processing and augmentation pipelines' },
      { week: 2, task: 'Build and train CNN models for classification' },
      { week: 3, task: 'Implement object detection using YOLO/SSD' },
      { week: 4, task: 'Build a complete CV application and deploy' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    shortDescription: 'Extract insights and knowledge from structured and unstructured data.',
    category: 'Data Science',
    duration: '1 Month',
    highlights: ['Statistical analysis', 'Data visualization', 'Predictive modeling', 'Certificate & bonafide'],
    description: 'Learn the complete data science pipeline from data collection to predictive modeling and visualization.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'SQL'],
    programStructure: ['Week 1: Data collection & cleaning', 'Week 2: Exploratory data analysis', 'Week 3: Statistical modeling', 'Week 4: Visualization & reporting'],
    weeklyTasks: [
      { week: 1, task: 'Collect and clean a real-world dataset' },
      { week: 2, task: 'Perform comprehensive EDA with visualizations' },
      { week: 3, task: 'Build predictive models and evaluate performance' },
      { week: 4, task: 'Create a comprehensive data story and dashboard' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
  {
    id: 'mern',
    title: 'MERN Stack Development',
    shortDescription: 'Build full-stack web applications with MongoDB, Express, React, and Node.js.',
    category: 'Web Development',
    duration: '1 Month',
    highlights: ['Full-stack development', 'REST APIs', 'Database design', 'Certificate & bonafide'],
    description: 'Master the MERN stack by building complete web applications from frontend to backend with MongoDB as the database.',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'JWT', 'Redux'],
    programStructure: ['Week 1: Backend with Node.js & Express', 'Week 2: MongoDB & API development', 'Week 3: React frontend development', 'Week 4: Integration & deployment'],
    weeklyTasks: [
      { week: 1, task: 'Build RESTful APIs with Express and MongoDB' },
      { week: 2, task: 'Implement authentication and database operations' },
      { week: 3, task: 'Build React frontend with state management' },
      { week: 4, task: 'Integrate, test, and deploy the application' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
  {
    id: 'django',
    title: 'Django Development',
    shortDescription: 'Build robust web applications with Python and Django framework.',
    category: 'Web Development',
    duration: '1 Month',
    highlights: ['Python web development', 'ORM & migrations', 'Admin panel', 'Certificate & bonafide'],
    description: 'Learn Django, the high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    skills: ['Python', 'Django', 'PostgreSQL', 'Django REST', 'HTML/CSS', 'Bootstrap'],
    programStructure: ['Week 1: Django setup & models', 'Week 2: Views, templates & forms', 'Week 3: REST APIs with DRF', 'Week 4: Testing & deployment'],
    weeklyTasks: [
      { week: 1, task: 'Set up Django project and create models' },
      { week: 2, task: 'Build views, templates, and handle forms' },
      { week: 3, task: 'Create REST APIs using Django REST Framework' },
      { week: 4, task: 'Write tests and deploy the application' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
  {
    id: 'frontend',
    title: 'Front-End Development',
    shortDescription: 'Create stunning user interfaces with modern frontend technologies.',
    category: 'Web Development',
    duration: '1 Month',
    highlights: ['React/Angular', 'Responsive design', 'CSS frameworks', 'Certificate & bonafide'],
    description: 'Master modern frontend development with React, TypeScript, and contemporary CSS frameworks to build beautiful, responsive interfaces.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6+'],
    programStructure: ['Week 1: HTML, CSS & JavaScript fundamentals', 'Week 2: React components & hooks', 'Week 3: State management & routing', 'Week 4: Testing & deployment'],
    weeklyTasks: [
      { week: 1, task: 'Build responsive layouts with modern CSS' },
      { week: 2, task: 'Create interactive React components' },
      { week: 3, task: 'Implement state management and routing' },
      { week: 4, task: 'Build and deploy a complete frontend project' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
  {
    id: 'modern-web',
    title: 'Modern Web Development',
    shortDescription: 'Build cutting-edge web apps with Next.js, TypeScript, and cloud services.',
    category: 'Web Development',
    duration: '1 Month',
    highlights: ['Next.js', 'Server components', 'Full-stack TypeScript', 'Certificate & bonafide'],
    description: 'Learn modern web development with Next.js, server components, and full-stack TypeScript for production-grade applications.',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'],
    programStructure: ['Week 1: Next.js fundamentals & routing', 'Week 2: Server components & data fetching', 'Week 3: Database & API routes', 'Week 4: Authentication & deployment'],
    weeklyTasks: [
      { week: 1, task: 'Build a Next.js app with App Router' },
      { week: 2, task: 'Implement server components and data fetching' },
      { week: 3, task: 'Set up database and API routes' },
      { week: 4, task: 'Add auth, optimize, and deploy' },
    ],
    submissionProcess: 'Submit your repository link and project details through the provided submission form approximately 10 days before the final deadline.',
    termsAndConditions: [
      'Duration: 1 month',
      'Total tasks: 4',
      'One task will be assigned every week.',
      'Students will receive a submission form before the submission deadline.',
      'The form will be sent approximately 10 days before the final submission deadline.',
      'Students must submit repository links and project details through the provided submission form.',
      'A fee of ₹499 is applicable for students who require the internship certificate and bonafide letter.',
      'The certificate and bonafide letter will be provided on the company\'s official letterhead.',
    ],
    certificateInfo: 'Upon successful completion, receive an official internship certificate on company letterhead.',
    bonafideInfo: 'Bonafide letter available on official company letterhead for academic purposes.',
  },
];

export const founders: Founder[] = [
  {
    name: 'Syed Afrid M',
    designation: 'Founder & CEO',
    description: 'Vision, product, and the questions that make the work better. Leading InnoApp Technologies with a focus on innovation and technical excellence.',
    image: '/assets/founders/syed-afrid.png',
    linkedin: 'https://www.linkedin.com/in/syedafrid1807',
    portfolio: 'https://syed-afrid-portfolio.vercel.app',
  },
  {
    name: 'Aafrin Fathima S',
    designation: 'Founder & MD',
    description: 'Operations, momentum, and making ambitious ideas real. Driving the company forward with strategic vision and operational excellence.',
    image: '/assets/founders/aafrin-fathima.png',
    linkedin: 'https://www.linkedin.com/in/aafrin-fathima-sathar-57a07727a',
    portfolio: 'https://aafrin-fathima-portfolio.vercel.app',
  },
];

export const projects: Project[] = [
  {
    id: 'vcan-3d',
    name: 'VCAN 3D',
    description: 'A 3D experience that turns complexity into something you can see, feel, and move through.',
    category: 'Web Experience',
    technologies: ['Three.js', 'React', 'WebGL', 'GSAP', 'TypeScript'],
    image: '/assets/projects/vcan-3d.jpg',
  },
];

export const companyInfo = {
  name: 'InnoApp Technologies',
  tagline: 'Where Innovation Meets Application',
  description: 'InnoApp Technologies is an independent software studio founded in 2026. We build high-performance, visually stunning, and affordable web solutions for businesses and students.',
  vision: 'To be the most trusted technology partner for businesses and aspiring developers, creating solutions that make the complicated feel obvious.',
  mission: 'We bring design and engineering to the same table, crafting digital experiences that are both beautiful and functional. Every project is an opportunity to push boundaries.',
  values: [
    { title: 'Innovation', description: 'We embrace new ideas and technologies to deliver cutting-edge solutions.' },
    { title: 'Quality', description: 'Every line of code, every pixel matters. We never compromise on excellence.' },
    { title: 'Transparency', description: 'Open communication and honest expectations build lasting partnerships.' },
    { title: 'Growth', description: 'We invest in learning — for our team, our clients, and our community.' },
  ],
  whyChoose: [
    'Founded by industry professionals with hands-on technical expertise',
    'End-to-end solutions from concept to deployment',
    'Competitive pricing without compromising quality',
    'Dedicated support and maintenance',
    'Student-friendly approach with mentorship opportunities',
    'Modern tech stacks and best practices',
  ],
  phone: '+91 7200661807',
  email: 'innoapptechnologies@gmail.com',
  linkedin: 'https://www.linkedin.com/company/innoapp-technologies',
  instagram: 'https://www.instagram.com/innoapp_technologies',
  whatsapp: 'https://wa.me/917200661807',
};
