import { portfolioData } from '../data/portfolio-data.js';

class PortfolioManager {
    constructor() {
        this.data = portfolioData;
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupTypewriter();
        this.renderAbout();
        this.renderCertificates();
        this.renderSkills();
        this.renderProjects();
        this.renderContact();
        this.setupEventListeners();
        this.updateYear();
        this.setupScrollAnimations();
    }

    setupTypewriter() {
        const typeEl = document.getElementById("typewriter");
        if (!typeEl) return;

        const roles = this.data.profile.roles;
        let typeIndex = 0, charIndex = 0;

        const typewriter = () => {
            const current = roles[typeIndex];
            typeEl.textContent = current.substring(0, charIndex);

            if (charIndex < current.length) {
                charIndex++;
                setTimeout(typewriter, 80);
            } else {
                setTimeout(() => {
                    charIndex = 0;
                    typeIndex = (typeIndex + 1) % roles.length;
                    typewriter();
                }, 1500);
            }
        };
        typewriter();
    }

    renderAbout() {
        const aboutSection = document.getElementById('about-content');
        if (!aboutSection) return;

        aboutSection.innerHTML = this.data.about.map(item =>
            `<div class="about-item fade-in">
                <span class="about-icon">${item.icon}</span>
                <p>${item.text}</p>
            </div>`
        ).join('');

        // Smooth fade-in after content is rendered
        requestAnimationFrame(() => {
            aboutSection.classList.add('loaded');
        });
    }

    renderCertificates() {
        const certSection = document.getElementById('certificates-content');
        if (!certSection) return;

        // Sort by year descending
        const sorted = [...this.data.certificates].sort((a, b) => b.year - a.year);

        certSection.innerHTML = sorted.map(cert =>
            `<div class="certificate-card fade-in" data-category="${cert.category}">
                <div class="cert-header">
                    <p><strong>${cert.title}</strong></p>
                    <span class="cert-year">${cert.year}</span>
                </div>
                ${cert.description ? `<p class="cert-description">${cert.description}</p>` : ''}
                <a href="${cert.link}" target="_blank" class="btn">Bekijk Certificaat</a>
            </div>`
        ).join('');

        // Smooth fade-in after content is rendered
        requestAnimationFrame(() => {
            certSection.classList.add('loaded');
        });
    }

    renderSkills() {
        const skillsSection = document.getElementById('skills-content');
        if (!skillsSection) return;

        skillsSection.innerHTML = this.data.skills.map(skillGroup =>
            `<div class="skill-group fade-in">
                <h4>${skillGroup.category}</h4>
                <ul class="skills-list">
                    ${skillGroup.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>`
        ).join('');

        // Smooth fade-in after content is rendered
        requestAnimationFrame(() => {
            skillsSection.classList.add('loaded');
        });
    }

    renderProjects() {
        const projectsSection = document.getElementById('projects-content');
        if (!projectsSection) return;

        const filtered = this.currentFilter === 'all'
            ? this.data.projects
            : this.data.projects.filter(p => p.tags.includes(this.currentFilter));

        if (filtered.length > 0) {
            projectsSection.innerHTML = filtered.map(project =>
                `<div class="project-card fade-in" data-id="${project.id}">
                    <div class="project-header">
                        <h4>${project.title}</h4>
                        <span class="project-date">${project.date}</span>
                    </div>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="view-btn" data-project-id="${project.id}">Meer info</button>
                </div>`
            ).join('');
        } else {
            projectsSection.innerHTML = '<p class="no-results">Geen projecten gevonden voor deze filter.</p>';
        }

        // Smooth fade-in after content is rendered
        requestAnimationFrame(() => {
            projectsSection.classList.add('loaded');
            // Make sure cards are visible immediately
            const cards = projectsSection.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });
            // Also trigger scroll animations for the new cards
            setTimeout(() => {
                this.setupScrollAnimations();
            }, 100);
        });
    }

    openModal(project) {
        const modal = document.getElementById('project-modal');
        if (!modal) return;

        modal.innerHTML = `
            <div class="modal-content">
                <h2>${project.title}</h2>
                <p>${project.details}</p>
                ${project.link !== '#' ? `<a href="${project.link}" target="_blank" class="btn">Bekijk project</a>` : ''}
                <button class="close-modal">Sluiten</button>
            </div>
        `;
        modal.classList.remove('hidden');
    }

    closeModal() {
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    filterProjects(tag) {
        this.currentFilter = tag;
        this.renderProjects();
        this.updateFilterButtons(tag);
    }

    updateFilterButtons(active) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === active);
        });
    }

    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterProjects(btn.dataset.filter);
            });
        });

        // Smooth scroll for nav
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Project card buttons (using event delegation)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-btn')) {
                const projectId = parseInt(e.target.dataset.projectId);
                const project = this.data.projects.find(p => p.id === projectId);
                if (project) {
                    this.openModal(project);
                }
            }
        });

        // Close modal on background click
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('close-modal')) {
                    this.closeModal();
                }
            });
        }
    }

    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Observe elements after content is rendered and visible
        requestAnimationFrame(() => {
            setTimeout(() => {
                document.querySelectorAll('.fade-in').forEach((el, index) => {
                    // Stagger animations slightly
                    setTimeout(() => {
                        observer.observe(el);
                    }, index * 50);
                });
            }, 100);
        });
    }

    renderContact() {
        const contactSection = document.getElementById('contact-content');
        if (!contactSection || !this.data.contact) return;

        const contact = this.data.contact;
        contactSection.innerHTML = `
            <div class="contact-info fade-in">
                <p class="contact-text">Interesse in samenwerking? Neem gerust contact op!</p>
                <div class="contact-items">
                    ${contact.email && contact.email !== 'your.email@example.com' ? `
                        <a href="mailto:${contact.email}" class="contact-link">
                            <span class="contact-icon">📧</span>
                            <span>${contact.email}</span>
                        </a>
                    ` : ''}
                    ${contact.linkedin && contact.linkedin !== 'https://linkedin.com/in/yourprofile' ? `
                        <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
                            <span class="contact-icon">💼</span>
                            <span>LinkedIn Profiel</span>
                        </a>
                    ` : ''}
                    ${contact.location ? `
                        <div class="contact-link">
                            <span class="contact-icon">📍</span>
                            <span>${contact.location}</span>
                        </div>
                    ` : ''}
                </div>
                ${contact.available ? '<p class="availability">✓ Beschikbaar voor nieuwe projecten</p>' : ''}
            </div>
        `;

        requestAnimationFrame(() => {
            contactSection.classList.add('loaded');
        });
    }

    updateYear() {
        const yearEl = document.getElementById('year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        new PortfolioManager();
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        // Fallback: show error message
        document.body.innerHTML += '<div style="padding: 20px; color: red; background: #ffe0e0; margin: 20px; border-radius: 8px;"><h2>Error loading portfolio</h2><p>Please make sure you are running this through a web server (use: npm start)</p><p>Error: ' + error.message + '</p></div>';
    }
});

// Also try immediate initialization if DOM is already loaded
if (document.readyState === 'loading') {
    // DOM is still loading, wait for DOMContentLoaded
} else {
    // DOM is already loaded
    try {
        new PortfolioManager();
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
}
