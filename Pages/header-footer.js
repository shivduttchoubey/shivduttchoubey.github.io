/**
 * Reusable Header & Footer loader for Shiv Dutt Choubey Portfolio (Pages directory copy)
 */
(function () {
    const isPagesDir = window.location.pathname.includes('/Pages/') || 
                       window.location.pathname.includes('\\Pages\\') ||
                       (window.location.href.indexOf('/Pages/') !== -1);
    const rootPath = isPagesDir ? '../' : '';
    const pagesPath = isPagesDir ? '' : 'Pages/';

    const defaultHeaderHtml = `
    <nav id="navbar" class="glass-nav">
        <div class="nav-container">
            <a href="${rootPath}landing_page.html" class="nav-brand">
                <span class="brand-accent">&lt;/&gt;</span> Shiv Dutt Choubey
            </a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
            <ul id="navMenu">
                <li><a href="${rootPath}landing_page.html" class="nav-link" data-page="home">Home</a></li>
                <li><a href="${pagesPath}about.html" class="nav-link" data-page="about">About</a></li>
                <li><a href="${pagesPath}projects_academics.html" class="nav-link" data-page="projects">Projects</a></li>
                <li><a href="${pagesPath}certifications.html" class="nav-link" data-page="certifications">Certifications</a></li>
                <li><a href="${pagesPath}research.html" class="nav-link" data-page="research">Research</a></li>
                <li><a href="${pagesPath}future_prospects.html" class="nav-link" data-page="future">Future Prospects</a></li>
                <li><a href="https://shivduttchoubey.substack.com/" target="_blank" rel="noopener noreferrer" class="nav-link">Newsletter</a></li>
                <li><a href="${rootPath}landing_page.html#contact" class="nav-link" data-page="contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    `;

    const defaultFooterHtml = `
    <footer id="main-footer" class="glass-effect">
        <div class="container footer-content">
            <div class="footer-grid">
                <div class="footer-col footer-bio">
                    <h3 class="footer-heading">Shiv Dutt Choubey</h3>
                    <p class="footer-sub">M.Sc. Cyber Security | Cybersecurity Researcher</p>
                    <p class="footer-desc">
                        National Forensic Sciences University (NFSU), Gandhinagar &bull; Former NPTEL Pre-Doctoral Fellow at IIT Kharagpur. Specialized in Post-Quantum Cryptography, Network Defense, and Threat Intelligence.
                    </p>
                </div>
                <div class="footer-col footer-nav">
                    <h4 class="footer-subheading">Quick Navigation</h4>
                    <ul class="footer-links-list">
                        <li><a href="${rootPath}landing_page.html">Home</a></li>
                        <li><a href="${pagesPath}about.html">About Me</a></li>
                        <li><a href="${pagesPath}projects_academics.html">Projects &amp; Academics</a></li>
                        <li><a href="${pagesPath}certifications.html">Certifications</a></li>
                        <li><a href="${pagesPath}research.html">Research</a></li>
                        <li><a href="${pagesPath}future_prospects.html">Future Prospects</a></li>
                        <li><a href="https://shivduttchoubey.substack.com/" target="_blank" rel="noopener noreferrer">My Newsletter</a></li>
                    </ul>
                </div>
                <div class="footer-col footer-contact-col">
                    <h4 class="footer-subheading">Connect</h4>
                    <div class="footer-social-icons">
                        <a href="https://www.linkedin.com/in/shivduttchoubey/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/shivduttchoubey" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
                        <a href="mailto:shivduttchoubey@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
                        <a href="https://g.dev/shivduttchoubey" target="_blank" rel="noopener noreferrer" aria-label="Google Developer">
                            <img src="${pagesPath}Media/gdev.svg" alt="Google Developer" class="footer-gdev-icon">
                        </a>
                        <a href="https://calendar.google.com/calendar/u/0?cid=MWFkZDIxNmViMmUzODI3ZmNkZDU1M2I5MjlmZjU2NjYzNTBkMTc2NTQ1MmRjNTEwYzYyNjc2Y2ZkMmI2MTgwM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank" rel="noopener noreferrer" aria-label="Schedule Meeting"><i class="far fa-calendar-alt"></i></a>
                    </div>
                    <p class="footer-email-tag">Email: <a href="mailto:shivduttchoubey@gmail.com">shivduttchoubey@gmail.com</a></p>
                </div>
            </div>
            <hr class="footer-sep">
            <div class="footer-bottom">
                <p>&copy; 2026 Shiv Dutt Choubey. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    function initNavigation() {
        let headerEl = document.getElementById('site-header');
        if (!headerEl) {
            headerEl = document.querySelector('header#about') || document.querySelector('header');
        }

        const renderNav = (html) => {
            if (headerEl) {
                headerEl.innerHTML = html;
                setupNavInteractions();
            }
        };

        const headerFile = isPagesDir ? 'header.html' : 'header.html';
        if (window.location.protocol.startsWith('http')) {
            fetch(headerFile)
                .then(res => {
                    if (!res.ok) throw new Error('Network error');
                    return res.text();
                })
                .then(html => renderNav(html))
                .catch(() => renderNav(defaultHeaderHtml));
        } else {
            renderNav(defaultHeaderHtml);
        }

        let footerEl = document.getElementById('site-footer');
        if (!footerEl) {
            footerEl = document.getElementById('main-footer') || document.querySelector('footer');
        }

        const renderFoot = (html) => {
            if (footerEl) {
                footerEl.outerHTML = html;
            } else {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                document.body.appendChild(temp.firstElementChild);
            }
        };

        const footerFile = isPagesDir ? 'footer.html' : 'footer.html';
        if (window.location.protocol.startsWith('http')) {
            fetch(footerFile)
                .then(res => {
                    if (!res.ok) throw new Error('Network error');
                    return res.text();
                })
                .then(html => renderFoot(html))
                .catch(() => renderFoot(defaultFooterHtml));
        } else {
            renderFoot(defaultFooterHtml);
        }
    }

    function setupNavInteractions() {
        const current = window.location.pathname.toLowerCase();
        const navLinks = document.querySelectorAll('#navMenu .nav-link');
        navLinks.forEach(link => {
            const page = link.getAttribute('data-page');
            if (page === 'home' && (current.endsWith('landing_page.html') || current.endsWith('/'))) {
                link.classList.add('active');
            } else if (page === 'about' && current.includes('about')) {
                link.classList.add('active');
            } else if (page === 'projects' && current.includes('projects')) {
                link.classList.add('active');
            } else if (page === 'certifications' && current.includes('certifications')) {
                link.classList.add('active');
            } else if (page === 'research' && current.includes('research')) {
                link.classList.add('active');
            } else if (page === 'future' && current.includes('future')) {
                link.classList.add('active');
            }
        });

        const toggleBtn = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener('click', () => {
                const isOpen = navMenu.classList.toggle('nav-open');
                toggleBtn.setAttribute('aria-expanded', isOpen);
                toggleBtn.classList.toggle('active');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();
