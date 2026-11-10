export const profile = {
  name: "Jinoj P",
  role: "AI Engineer",
  location: "Kochi, Kerala, India",
  email: "pjinoj1632@gmail.com",
  linkedin: "https://www.linkedin.com/in/jinoj-p-89563b27a",
  github: "https://github.com/jinoj-p0620",
  tagline:
    "I build and ship machine learning systems across computer vision, audio and biosignal data — now applying them to open-source health informatics.",
  summary: [
    "AI Engineer with 2+ years of experience building and deploying machine learning systems across computer vision, audio and biosignal data. I'm currently a Software Engineer at Earthians Health Informatics, working on open-source hospital management systems.",
    "I work mainly in Python, TensorFlow, Keras and Scikit-learn, and I take models all the way to production behind FastAPI, Django and Frappe/ERPNext. I hold an MCA specialising in AI, ML and Data Science.",
  ],
};

export const stats = [
  { value: "2+", label: "Years experience" },
  { value: "95%", label: "EEG emotion accuracy" },
  { value: "38", label: "Plant disease classes" },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Earthians Health Informatics Pvt. Ltd.",
    location: "Kerala, India",
    period: "Jun 2026 – Present",
    current: true,
    points: [
      "Develop open-source health information and hospital management systems (HIS/HMIS) on the Frappe and ERPNext framework, contributing to Marley Healthcare / Frappe Health.",
      "Build DICOM imaging, PACS and eHealth features that support clinical workflows and statutory interoperability compliance.",
    ],
  },
  {
    role: "Software Engineer (AI/ML)",
    company: "Regional Technologies",
    location: "Kochi, Kerala",
    period: "Aug 2025 – May 2026",
    points: [
      "Returned after my MCA to build and deploy AI/ML solutions in Python, TensorFlow and Scikit-learn, delivering computer vision and predictive analytics models to production.",
      "Developed full-stack applications in Django and Flutter, serving trained models to users through REST APIs.",
      "Owned ML features across the full SDLC — requirement analysis, data preparation, training, evaluation and deployment.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Litmus7",
    location: "Kakkanad, Kerala",
    period: "May 2025 – Jun 2025",
    points: [
      "Built a customer segmentation model on historical purchase data using Python, Pandas and Scikit-learn, clustering customers into actionable segments.",
      "Deployed the model as a documented FastAPI service and ran EDA that surfaced insights for merchandising decisions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Regional Technologies",
    location: "Kozhikode, Kerala",
    period: "Jun 2022 – May 2023",
    points: [
      "Designed machine learning and predictive analytics models using Python, Scikit-learn and TensorFlow.",
      "Delivered computer vision features end to end with cross-functional teams, improving model accuracy over baseline.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  repo: string;
  metric: { value: string; label: string };
  points: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Multimodal Emotion Detection",
    subtitle: "Face + Speech + EEG",
    repo: "https://github.com/jinoj-p0620/emotion-detection",
    metric: { value: "95%", label: "EEG accuracy" },
    points: [
      "Django web app that classifies emotion from facial expression, speech audio and EEG signals, with role-based access for Admin, Staff and User.",
      "Deep learning model trained on 2,132 EEG samples across 2,548 spectral features to classify positive, negative and neutral states.",
      "MFCC and pitch features via Librosa for speech; OpenCV with dlib facial landmarks for real-time expression tracking.",
    ],
    tech: ["TensorFlow", "Django", "Librosa", "OpenCV", "dlib"],
  },
  {
    title: "Plant Disease Identification",
    subtitle: "GAN-augmented CNN",
    repo: "https://github.com/jinoj-p0620/Plant-Disease-GAN-CNN",
    metric: { value: "90%", label: "Test accuracy · 38 classes" },
    points: [
      "MobileNetV2 transfer-learning classifier identifying 38 plant disease categories from leaf images.",
      "DCGAN (Conv2DTranspose, BatchNorm, LeakyReLU) synthesises leaf images for rare classes, correcting imbalance and reducing overfitting.",
      "End-to-end TensorFlow/Keras pipeline: 128×128 preprocessing, global average pooling with dropout, real-time inference with confidence scores.",
    ],
    tech: ["TensorFlow", "Keras", "MobileNetV2", "DCGAN"],
  },
  {
    title: "Secure Military File Transfer",
    subtitle: "Layered covert transmission",
    repo: "https://github.com/jinoj-p0620/military-secure-transfer",
    metric: { value: "3", label: "Security layers" },
    points: [
      "Django system layering DNA encoding (binary → A/C/G/T), visual cryptography and LSB steganography, with XOR-based reconstruction.",
      "Geo-tagged transmission metadata for every transfer.",
      "REST endpoints for secure upload, transmission and decryption, using OpenCV and Pillow for image processing.",
    ],
    tech: ["Django", "REST APIs", "OpenCV", "Pillow"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "Dart"] },
  {
    group: "ML & Deep Learning",
    items: ["TensorFlow", "Keras", "Scikit-learn", "CNN", "DCGAN", "Transfer Learning", "Predictive Modeling"],
  },
  {
    group: "Computer Vision & Audio",
    items: ["OpenCV", "dlib", "Pillow", "Librosa", "Image Processing"],
  },
  {
    group: "Data",
    items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "EDA", "Feature Engineering", "Data Preprocessing"],
  },
  {
    group: "Backend & APIs",
    items: ["FastAPI", "Django", "Frappe", "ERPNext", "REST APIs", "Flutter"],
  },
  {
    group: "Databases & Tools",
    items: ["MySQL", "SQLite", "Git", "GitHub", "Jupyter Notebook"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    focus: "AI, ML & Data Science",
    school: "Yenepoya University",
    period: "2023 – 2025",
  },
  {
    degree: "B.Sc. Computer Science",
    focus: "",
    school: "Calicut University",
    period: "2019 – 2022",
  },
];

export const certifications = [
  {
    name: "Artificial Intelligence & Machine Learning Graduate",
    issuer: "IBM · Credly",
    url: "https://www.credly.com/badges/f281bcb8-4a21-4b2c-9705-a2934b1cceda/public_url",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google · Coursera",
    url: "https://coursera.org/verify/6LDNN2RTZ4ZM",
  },
  {
    name: "Python 101 for Data Science",
    issuer: "IBM SkillsBuild",
    url: "https://courses.skillsbuild.skillsnetwork.site/certificates/b0ce2cffdc994e7089e7806bf1f8d271",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM SkillsBuild",
    url: "https://courses.skillsbuild.skillsnetwork.site/certificates/0289663bfde649c39c0049ca9773f48a",
  },
  {
    name: "Data Visualization with Python",
    issuer: "IBM SkillsBuild",
    url: "https://courses.skillsbuild.skillsnetwork.site/certificates/c7bc33a3f82041aea6cfb8f3dc1cfa25",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM SkillsBuild · Credly",
    url: "https://www.credly.com/badges/8e22e7a6-07a6-4c79-8766-8e4b4f4900a2",
  },
  {
    name: "Applied Data Science with Python — Level 2",
    issuer: "IBM SkillsBuild · Credly",
    url: "https://www.credly.com/badges/cba2f8b6-135b-4b6b-9010-bea04fa77a39",
  },
];
