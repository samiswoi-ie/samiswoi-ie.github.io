const SITE_HEADER_HTML = `
  <header class="site-header">
    <a href="index.html" class="logo-block" aria-label="Sami Swoi home">
      <img src="static/images/logo.png" alt="" class="logo-icon" width="40" height="40" />
      <div class="logo-text">
        <div class="logo">SAMI SWOI</div>
        <div class="tagline">Newcastle West</div>
      </div>
    </a>
  </header>
`;

const SITE_FOOTER_HTML = `
  <footer class="site-footer" id="contact">
    <div class="footer-columns">
      <div class="footer-about">
        <div class="footer-brand">SAMI SWOI</div>
        <div class="footer-location">Newcastle West</div>
        <div class="footer-desc">Fresh Foods &amp; Groceries</div>
      </div>
      <div class="footer-contact">
        <div class="contact-row">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
          </svg>
          <a href="tel:+353874946823">+353 (87) 494 6823</a>
        </div>
        <div class="contact-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          <a href="mailto:samiswoiservice@gmail.com">samiswoiservice@gmail.com</a>
        </div>
      </div>
      <div class="footer-address">
        <div class="contact-row">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.5 6.5 12 7 12.5.5-.5 7-7 7-12.5C18.5 5.36 15.14 2 12 2zm0 10.5a3 3 0 110-6 3 3 0 010 6z" />
          </svg>
          <span>Sami Swoi,<br />Unit 2A, Greenfield Business Park,<br />Sheehan's Rd, Gortboy,<br />Newcastle West,
            Co. Limerick,<br />V42 X436</span>
        </div>
      </div>
      <div class="footer-nav">
        <div class="footer-nav-heading">Careers</div>
        <a href="jobs.html" class="footer-nav-link">View Job Openings</a>
      </div>
    </div>
    <hr />
    <p class="copyright">©2023-<span id="copyrightYear"></span> Sami Swoi Newcastle West.<br />All Rights Reserved</p>
  </footer>
`;

const siteHeaderMount = document.getElementById('site-header');
if (siteHeaderMount) siteHeaderMount.outerHTML = SITE_HEADER_HTML;

const siteFooterMount = document.getElementById('site-footer');
if (siteFooterMount) siteFooterMount.outerHTML = SITE_FOOTER_HTML;

const copyrightYearEl = document.getElementById('copyrightYear');
if (copyrightYearEl) copyrightYearEl.textContent = new Date().getFullYear();
