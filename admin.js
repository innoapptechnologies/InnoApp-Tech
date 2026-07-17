// Admin Dashboard JavaScript Logic for InnoApp Technologies

document.addEventListener("DOMContentLoaded", () => {
    initAdminPage();
});

let currentEditingId = null;
let currentEditingAnnId = null;
let currentEditingCompId = null;

function initAdminPage() {
    const loginSection = document.getElementById("admin-login-section");
    const adminPanelContent = document.getElementById("admin-panel-content");
    const loginForm = document.getElementById("admin-login-form");
    const emailInput = document.getElementById("admin-email");
    const passwordInput = document.getElementById("admin-password");
    
    const logoutBtn = document.getElementById("admin-logout-btn");
    const resetBtn = document.getElementById("admin-reset-btn");
    
    // Tab contents and buttons
    const tabButtons = document.querySelectorAll(".admin-tab-btn");
    const progContent = document.getElementById("programs-tab-content");
    const compContent = document.getElementById("companies-tab-content");
    const annContent = document.getElementById("announcements-tab-content");
    const settingsContent = document.getElementById("settings-tab-content");

    // Check if logged in
    const checkLogin = () => {
        const isLogged = sessionStorage.getItem("innoapp_admin_logged") === "true";
        if (isLogged) {
            if (loginSection) loginSection.style.display = "none";
            if (adminPanelContent) adminPanelContent.style.display = "block";
            updateStatsBanner();
            renderAdminDashboardList();
            renderAdminCompaniesList();
            renderAdminAnnouncementsList();
            populateSettingsForm();
        } else {
            if (loginSection) loginSection.style.display = "block";
            if (adminPanelContent) adminPanelContent.style.display = "none";
            if (passwordInput) passwordInput.focus();
        }
    };

    // Login logic
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = (emailInput.value || "").trim();
            const password = passwordInput.value;

            // Only the whitelisted admin account is permitted
            const validEmail = typeof isAuthorizedAdmin === "function"
                ? isAuthorizedAdmin(email)
                : (email.toLowerCase() === "innoapptechnologies@gmail.com");
            const validPassword = typeof ADMIN_PASSWORD !== "undefined"
                ? password === ADMIN_PASSWORD
                : password === "Innoapp@1813";

            if (validEmail && validPassword) {
                sessionStorage.setItem("innoapp_admin_logged", "true");
                sessionStorage.setItem("innoapp_admin_email", email.toLowerCase());
                showToast("Verification successful! Welcome Admin.", "success");
                emailInput.value = "";
                passwordInput.value = "";
                checkLogin();
            } else {
                // Do not reveal which field was wrong (avoid enumeration)
                showToast("Invalid email or password. Access denied.", "error");
                passwordInput.value = "";
                passwordInput.focus();
            }
        });
    }

    // Logout logic
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("innoapp_admin_logged");
            showToast("Logged out successfully.", "success");
            checkLogin();
        });
    }

    // Reset defaults logic
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all programs, announcements, companies, and settings to defaults? This will overwrite local changes.")) {
                manager.resetProgramsToDefaults();
                manager.resetAnnouncementsToDefaults();
                manager.resetCompaniesToDefaults();
                
                // Reset config setting
                const defaultConfig = {
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
                manager.saveConfig(defaultConfig);

                showToast("All data successfully reset to defaults!", "success");
                
                // Re-render
                updateStatsBanner();
                renderAdminDashboardList();
                renderAdminCompaniesList();
                renderAdminAnnouncementsList();
                populateSettingsForm();
                
                // Reset forms
                resetProgramForm();
                resetCompForm();
                resetAnnForm();
            }
        });
    }

    // Tab switcher
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => {
                b.classList.remove("active", "btn-primary");
                b.classList.add("btn-outline");
            });
            btn.classList.add("active", "btn-primary");
            btn.classList.remove("btn-outline");

            const targetTab = btn.getAttribute("data-tab");
            if (progContent) progContent.style.display = targetTab === "programs-tab" ? "grid" : "none";
            if (compContent) compContent.style.display = targetTab === "companies-tab" ? "grid" : "none";
            if (annContent) annContent.style.display = targetTab === "announcements-tab" ? "grid" : "none";
            if (settingsContent) settingsContent.style.display = targetTab === "settings-tab" ? "block" : "none";
        });
    });

    // Update Stats Overview numbers
    function updateStatsBanner() {
        const progCount = manager.getPrograms().length;
        const compCount = manager.getCompanies().length;
        const annCount = manager.getAnnouncements().length;

        const statPrograms = document.getElementById("stat-programs-count");
        const statCompanies = document.getElementById("stat-companies-count");
        const statAnnouncements = document.getElementById("stat-announcements-count");

        if (statPrograms) statPrograms.innerText = progCount;
        if (statCompanies) statCompanies.innerText = compCount;
        if (statAnnouncements) statAnnouncements.innerText = annCount;
    }

    // --- PROGRAMS TAB ---
    function renderAdminDashboardList() {
        const listDiv = document.getElementById("admin-programs-list");
        if (!listDiv) return;

        const programs = manager.getPrograms();
        listDiv.innerHTML = "";

        if (programs.length === 0) {
            listDiv.innerHTML = "<p style='color: var(--text-gray); text-align: center; padding: 20px;'>No programs created yet.</p>";
            return;
        }

        programs.forEach(prog => {
            const item = document.createElement("div");
            item.className = "admin-program-item";
            item.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 12px 18px; border: 1px solid var(--glass-border); border-radius: 8px; margin-bottom: 8px; background: rgba(255,255,255,0.02);";
            item.innerHTML = `
                <div class="admin-item-info">
                    <h4 style="margin: 0; font-size: 1.05rem; color: white;">${prog.title}</h4>
                    <span style="font-size: 0.8rem; color: var(--text-gray);">${prog.category} | ${prog.duration}</span>
                </div>
                <div class="admin-item-actions" style="display: flex; gap: 8px;">
                    <button class="btn btn-outline btn-sm edit-prog-btn" data-id="${prog.id}" style="padding: 6px 12px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-danger btn-sm delete-prog-btn" data-id="${prog.id}" style="padding: 6px 12px; font-size: 0.8rem; background: rgba(255,50,50,0.1); border-color: rgba(255,50,50,0.3); color: #ff5555;"><i class="fas fa-trash"></i> Delete</button>
                </div>
            `;
            listDiv.appendChild(item);
        });

        // Event listeners
        listDiv.querySelectorAll(".edit-prog-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                editProgramFormSetup(btn.getAttribute("data-id"));
            });
        });

        listDiv.querySelectorAll(".delete-prog-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                const prog = manager.getProgram(id);
                if (confirm(`Are you sure you want to delete the program: "${prog.title}"?`)) {
                    manager.deleteProgram(id);
                    showToast(`Deleted "${prog.title}"`, "success");
                    updateStatsBanner();
                    renderAdminDashboardList();
                    if (currentEditingId === id) resetProgramForm();
                }
            });
        });
    }

    function editProgramFormSetup(id) {
        const prog = manager.getProgram(id);
        if (!prog) return;

        currentEditingId = id;
        const formTitle = document.getElementById("form-title");
        if (formTitle) formTitle.innerText = "Edit Program";

        document.getElementById("prog-title").value = prog.title;
        document.getElementById("prog-category").value = prog.category;
        document.getElementById("prog-duration").value = prog.duration;
        document.getElementById("prog-description").value = prog.description;
        document.getElementById("prog-topics").value = (prog.topics || []).join(", ");
        document.getElementById("prog-rules").value = prog.rules || "";
        document.getElementById("prog-enroll-url").value = prog.enrollUrl || "";

        const cancelBtn = document.getElementById("cancel-edit-btn");
        if (cancelBtn) cancelBtn.style.display = "inline-block";
        document.getElementById("admin-program-form")?.scrollIntoView({ behavior: "smooth" });
    }

    function resetProgramForm() {
        currentEditingId = null;
        const formTitle = document.getElementById("form-title");
        if (formTitle) formTitle.innerText = "Add New Program";
        document.getElementById("admin-program-form")?.reset();
        const cancelBtn = document.getElementById("cancel-edit-btn");
        if (cancelBtn) cancelBtn.style.display = "none";
    }

    const cancelEditBtn = document.getElementById("cancel-edit-btn");
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener("click", (e) => {
            e.preventDefault();
            resetProgramForm();
        });
    }

    const programForm = document.getElementById("admin-program-form");
    if (programForm) {
        programForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("prog-title").value.trim();
            const category = document.getElementById("prog-category").value.trim();
            const duration = document.getElementById("prog-duration").value.trim();
            const description = document.getElementById("prog-description").value.trim();
            const topicsVal = document.getElementById("prog-topics").value.trim();
            const rules = document.getElementById("prog-rules").value.trim();
            const enrollUrl = document.getElementById("prog-enroll-url").value.trim();

            if (!title || !category || !duration || !description || !topicsVal || !rules || !enrollUrl) {
                showToast("Please fill in all program fields.", "error");
                return;
            }

            const topics = topicsVal.split(",").map(t => t.trim()).filter(Boolean);

            const programData = {
                title,
                category,
                duration,
                description,
                topics,
                rules,
                enrollUrl
            };

            if (currentEditingId) {
                // Update
                programData.id = currentEditingId;
                if (manager.updateProgram(currentEditingId, programData)) {
                    showToast(`Successfully updated: "${title}"`, "success");
                } else {
                    showToast("Failed to update program.", "error");
                }
            } else {
                // Add
                // Generate a safe unique ID
                programData.id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (manager.addProgram(programData)) {
                    showToast(`Successfully added: "${title}"`, "success");
                } else {
                    showToast("Failed to add program.", "error");
                }
            }

            updateStatsBanner();
            renderAdminDashboardList();
            resetProgramForm();
        });
    }

    // --- COMPANIES TAB ---
    function renderAdminCompaniesList() {
        const listDiv = document.getElementById("admin-companies-list");
        if (!listDiv) return;

        const companies = manager.getCompanies();
        listDiv.innerHTML = "";

        if (companies.length === 0) {
            listDiv.innerHTML = "<p style='color: var(--text-gray); text-align: center; padding: 20px;'>No companies created yet.</p>";
            return;
        }

        companies.forEach(comp => {
            const item = document.createElement("div");
            item.className = "admin-program-item";
            item.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 12px 18px; border: 1px solid var(--glass-border); border-radius: 8px; margin-bottom: 8px; background: rgba(255,255,255,0.02);";
            
            // Image resolution logic for list preview
            const resolvedImg = resolveImageUrl(comp.imageUrl, comp.website);
            
            item.innerHTML = `
                <div class="admin-item-info" style="display: flex; align-items: center; gap: 15px;">
                    <img src="${resolvedImg}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover; border: 1px solid var(--glass-border);" onerror="this.onerror=null; this.src='https://image.thum.io/get/width/200/crop/200/${comp.website}';">
                    <div>
                        <h4 style="margin: 0; font-size: 1.05rem; color: white;">${comp.name}</h4>
                        <span style="font-size: 0.8rem; color: var(--text-gray);">${comp.category}</span>
                    </div>
                </div>
                <div class="admin-item-actions" style="display: flex; gap: 8px;">
                    <button class="btn btn-outline btn-sm edit-comp-btn" data-id="${comp.id}" style="padding: 6px 12px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-danger btn-sm delete-comp-btn" data-id="${comp.id}" style="padding: 6px 12px; font-size: 0.8rem; background: rgba(255,50,50,0.1); border-color: rgba(255,50,50,0.3); color: #ff5555;"><i class="fas fa-trash"></i> Delete</button>
                </div>
            `;
            listDiv.appendChild(item);
        });

        // Event listeners
        listDiv.querySelectorAll(".edit-comp-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                editCompanyFormSetup(btn.getAttribute("data-id"));
            });
        });

        listDiv.querySelectorAll(".delete-comp-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                const comp = manager.getCompany(id);
                if (confirm(`Are you sure you want to remove the company: "${comp.name}"?`)) {
                    manager.deleteCompany(id);
                    showToast(`Removed company "${comp.name}"`, "success");
                    updateStatsBanner();
                    renderAdminCompaniesList();
                    if (currentEditingCompId === id) resetCompForm();
                }
            });
        });
    }

    function editCompanyFormSetup(id) {
        const comp = manager.getCompany(id);
        if (!comp) return;

        currentEditingCompId = id;
        const compFormTitle = document.getElementById("comp-form-title");
        if (compFormTitle) compFormTitle.innerText = "Edit Company";

        document.getElementById("comp-name").value = comp.name;
        document.getElementById("comp-category").value = comp.category;
        document.getElementById("comp-website").value = comp.website;

        const cancelCompEditBtn = document.getElementById("cancel-comp-edit-btn");
        if (cancelCompEditBtn) cancelCompEditBtn.style.display = "inline-block";
        document.getElementById("admin-company-form")?.scrollIntoView({ behavior: "smooth" });
    }

    function resetCompForm() {
        currentEditingCompId = null;
        const compFormTitle = document.getElementById("comp-form-title");
        if (compFormTitle) compFormTitle.innerText = "Add New Company";
        document.getElementById("admin-company-form")?.reset();
        const cancelCompEditBtn = document.getElementById("cancel-comp-edit-btn");
        if (cancelCompEditBtn) cancelCompEditBtn.style.display = "none";
    }

    const cancelCompEditBtn = document.getElementById("cancel-comp-edit-btn");
    if (cancelCompEditBtn) {
        cancelCompEditBtn.addEventListener("click", (e) => {
            e.preventDefault();
            resetCompForm();
        });
    }

    const companyForm = document.getElementById("admin-company-form");
    if (companyForm) {
        companyForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("comp-name").value.trim();
            const category = document.getElementById("comp-category").value.trim();
            let website = document.getElementById("comp-website").value.trim();

            if (!name || !category || !website) {
                showToast("Please fill in Company Name, Category, and Website.", "error");
                return;
            }

            // Auto-prepend https:// if missing
            if (!/^https?:\/\//i.test(website)) {
                website = "https://" + website;
            }

            const companyData = { name, category, website, imageUrl: "" };

            if (currentEditingCompId) {
                companyData.id = currentEditingCompId;
                if (manager.updateCompany(currentEditingCompId, companyData)) {
                    showToast(`Successfully updated: "${name}"`, "success");
                } else {
                    showToast("Failed to update company.", "error");
                }
            } else {
                companyData.id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (manager.addCompany(companyData)) {
                    showToast(`Successfully added: "${name}"`, "success");
                } else {
                    showToast("Failed to add company.", "error");
                }
            }

            updateStatsBanner();
            renderAdminCompaniesList();
            resetCompForm();
        });
    }

    // --- ANNOUNCEMENTS TAB ---
    function renderAdminAnnouncementsList() {
        const listDiv = document.getElementById("admin-announcements-list");
        if (!listDiv) return;

        const announcements = manager.getAnnouncements();
        listDiv.innerHTML = "";

        if (announcements.length === 0) {
            listDiv.innerHTML = "<p style='color: var(--text-gray); text-align: center; padding: 20px;'>No announcements created yet.</p>";
            return;
        }

        announcements.forEach(ann => {
            const item = document.createElement("div");
            item.className = "admin-program-item";
            item.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 12px 18px; border: 1px solid var(--glass-border); border-radius: 8px; margin-bottom: 8px; background: rgba(255,255,255,0.02);";
            item.innerHTML = `
                <div class="admin-item-info">
                    <h4 style="margin: 0; font-size: 1.05rem; color: white;">${ann.title}</h4>
                    <span style="font-size: 0.8rem; color: var(--text-gray);">${ann.date}</span>
                </div>
                <div class="admin-item-actions" style="display: flex; gap: 8px;">
                    <button class="btn btn-outline btn-sm edit-ann-btn" data-id="${ann.id}" style="padding: 6px 12px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-danger btn-sm delete-ann-btn" data-id="${ann.id}" style="padding: 6px 12px; font-size: 0.8rem; background: rgba(255,50,50,0.1); border-color: rgba(255,50,50,0.3); color: #ff5555;"><i class="fas fa-trash"></i> Delete</button>
                </div>
            `;
            listDiv.appendChild(item);
        });

        // Event listeners
        listDiv.querySelectorAll(".edit-ann-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                editAnnouncementFormSetup(btn.getAttribute("data-id"));
            });
        });

        listDiv.querySelectorAll(".delete-ann-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                const ann = manager.getAnnouncement(id);
                if (confirm(`Are you sure you want to delete the announcement: "${ann.title}"?`)) {
                    manager.deleteAnnouncement(id);
                    showToast(`Deleted announcement: "${ann.title}"`, "success");
                    updateStatsBanner();
                    renderAdminAnnouncementsList();
                    if (currentEditingAnnId === id) resetAnnForm();
                }
            });
        });
    }

    function editAnnouncementFormSetup(id) {
        const ann = manager.getAnnouncement(id);
        if (!ann) return;

        currentEditingAnnId = id;
        const annFormTitle = document.getElementById("ann-form-title");
        if (annFormTitle) annFormTitle.innerText = "Edit Announcement";

        document.getElementById("ann-title").value = ann.title;
        document.getElementById("ann-text").value = ann.text;
        document.getElementById("ann-image-url").value = ann.imageUrl;
        document.getElementById("ann-date").value = ann.date;

        const cancelAnnEditBtn = document.getElementById("cancel-ann-edit-btn");
        if (cancelAnnEditBtn) cancelAnnEditBtn.style.display = "inline-block";
        document.getElementById("admin-announcement-form")?.scrollIntoView({ behavior: "smooth" });
    }

    function resetAnnForm() {
        currentEditingAnnId = null;
        const annFormTitle = document.getElementById("ann-form-title");
        if (annFormTitle) annFormTitle.innerText = "Add New Announcement";
        document.getElementById("admin-announcement-form")?.reset();
        const cancelAnnEditBtn = document.getElementById("cancel-ann-edit-btn");
        if (cancelAnnEditBtn) cancelAnnEditBtn.style.display = "none";
    }

    const cancelAnnEditBtn = document.getElementById("cancel-ann-edit-btn");
    if (cancelAnnEditBtn) {
        cancelAnnEditBtn.addEventListener("click", (e) => {
            e.preventDefault();
            resetAnnForm();
        });
    }

    const announcementForm = document.getElementById("admin-announcement-form");
    if (announcementForm) {
        announcementForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("ann-title").value.trim();
            const text = document.getElementById("ann-text").value.trim();
            const imageUrl = document.getElementById("ann-image-url").value.trim();
            const date = document.getElementById("ann-date").value.trim();

            if (!title || !text || !imageUrl || !date) {
                showToast("Please fill in all announcement fields.", "error");
                return;
            }

            const announcementData = { title, text, imageUrl, date };

            if (currentEditingAnnId) {
                announcementData.id = currentEditingAnnId;
                if (manager.updateAnnouncement(currentEditingAnnId, announcementData)) {
                    showToast(`Successfully updated: "${title}"`, "success");
                } else {
                    showToast("Failed to update announcement.", "error");
                }
            } else {
                announcementData.id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                if (manager.addAnnouncement(announcementData)) {
                    showToast(`Successfully added: "${title}"`, "success");
                } else {
                    showToast("Failed to add announcement.", "error");
                }
            }

            updateStatsBanner();
            renderAdminAnnouncementsList();
            resetAnnForm();
        });
    }

    // --- SETTINGS TAB ---
    function populateSettingsForm() {
        const config = manager.getConfig();
        const actionInput = document.getElementById("settings-form-action");
        const btnIdInput = document.getElementById("settings-razorpay-btn-id");
        const nameInput = document.getElementById("settings-entry-name");
        const emailInput = document.getElementById("settings-entry-email");
        const phoneInput = document.getElementById("settings-entry-phone");
        const collegeInput = document.getElementById("settings-entry-college");
        const degreeInput = document.getElementById("settings-entry-degree");
        const yearInput = document.getElementById("settings-entry-year");
        const trackInput = document.getElementById("settings-entry-track");
        const optionInput = document.getElementById("settings-entry-option");
        const paymentIdInput = document.getElementById("settings-entry-payment-id");

        if (actionInput) actionInput.value = config.formAction || "";
        if (btnIdInput) btnIdInput.value = config.razorpayButtonId || "";
        if (nameInput) nameInput.value = config.entryName || "";
        if (emailInput) emailInput.value = config.entryEmail || "";
        if (phoneInput) phoneInput.value = config.entryPhone || "";
        if (collegeInput) collegeInput.value = config.entryCollege || "";
        if (degreeInput) degreeInput.value = config.entryDegree || "";
        if (yearInput) yearInput.value = config.entryYear || "";
        if (trackInput) trackInput.value = config.entryTrack || "";
        if (optionInput) optionInput.value = config.entryOption || "";
        if (paymentIdInput) paymentIdInput.value = config.entryPaymentId || "";
    }

    const settingsForm = document.getElementById("admin-settings-form");
    if (settingsForm) {
        settingsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const updatedConfig = {
                formAction: document.getElementById("settings-form-action").value.trim(),
                razorpayButtonId: document.getElementById("settings-razorpay-btn-id").value.trim(),
                entryName: document.getElementById("settings-entry-name").value.trim(),
                entryEmail: document.getElementById("settings-entry-email").value.trim(),
                entryPhone: document.getElementById("settings-entry-phone").value.trim(),
                entryCollege: document.getElementById("settings-entry-college").value.trim(),
                entryDegree: document.getElementById("settings-entry-degree").value.trim(),
                entryYear: document.getElementById("settings-entry-year").value.trim(),
                entryTrack: document.getElementById("settings-entry-track").value.trim(),
                entryOption: document.getElementById("settings-entry-option").value.trim(),
                entryPaymentId: document.getElementById("settings-entry-payment-id").value.trim()
            };

            if (manager.saveConfig(updatedConfig)) {
                showToast("Settings configuration saved successfully!", "success");
            } else {
                showToast("Failed to save settings.", "error");
            }
        });
    }

    // Run check login initially
    checkLogin();
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

// Global custom toast display (redefining since popup injection is removed)
function showToast(message, type = "success") {
    let toastContainer = document.getElementById("toast-container");
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.id = "toast-container";
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type} card-glass`;
    toast.style.cssText = "display: flex; align-items: center; gap: 10px; padding: 12px 20px; border-radius: 8px; margin-top: 10px; background: rgba(10,10,10,0.9); border: 1px solid var(--glass-border); box-shadow: 0 10px 25px rgba(0,0,0,0.5); transform: translateY(-20px); opacity: 0; transition: all 0.3s ease;";
    
    let iconClass = "fa-check-circle";
    let iconColor = "var(--primary)";
    if (type === "error") {
        iconClass = "fa-exclamation-circle";
        iconColor = "#ff5555";
    }

    toast.innerHTML = `
        <i class="fas ${iconClass}" style="color: ${iconColor};"></i>
        <span style="color: white; font-size: 0.95rem;">${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        toast.style.transform = "translateY(-20px)";
        toast.style.opacity = "0";
        setTimeout(() => {
            if (toastContainer.contains(toast)) {
                toastContainer.removeChild(toast);
            }
        }, 300);
    }, 3500);
}
