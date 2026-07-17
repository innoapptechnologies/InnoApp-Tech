// Default Internship Programs Data
const DEFAULT_PROGRAMS = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning Internship",
    category: "Artificial Intelligence",
    duration: "4 Weeks",
    description: "Master the fundamentals of Machine Learning, Deep Learning, and Neural Networks. Complete weekly hands-on tasks and build predictive models.",
    topics: ["Supervised & Unsupervised Learning", "Neural Networks & Deep Learning", "Model Deployment (Flask/FastAPI)", "Data Preprocessing & Analysis"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  },
  {
    id: "gen-ai",
    title: "Generative AI Internship",
    category: "Artificial Intelligence",
    duration: "4 Weeks",
    description: "Dive into LLMs, prompt engineering, RAG systems, and AI agent integration. Complete weekly tasks using OpenAI, Anthropic, and open-source models.",
    topics: ["Prompt Engineering & LLMs", "Retrieval-Augmented Generation (RAG)", "AI Agent Architectures", "Fine-Tuning & Vector Databases"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  },
  {
    id: "computer-vision",
    title: "Computer Vision Internship",
    category: "Artificial Intelligence",
    duration: "4 Weeks",
    description: "Learn image processing, object detection, segmentation, and face recognition. Complete weekly tasks using OpenCV and PyTorch.",
    topics: ["OpenCV Image Manipulation", "Object Detection (YOLO)", "Image Segmentation", "Face & Gesture Recognition"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  },
  {
    id: "data-science",
    title: "Data Science Internship",
    category: "Data & Analytics",
    duration: "4 Weeks",
    description: "Perform exploratory data analysis, data visualization, and build predictive algorithms. Complete weekly tasks using Python, Pandas, and SQL.",
    topics: ["Exploratory Data Analysis (EDA)", "Statistical Modelling", "Data Visualization (Tableau/Seaborn)", "SQL Database Queries"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  },
  {
    id: "mern-stack",
    title: "MERN Stack Internship",
    category: "Web Development",
    duration: "4 Weeks",
    description: "Build modern web applications using MongoDB, Express.js, React.js, and Node.js. Complete weekly tasks covering REST APIs and frontend views.",
    topics: ["React SPA Development", "Node & Express REST APIs", "MongoDB Schema & Database design", "JWT Authentication & Security"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  },
  {
    id: "python-django",
    title: "Python Django Internship",
    category: "Web Development",
    duration: "4 Weeks",
    description: "Develop robust back-end systems and APIs using Python and the Django framework. Complete weekly tasks covering ORM, models, and databases.",
    topics: ["Django MVC Architecture", "Django ORM & Migrations", "REST APIs with Django REST Framework", "User Authentication & Permissions"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  },
  {
    id: "frontend-web",
    title: "Front-End Web Development Internship",
    category: "Web Development",
    duration: "4 Weeks",
    description: "Design responsive user interfaces. Complete weekly coding challenges using HTML5, CSS3, and JavaScript.",
    topics: ["HTML5 Semantic Structure", "Advanced CSS Grid & Flexbox", "JavaScript ES6+ & DOM Operations", "Responsive Web Design principles"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  },
  {
    id: "modern-web",
    title: "Modern Web Development Internship",
    category: "Web Development",
    duration: "4 Weeks",
    description: "Learn cutting-edge front-end technologies like Next.js, Vite, and TailwindCSS. Complete weekly tasks focusing on performance and web animations.",
    topics: ["Next.js App Router & SSR", "TailwindCSS rapid styling", "GSAP & Web Animations", "SEO & Performance Tuning"],
    rules: "Complete all 4 weekly tasks and final capstone project. Certificate fee is paid while registering.",
    enrollUrl: "https://forms.gle/ufB737nkh61TSQH89"
  }
];

// Default Portfolio Companies
const DEFAULT_COMPANIES = [
  {
    id: "vcan-3d",
    name: "VCAN 3D",
    category: "Website Development",
    website: "https://www.vcan3d.com",
    imageUrl: ""
  }
];

// Default Homepage Announcements
const DEFAULT_ANNOUNCEMENTS = [
  {
    id: "ann-1",
    title: "New Self-Paced Internship Batch Open",
    text: "Enroll today in our 4-week self-paced student internship programs. Access free hands-on tasks in Generative AI, Full-stack web development, Machine Learning, and more! Earn a verified certificate.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    date: "July 15, 2026"
  },
  {
    id: "ann-2",
    title: "MERN Stack Internship Capstone Showcase",
    text: "Congratulations to our MERN Stack interns who deployed their final capstone projects last week! Verified certificates and letters of recommendation have been dispatched to all successful candidates.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    date: "July 12, 2026"
  }
];

const ADMIN_EMAIL = "innoapptechnologies@gmail.com";
const ADMIN_PASSWORD = "Innoapp@1813";

// Whitelist of emails permitted to access the admin dashboard.
// Only this account is allowed as admin — no other user may log in.
const AUTHORIZED_ADMIN_EMAILS = [ADMIN_EMAIL];

function isAuthorizedAdmin(email) {
  return AUTHORIZED_ADMIN_EMAILS.some(
    (allowed) => String(email).trim().toLowerCase() === allowed.toLowerCase()
  );
}

// Utility to resolve image URLs, Google Drive IDs and Google Images links
function resolveImageUrl(imageUrl, websiteUrl) {
  if (!imageUrl && websiteUrl) {
    let cleanUrl = websiteUrl.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = "https://" + cleanUrl;
    }
    // Fallback to website screenshot if image URL is not provided
    return `https://image.thum.io/get/width/600/crop/800/${cleanUrl}`;
  }
  if (!imageUrl) {
    return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80";
  }

  // Google Drive direct link resolver
  if (imageUrl.includes("drive.google.com")) {
    let fileId = "";
    const dMatch = imageUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const idMatch = imageUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) fileId = dMatch[1];
    else if (idMatch && idMatch[1]) fileId = idMatch[1];

    if (fileId) {
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }

  // Google Images search parameter parser
  if (imageUrl.includes("google.") && imageUrl.includes("imgurl=")) {
    try {
      const urlObj = new URL(imageUrl);
      const imgUrlParam = urlObj.searchParams.get("imgurl");
      if (imgUrlParam) {
        return imgUrlParam;
      }
    } catch (e) {
      console.error("Error parsing Google Image URL:", e);
    }
  }

  return imageUrl;
}

const DEFAULT_CONFIG = {
  formAction: "https://docs.google.com/forms/d/e/1FAIpQLSe2P-9BhVVndTxysgeJIy4Ic5PwSQRC8eglRE-nPFda-Y7zww/formResponse",
  razorpayButtonId: "pl_TDqchZOzs0xsbH",
  entryName: "entry.1000001",
  entryEmail: "entry.1000002",
  entryPhone: "entry.1000003",
  entryCollege: "entry.1000004",
  entryDegree: "entry.1000005",
  entryYear: "entry.1000006",
  entryTrack: "entry.1000007",
  entryOption: "entry.1000008",
  entryPaymentId: "entry.1000009"
};

// Class to manage Programs and Announcements data in localStorage
class ProgramManager {
  constructor() {
    this.progKey = "innoapp_programs_v3";
    this.annKey = "innoapp_announcements_v1";
    this.compKey = "innoapp_companies_v1";
    this.configKey = "innoapp_config_v1";
    this.init();
  }

  init() {
    if (!localStorage.getItem(this.progKey)) {
      this.resetProgramsToDefaults();
    }
    if (!localStorage.getItem(this.annKey)) {
      this.resetAnnouncementsToDefaults();
    }
    if (!localStorage.getItem(this.compKey)) {
      this.resetCompaniesToDefaults();
    }
    if (!localStorage.getItem(this.configKey)) {
      this.saveConfig(DEFAULT_CONFIG);
    }
  }

  // --- Configuration ---
  getConfig() {
    try {
      return JSON.parse(localStorage.getItem(this.configKey)) || DEFAULT_CONFIG;
    } catch (e) {
      console.error("Error reading config data, loading defaults:", e);
      return DEFAULT_CONFIG;
    }
  }

  saveConfig(config) {
    try {
      localStorage.setItem(this.configKey, JSON.stringify(config));
      return true;
    } catch (e) {
      console.error("Error saving config data:", e);
      return false;
    }
  }

  // --- Programs CRUD ---
  getPrograms() {
    try {
      return JSON.parse(localStorage.getItem(this.progKey)) || DEFAULT_PROGRAMS;
    } catch (e) {
      console.error("Error reading programs data, loading defaults:", e);
      return DEFAULT_PROGRAMS;
    }
  }

  savePrograms(programs) {
    try {
      localStorage.setItem(this.progKey, JSON.stringify(programs));
      window.dispatchEvent(new CustomEvent("programsUpdated"));
      return true;
    } catch (e) {
      console.error("Error saving programs data:", e);
      return false;
    }
  }

  getProgram(id) {
    return this.getPrograms().find(p => p.id === id);
  }

  addProgram(program) {
    const programs = this.getPrograms();
    program.id = program.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    if (programs.some(p => p.id === program.id)) {
      program.id = `${program.id}-${Date.now()}`;
    }
    programs.push(program);
    return this.savePrograms(programs);
  }

  updateProgram(id, updatedData) {
    const programs = this.getPrograms();
    const index = programs.findIndex(p => p.id === id);
    if (index !== -1) {
      programs[index] = { ...programs[index], ...updatedData };
      return this.savePrograms(programs);
    }
    return false;
  }

  deleteProgram(id) {
    const programs = this.getPrograms();
    const filtered = programs.filter(p => p.id !== id);
    return this.savePrograms(filtered);
  }

  resetProgramsToDefaults() {
    return this.savePrograms(DEFAULT_PROGRAMS);
  }

  // --- Announcements CRUD ---
  getAnnouncements() {
    try {
      return JSON.parse(localStorage.getItem(this.annKey)) || DEFAULT_ANNOUNCEMENTS;
    } catch (e) {
      console.error("Error reading announcements data, loading defaults:", e);
      return DEFAULT_ANNOUNCEMENTS;
    }
  }

  saveAnnouncements(announcements) {
    try {
      localStorage.setItem(this.annKey, JSON.stringify(announcements));
      window.dispatchEvent(new CustomEvent("announcementsUpdated"));
      return true;
    } catch (e) {
      console.error("Error saving announcements data:", e);
      return false;
    }
  }

  getAnnouncement(id) {
    return this.getAnnouncements().find(a => a.id === id);
  }

  addAnnouncement(announcement) {
    const announcements = this.getAnnouncements();
    announcement.id = `ann-${Date.now()}`;
    announcements.unshift(announcement); // Put newest announcements at the top
    return this.saveAnnouncements(announcements);
  }

  updateAnnouncement(id, updatedData) {
    const announcements = this.getAnnouncements();
    const index = announcements.findIndex(a => a.id === id);
    if (index !== -1) {
      announcements[index] = { ...announcements[index], ...updatedData };
      return this.saveAnnouncements(announcements);
    }
    return false;
  }

  deleteAnnouncement(id) {
    const announcements = this.getAnnouncements();
    const filtered = announcements.filter(a => a.id !== id);
    return this.saveAnnouncements(filtered);
  }

  resetAnnouncementsToDefaults() {
    return this.saveAnnouncements(DEFAULT_ANNOUNCEMENTS);
  }

  // --- Companies CRUD ---
  getCompanies() {
    try {
      return JSON.parse(localStorage.getItem(this.compKey)) || DEFAULT_COMPANIES;
    } catch (e) {
      console.error("Error reading companies data, loading defaults:", e);
      return DEFAULT_COMPANIES;
    }
  }

  saveCompanies(companies) {
    try {
      localStorage.setItem(this.compKey, JSON.stringify(companies));
      window.dispatchEvent(new CustomEvent("companiesUpdated"));
      return true;
    } catch (e) {
      console.error("Error saving companies data:", e);
      return false;
    }
  }

  getCompany(id) {
    return this.getCompanies().find(c => c.id === id);
  }

  addCompany(company) {
    const companies = this.getCompanies();
    company.id = company.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    if (companies.some(c => c.id === company.id)) {
      company.id = `${company.id}-${Date.now()}`;
    }
    companies.push(company);
    return this.saveCompanies(companies);
  }

  updateCompany(id, updatedData) {
    const companies = this.getCompanies();
    const index = companies.findIndex(c => c.id === id);
    if (index !== -1) {
      companies[index] = { ...companies[index], ...updatedData };
      return this.saveCompanies(companies);
    }
    return false;
  }

  deleteCompany(id) {
    const companies = this.getCompanies();
    const filtered = companies.filter(c => c.id !== id);
    return this.saveCompanies(filtered);
  }

  resetCompaniesToDefaults() {
    return this.saveCompanies(DEFAULT_COMPANIES);
  }

  resetAllToDefaults() {
    this.resetProgramsToDefaults();
    this.resetAnnouncementsToDefaults();
    this.resetCompaniesToDefaults();
  }
}

const manager = new ProgramManager();

const PROGRAM_PROCESS_STEPS = [
  {
    title: "Register for the track",
    text: "Choose the internship track that fits your goal and submit the registration form with accurate contact details."
  },
  {
    title: "Pay while registering",
    text: "Complete the certificate payment during registration so your enrollment and certificate processing are confirmed."
  },
  {
    title: "Join the batch channel",
    text: "After registration, use the official group link shared with you to receive task updates and batch notices."
  },
  {
    title: "Complete weekly tasks",
    text: "Work through four weeks of practical assignments, references, and checkpoints at a student-friendly pace."
  },
  {
    title: "Submit your project",
    text: "Share your final repository, demo, screenshots, or project documentation through the submission form."
  },
  {
    title: "Receive verification",
    text: "InnoApp reviews your submission, confirms completion, and issues your certificate after verification."
  }
];

function getProgramEnrollUrl(programId) {
  let enrollUrl = "https://forms.gle/ufB737nkh61TSQH89";
  if (programId) {
    const prog = manager.getProgram(programId);
    if (prog && prog.enrollUrl) {
      enrollUrl = prog.enrollUrl;
    }
  }
  return enrollUrl;
}

function openProgramEnrollment(programId) {
  window.open(getProgramEnrollUrl(programId), "_blank");
}

function getProgramDetailUrl(programId) {
  return `program-detail.html?id=${encodeURIComponent(programId)}`;
}

function renderProgramDetail(prog) {
  const topicsHtml = prog.topics.map(t => `<li><i class="fas fa-check-circle"></i><span>${t}</span></li>`).join("");

  return `
    <div class="program-detail-hero">
      <div>
        <span class="program-category">${prog.category}</span>
        <h2>${prog.title}</h2>
        <p>${prog.description}</p>
      </div>
      <div class="program-detail-stat">
        <strong>${prog.duration}</strong>
        <span>Online, task-based internship</span>
      </div>
    </div>

    <div class="program-detail-grid">
      <section class="program-detail-panel">
        <span class="detail-kicker">Course Details</span>
        <h3>What you will build and practice</h3>
        <ul class="program-detail-list">
          ${topicsHtml}
          <li><i class="fas fa-project-diagram"></i><span>Final capstone project for your portfolio.</span></li>
          <li><i class="fas fa-certificate"></i><span>Verified certificate after successful project review.</span></li>
        </ul>
      </section>

      <section class="program-detail-panel">
        <span class="detail-kicker">Rules</span>
        <h3>Completion expectations</h3>
        <p>${prog.rules}</p>
        <ul class="program-detail-list compact">
          <li><i class="fas fa-user-check"></i><span>Use your real student details during registration.</span></li>
          <li><i class="fas fa-credit-card"></i><span>Certificate fee is paid while registering.</span></li>
          <li><i class="fas fa-folder-open"></i><span>Submit working project links and readable documentation.</span></li>
          <li><i class="fas fa-award"></i><span>Certificate and LOR are issued after project verification.</span></li>
        </ul>
      </section>
    </div>

    <div class="program-detail-actions">
      <button class="btn btn-primary btn-glow btn-enroll" data-id="${prog.id}">Enroll Now <i class="fas fa-arrow-right"></i></button>
      <a class="btn btn-outline" href="programs.html"><i class="fas fa-arrow-left"></i> Back to programs</a>
    </div>
  `;
}

function openProgramDetail(programId) {
  const prog = manager.getProgram(programId);
  if (!prog) return;
  window.location.href = getProgramDetailUrl(prog.id);
}

function closeProgramDetail() {
  if (document.getElementById("program-detail-page")) {
    window.location.href = "programs.html";
  }
}

function renderProgramDetailPage() {
  const content = document.getElementById("program-detail-content");
  if (!content) return;

  const params = new URLSearchParams(window.location.search);
  const programId = params.get("id");
  const prog = manager.getProgram(programId);

  if (!prog) {
    content.innerHTML = `
      <section class="program-detail-empty">
        <i class="fas fa-folder-open"></i>
        <h1>Internship not found</h1>
        <p>The selected internship program may have been updated or removed.</p>
        <a class="btn btn-primary" href="programs.html"><i class="fas fa-arrow-left"></i> View all internships</a>
      </section>
    `;
    return;
  }

  document.title = `${prog.title} - InnoApp Technologies`;
  content.innerHTML = renderProgramDetail(prog);

  if (typeof revealOnScroll === "function") {
    revealOnScroll();
  }
}

// Dynamic DOM Rendering - Programs
function renderProgramsList(containerId, isHomepage = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const programs = manager.getPrograms();
  container.innerHTML = "";

  if (programs.length === 0) {
    container.innerHTML = `
      <div class="no-programs card-glass" style="grid-column: 1/-1; padding: 40px; text-align: center;">
        <i class="fas fa-folder-open" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px; display: block;"></i>
        <h3 style="margin-bottom: 10px;">No Internship Programs Found</h3>
        <p style="color: var(--text-gray);">Programs are currently being updated. Please check back later or contact us directly.</p>
      </div>
    `;
    return;
  }

  const isCompactGrid = isHomepage || container.classList.contains("is-compact");
  const listToRender = isHomepage ? programs.slice(0, 8) : programs;

  listToRender.forEach((prog, index) => {
    const delay = (index % 4) * 100;
    const visibleTopics = prog.topics.slice(0, isCompactGrid ? 2 : 3);
    const topicsHtml = visibleTopics.map(t => `<li><i class="fas fa-check-circle"></i> ${t}</li>`).join("");
    
    const card = document.createElement("div");
    card.className = "program-card card-glass active"; // active class is added by default to override scroll reveal opacity 0
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View details for ${prog.title}`);
    card.setAttribute("data-program-id", prog.id);
    card.setAttribute("data-reveal", "bottom");
    card.setAttribute("data-delay", delay.toString());

    card.innerHTML = `
      <div class="program-card-badges">
        <span class="badge-free"><i class="fas fa-check-circle"></i> Free</span>
        <span class="badge-cert"><i class="fas fa-graduation-cap"></i> Certificate</span>
      </div>
      <div class="program-header">
        <span class="program-category">${prog.category}</span>
      </div>
      <h3 class="program-title">${prog.title}</h3>
      <p class="program-desc">${prog.description}</p>
      
      <div class="program-meta-grid">
        <div class="meta-item">
          <i class="far fa-clock"></i>
          <span>${prog.duration}</span>
        </div>
        <div class="meta-item">
          <i class="fas fa-globe"></i>
          <span>Online Mode</span>
        </div>
        <div class="meta-item">
          <i class="fas fa-tasks"></i>
          <span>Weekly Tasks</span>
        </div>
      </div>
      
      <div class="program-pricing-box">
        <div class="pricing-row">
          <span class="label">Internship:</span>
          <span class="value free">FREE</span>
        </div>
        <div class="pricing-row">
          <span class="label">Certificate:</span>
          <span class="value paid">₹499</span>
        </div>
      </div>
      
      <div class="program-topics-title">Skills Covered:</div>
      <ul class="program-topics">
        ${topicsHtml}
      </ul>
      
      <div class="program-footer">
        <button class="btn btn-primary btn-glow btn-program-detail" data-id="${prog.id}" type="button">Details <i class="fas fa-arrow-right"></i></button>
      </div>
    `;
    container.appendChild(card);
  });

  if (typeof revealOnScroll === "function") {
    revealOnScroll();
  }
}

// Dynamic DOM Rendering - Announcements
function renderAnnouncementsList(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const announcements = manager.getAnnouncements();
  container.innerHTML = "";

  if (announcements.length === 0) {
    container.innerHTML = `
      <div class="no-announcements card-glass" style="grid-column: 1/-1; padding: 45px; text-align: center; border: 1px dashed var(--glass-border);">
        <i class="fas fa-bullhorn" style="font-size: 2.5rem; color: var(--primary); opacity: 0.5; margin-bottom: 15px; display: block;"></i>
        <h4 style="margin-bottom: 8px;">No Current Announcements</h4>
        <p style="color: var(--text-gray); font-size: 0.9rem;">Check back later for news, updates, and upcoming batches.</p>
      </div>
    `;
    return;
  }

  announcements.forEach((ann, index) => {
    const delay = (index % 3) * 100;
    const card = document.createElement("div");
    card.className = "announcement-card card-glass active";
    card.setAttribute("data-reveal", "bottom");
    card.setAttribute("data-delay", delay.toString());

    card.innerHTML = `
      <img src="${ann.imageUrl}" alt="${ann.title}" class="announcement-img" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80';">
      <div class="announcement-body">
        <div class="announcement-date"><i class="far fa-calendar-alt"></i> ${ann.date}</div>
        <h3 class="announcement-title">${ann.title}</h3>
        <p class="announcement-text">${ann.text}</p>
      </div>
    `;
    container.appendChild(card);
  });

  if (typeof revealOnScroll === "function") {
    revealOnScroll();
  }
}

// Dynamic DOM Rendering - Companies (Portfolio)
function renderCompaniesList(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const companies = manager.getCompanies();
  container.innerHTML = "";

  if (companies.length === 0) {
    container.innerHTML = `
      <div class="no-companies card-glass" style="grid-column: 1/-1; padding: 45px; text-align: center; border: 1px dashed var(--glass-border);">
        <i class="fas fa-briefcase" style="font-size: 2.5rem; color: var(--primary); opacity: 0.5; margin-bottom: 15px; display: block;"></i>
        <h4 style="margin-bottom: 8px;">No Portfolio Companies Yet</h4>
        <p style="color: var(--text-gray); font-size: 0.9rem;">Add a company from the admin dashboard to showcase it here.</p>
      </div>
    `;
    return;
  }

  companies.forEach((comp, index) => {
    const delay = (index % 3) * 100;
    const card = document.createElement("a");
    card.className = "company-card card-glass active";
    card.href = comp.website || "#";
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("data-reveal", "bottom");
    card.setAttribute("data-delay", delay.toString());
    card.setAttribute("aria-label", `Visit ${comp.name} website`);

    card.innerHTML = `
      <div class="company-body company-name-only">
        <h3 class="company-name">${comp.name}</h3>
      </div>
    `;
    container.appendChild(card);
  });

  if (typeof revealOnScroll === "function") {
    revealOnScroll();
  }
}

// Custom Toast notification
function showToast(message, type = "success") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type} card-glass`;
  toast.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast);
      }
    }, 400);
  }, 3500);
}

/// Update the text/icon of admin portal links in the footer based on status
function updateAdminFooterLinks() {
  const isLogged = sessionStorage.getItem("innoapp_admin_logged") === "true";
  const footerLinks = document.querySelectorAll(".admin-footer-link");
  
  // Detect if we are inside services directory
  const isSubdir = window.location.pathname.includes('/services/');
  const targetPage = isSubdir ? '../admin.html' : 'admin.html';
  
  footerLinks.forEach(link => {
    link.href = targetPage;
    if (isLogged) {
      link.innerHTML = `<i class="fas fa-chart-line"></i> Admin Dashboard`;
    } else {
      link.innerHTML = `<i class="fas fa-lock"></i> Admin Login`;
    }
  });
}

// Render dynamic portfolio with filter controls
function renderPortfolioPage() {
  const container = document.getElementById("portfolio-companies-container");
  if (!container) return;

  const companies = manager.getCompanies();
  
  // Get all unique categories for the filters
  const categories = ["All", ...new Set(companies.map(c => c.category))];
  
  // Inject filter buttons at the top of the portfolio section if they don't exist yet
  let filterContainer = document.getElementById("portfolio-filter-container");
  if (!filterContainer && companies.length > 0) {
    filterContainer = document.createElement("div");
    filterContainer.id = "portfolio-filter-container";
    filterContainer.className = "portfolio-filters";
    
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `btn btn-sm ${cat === "All" ? "btn-primary active" : "btn-outline"}`;
      btn.innerText = cat;
      btn.addEventListener("click", () => {
        // Toggle active button
        document.querySelectorAll("#portfolio-filter-container button").forEach(b => {
          b.classList.remove("btn-primary", "active");
          b.classList.add("btn-outline");
        });
        btn.classList.add("btn-primary", "active");
        btn.classList.remove("btn-outline");
        
        // Filter items
        filterPortfolioItems(cat);
      });
      filterContainer.appendChild(btn);
    });
    
    // Insert filter container before the grid
    container.parentNode.insertBefore(filterContainer, container);
  }

  const filterPortfolioItems = (category) => {
    container.innerHTML = "";
    
    const filtered = category === "All" 
      ? companies 
      : companies.filter(c => c.category === category);
      
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="no-companies card-glass" style="grid-column: 1/-1; padding: 45px; text-align: center; border: 1px dashed var(--glass-border);">
          <i class="fas fa-briefcase" style="font-size: 2.5rem; color: var(--primary); opacity: 0.5; margin-bottom: 15px; display: block;"></i>
          <h4 style="margin-bottom: 8px;">No Portfolio Projects Found</h4>
          <p style="color: var(--text-gray); font-size: 0.9rem;">Check back later or check another category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((comp, index) => {
      const delay = (index % 3) * 100;
      
      const card = document.createElement("a");
      card.className = "company-card card-glass active";
      card.href = comp.website || "#";
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("data-reveal", "bottom");
      card.setAttribute("data-delay", delay.toString());
      card.setAttribute("aria-label", `Visit ${comp.name} website`);

      card.innerHTML = `
        <div class="company-body company-name-only">
          <h3 class="company-name">${comp.name}</h3>
        </div>
      `;
      container.appendChild(card);
    });

    if (typeof revealOnScroll === "function") {
      revealOnScroll();
    }
  };

  // Initial load
  filterPortfolioItems("All");
}

// Listen to updates from other pages
window.addEventListener("programsUpdated", () => {
  renderProgramsList("programs-container", false);
  renderProgramsList("homepage-programs-container", true);
});

window.addEventListener("announcementsUpdated", () => {
  renderAnnouncementsList("homepage-announcements-container");
});

window.addEventListener("companiesUpdated", () => {
  renderCompaniesList("homepage-companies-container");
  renderPortfolioPage();
});

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (question && answer) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        
        // Close all other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove("active");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });
        
        if (!isActive) {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    }
  });
}

// Initialize rendering on load
const handleProgramsInit = () => {
  updateAdminFooterLinks();

  // Check url queries for redirecting to admin page
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('admin') === 'true') {
    const isSubdir = window.location.pathname.includes('/services/');
    window.location.href = isSubdir ? '../admin.html' : 'admin.html';
    return;
  }

  renderProgramsList("programs-container", false);
  renderProgramsList("homepage-programs-container", true);
  renderAnnouncementsList("homepage-announcements-container");
  renderCompaniesList("homepage-companies-container");
  renderPortfolioPage();
  renderProgramDetailPage();
  initFaqAccordion();

  if (window.location.hash.startsWith("#program-")) {
    const hashProgramId = window.location.hash.replace("#program-", "");
    if (manager.getProgram(hashProgramId)) {
      window.location.href = getProgramDetailUrl(hashProgramId);
    }
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", handleProgramsInit);
} else {
  handleProgramsInit();
}

// Global click delegator to intercept enroll button clicks
document.addEventListener("click", (e) => {
  const detailBtn = e.target.closest(".btn-program-detail");
  if (detailBtn) {
    e.preventDefault();
    e.stopPropagation();
    openProgramDetail(detailBtn.getAttribute("data-id"));
    return;
  }

  const enrollBtn = e.target.closest(".btn-enroll");
  if (enrollBtn) {
    e.preventDefault();
    e.stopPropagation();
    openProgramEnrollment(enrollBtn.getAttribute("data-id"));
    return;
  }

  const detailCard = e.target.closest(".program-card[data-program-id]");
  if (detailCard) {
    e.preventDefault();
    openProgramDetail(detailCard.getAttribute("data-program-id"));
    return;
  }

  const certBtn = e.target.closest("#btn-cert-payment-only");
  if (certBtn) {
    e.preventDefault();
    window.open("https://forms.gle/ufB737nkh61TSQH89", "_blank");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProgramDetail();
  }

  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".program-card[data-program-id]")) {
    e.preventDefault();
    openProgramDetail(e.target.getAttribute("data-program-id"));
  }
});
