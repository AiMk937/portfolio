// src/data/data.ts

// -----------------------------------------------------------------------------
// EXPERIENCE
// -----------------------------------------------------------------------------
export interface Experience {
    id: string
    company: string
    companyLogo: string      // e.g. '/logos/PRISM LOGO.jpg'
    companyWebsite?: string
    role: string
    startDate: string       // YYYY-MM-DD
    endDate?: string        // YYYY-MM-DD
    projectsWorkedOn: string[]       // internal project titles
    externalProjects: string[]       // free-text for unlinked projects
    techStack: string[]      // matching names in our TechStack below
}

export const experiences: Experience[] = [
    {
        id: 'exp1',
        company: 'Prism Cybersoft Private Limited',
        companyLogo: '/logos/PRISM LOGO.jpg',
        companyWebsite: 'https://www.prismcybersoft.com',
        role: 'Web Development Intern',
        startDate: '2024-06-10',
        endDate: '2024-07-05',
        projectsWorkedOn: [
            'SOHAM Software Manual Frontend',
            'Interactive Documentation Navigator',
        ],
        externalProjects: [
            'Internal Security Dashboard (no public link)',
        ],
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
        ],
    },
    {
        id: 'exp2',
        company: 'cloudyBoss Pty Ltd',
        companyLogo: '/logos/cb_logo.jpeg',
        companyWebsite: 'https://www.cloudyboss.com',
        role: 'Software Developer Intern',
        startDate: '2023-08-01',
        endDate: '2024-06-17',
        projectsWorkedOn: [
            'AI-driven Endpoint Detection & Response',
            'STIX Denormalizer CLI',
        ],
        externalProjects: [
            'CTI Integration Toolkit (internal only)',
        ],
        techStack: [
            'Python',
            'SQL',
            'scikit-learn',
            'pandas',
            'TensorFlow',
            'Transformers',
        ],
    },
    // …add more experiences here if needed…
]

// -----------------------------------------------------------------------------
// TECH STACK
// -----------------------------------------------------------------------------
export interface Tech {
    id: string
    name: string
    category:
    | 'language'
    | 'framework'
    | 'tool'
    | 'database'
    | 'soft-skill'
    | 'other'
}

export const techStack: Tech[] = [
    // languages
    { id: 't1', name: 'Python', category: 'language' },
    { id: 't2', name: 'Java', category: 'language' },
    { id: 't3', name: 'C', category: 'language' },
    { id: 't4', name: 'SQL', category: 'language' },
    { id: 't5', name: 'HTML', category: 'language' },
    { id: 't6', name: 'CSS', category: 'language' },
    { id: 't7', name: 'JavaScript', category: 'language' },

    // frameworks
    { id: 't8', name: 'React.js', category: 'framework' },
    { id: 't9', name: 'Node.js', category: 'framework' },
    { id: 't10', name: 'Express.js', category: 'framework' },
    { id: 't11', name: 'Bootstrap', category: 'framework' },

    // databases
    { id: 't12', name: 'MongoDB', category: 'database' },
    { id: 't13', name: 'MySQL', category: 'database' },

    // tools & libraries
    { id: 't14', name: 'AWS', category: 'tool' },
    { id: 't15', name: 'Git', category: 'tool' },
    { id: 't16', name: 'GitHub', category: 'tool' },
    { id: 't17', name: 'MongoDB Compass', category: 'tool' },
    { id: 't18', name: 'Postman', category: 'tool' },
    { id: 't19', name: 'Pandas', category: 'tool' },
    { id: 't20', name: 'NumPy', category: 'tool' },
    { id: 't21', name: 'scikit-learn', category: 'tool' },
    { id: 't22', name: 'TensorFlow', category: 'tool' },
    { id: 't23', name: 'Transformers', category: 'tool' },
    { id: 't24', name: 'OpenCV', category: 'tool' },
    { id: 't25', name: 'Pillow', category: 'tool' },
    { id: 't26', name: 'NLTK', category: 'tool' },
    { id: 't27', name: 'Seaborn', category: 'tool' },
    { id: 't28', name: 'Matplotlib', category: 'tool' },
    { id: 't29', name: 'PyTorch', category: 'tool' },
    { id: 't30', name: 'Wireshark', category: 'tool' },
    { id: 't31', name: 'Zoom', category: 'other' },
    { id: 't32', name: 'Microsoft Teams', category: 'tool' },
    { id: 't33', name: 'Microsoft Office', category: 'tool' },

    // soft-skills
    { id: 's1', name: 'Adaptability', category: 'soft-skill' },
    { id: 's2', name: 'Communication', category: 'soft-skill' },
    { id: 's3', name: 'Collaboration & Teamwork', category: 'soft-skill' },
    { id: 's4', name: 'Problem-solving', category: 'soft-skill' },
    { id: 's5', name: 'Time management', category: 'soft-skill' },
    { id: 's6', name: 'Research & Analytical thinking', category: 'soft-skill' },

    // “other” domain expertise
    { id: 'o1', name: 'Internet of Things (IoT)', category: 'other' },
    { id: 'o2', name: 'Machine Learning', category: 'other' },
    { id: 'o3', name: 'Natural Language Processing (NLP)', category: 'other' },
    { id: 'o4', name: 'Smart Contracts', category: 'other' },
    { id: 'o5', name: 'System Security', category: 'other' },
    { id: 'o6', name: 'Application Security', category: 'other' },
    { id: 'o7', name: 'Blockchain', category: 'other' },
    { id: 'o8', name: 'Cryptography', category: 'other' },
    { id: 'o9', name: 'Cybersecurity', category: 'other' },
    { id: 'o10', name: 'Deep Learning', category: 'other' },
    { id: 'o11', name: 'Ethical Hacking', category: 'other' },
]

// -----------------------------------------------------------------------------
// EDUCATION
// -----------------------------------------------------------------------------
export interface Education {
    id: string
    institution: string
    degree: string
    fieldOfStudy?: string
    startDate?: string      // YYYY-MM-DD
    endDate?: string        // YYYY-MM-DD
    score?: string
}

export const educations: Education[] = [
    {
        id: 'edu1',
        institution: 'Rizvi College of Engineering',
        degree: 'B.E. in Computer Engineering',
        fieldOfStudy: 'Cyber Security (Honors)',
        startDate: '2021-08-01',
        endDate: '2025-05-31',
        score: 'GPA: 7.79',
    },
    {
        id: 'edu2',
        institution: 'RIMS International School & Junior College',
        degree: '12th HSC',
        startDate: '2017-06-15',
        endDate: '2020-03-01',
        score: '63.85%',
    },
    {
        id: 'edu3',
        institution: 'St. Mary’s High School',
        degree: '10th SSC',
        startDate: '2016-06-15',
        endDate: '2017-04-15',
        score: '73%',
    },
]

// -----------------------------------------------------------------------------
// PROJECTS
// -----------------------------------------------------------------------------
export interface Project {
    id: string
    title: string
    problemStatement: string
    solution: string
    features?: string[]
    futureEnhancements?: string[]
    techStack?: string[]
    link?: string
    github?: string
}

export const projects: Project[] = [
    {
        id: 'proj1',
        title: 'AI Model for Cyber Attack Detection',
        problemStatement: 'Detect potential network attacks in real time.',
        solution: 'Built a Random Forest classifier on labeled traffic data.',
        features: [
            'Feature-engineered payload statistics',
            'User-friendly alerts dashboard',
        ],
        futureEnhancements: [
            'Migrate to BERT-based anomaly detection',
            'Integrate with SIEM platforms',
        ],
        techStack: ['Python', 'scikit-learn', 'pandas'],
        github: 'https://github.com/AiMk937/cyber-attack-detector',
    },
    {
        id: 'proj2',
        title: 'AI-based Timetable Scheduler',
        problemStatement: 'Generate conflict-free timetables from NLP prompts.',
        solution: 'Used Hugging Face Transformers to parse natural language editing commands.',
        techStack: ['Python', 'Transformers', 'Flask'],
        link: 'https://ims-1-j3z0.onrender.com/',
    },
    {
        id: 'proj3',
        title: 'Toxic Comment Detector',
        problemStatement: 'Classify toxic comments across six categories.',
        solution: 'TF-IDF + Logistic Regression with Flask UI (91% F1).',
        futureEnhancements: ['Upgrade to BERT for contextual accuracy'],
        techStack: ['Python', 'Flask', 'scikit-learn', 'TF-IDF'],
        github: 'https://github.com/AiMk937/toxic-comment-detector',
    },
    {
        id: 'proj4',
        title: 'Inventory Management System',
        problemStatement: 'Local store needed an easy stock tracker.',
        solution: 'MERN stack app with real-time inventory updates.',
        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        link: 'https://ims-1-j3z0.onrender.com/',
    },
    {
        id: 'proj5',
        title: 'Pet Adoption Platform',
        problemStatement: 'Shelter wanted an online pet listing site.',
        solution: 'Responsive frontend in HTML/CSS/JS.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 'proj6',
        title: 'Personal Portfolio Website',
        problemStatement: 'Showcasing my work requires a central hub.',
        solution: 'Built with HTML/CSS/JS—fully responsive.',
        features: [
            'Responsive design',
            'Dynamic section navigation',
            'Contact form integration',
        ],
        futureEnhancements: ['Add blog/CMS', 'Integrate social feeds'],
        techStack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://aimk937.github.io/Portfolio1.1',
    },
]

// -----------------------------------------------------------------------------
// CERTIFICATES
// -----------------------------------------------------------------------------
export interface Certificate {
    id: string
    title: string
    organization: string
    issueDate: string     // YYYY-MM-DD or YYYY
    filePath: string      // e.g. '/certificates/AIML.jpg'
}

export const certificates: Certificate[] = [
    {
        id: 'cert1',
        title: 'Certificate of Participation: AI & Machine Learning Workshop',
        organization: 'Techobytes Technology & ITC, IIT Bombay',
        issueDate: '2024-03-10',
        filePath: '/certificates/AIML.jpg',
    },
    {
        id: 'cert2',
        title: 'AWS Academy Graduate – Cloud Foundations',
        organization: 'Amazon Web Services (AWS Academy)',
        issueDate: '2024-04-04',
        filePath: '/certificates/AWS CF.jpg',
    },
    {
        id: 'cert3',
        title: 'Certificate of Participation: Code Debugging',
        organization: 'Rizvi College of Engineering',
        issueDate: '2024-08-22',
        filePath: '/certificates/Code Debugging.jpg',
    },
    {
        id: 'cert4',
        title: 'Demystifying Networking',
        organization: 'NPTEL / IIT Bombay',
        issueDate: '2023-08-01',
        filePath: '/certificates/NPTEL.jpg',
    },
    {
        id: 'cert5',
        title: 'HTML, CSS, & JavaScript for Web Developers',
        organization: 'Johns Hopkins University / Coursera',
        issueDate: '2023-06-11',
        filePath: '/certificates/WEB-DEV.jpg',
    },
    {
        id: 'cert6',
        title: 'Certificate of Appreciation: Stay Safe Online Campaign',
        organization: 'MeitY (Govt. of India) / CDAC',
        issueDate: '2024-08-22',
        filePath: '/certificates/SSO_Certificate.jpg',
    },
    {
        id: 'cert7',
        title: 'Comic Con India – Volunteer Appreciation',
        organization: 'Comic Con India',
        issueDate: '2023-02-11',
        filePath: '/certificates/MCC23.jpg',
    },
    {
        id: 'cert8',
        title: 'Advance Diploma in Desktop Publishing',
        organization: 'GlobeNet',
        issueDate: '2016-06-24',
        filePath: '/certificates/GlobeNet ADVANCE DIPLOMA IN DESKTOP PUBLISHING.jpg',
    },
    {
        id: 'cert9',
        title: 'Google AI Essentials',
        organization: 'Google / Coursera',
        issueDate: '2024-10-06',
        filePath: '/certificates/Google AI essentials.jpg',
    },
    {
        id: 'cert10',
        title: 'Comic Con India – Volunteer Appreciation',
        organization: 'Comic Con India',
        issueDate: '2025-04-23',
        filePath: '/certificates/MCC25.jpg',
    }

]


// -----------------------------------------------------------------------------
// PUBLICATIONS
// -----------------------------------------------------------------------------
export interface Publication {
    id: string
    title: string
    journal: string
    date: string
    link: string        // published link (e.g. JETIR URL)
    certificatePdf: string
}

export const publications: Publication[] = [
    {
        id: 'jetir2410528',
        title: 'AI powered timetable scheduler and management',
        journal: 'JETIR',
        date: '2024-10-28',
        link: 'https://www.jetir.org/view?paper=JETIR2410528',
        certificatePdf: '/docs/publications/certificates/AIPTSAM.pdf',
    },
    {
        id: 'jetir2404639',
        title: 'IoT-Based Vehicle Location and Speed Monitoring for Parental Peace of Mind',
        journal: 'JETIR',
        date: '2024-04-18',
        link: 'https://www.jetir.org/view?paper=JETIR2404639',
        certificatePdf: '/docs/publications/certificates/VLAST.pdf',
    },
]