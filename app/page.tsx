'use client';

export default function Home() {
  const saveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Josh Shuman
ORG:AE Solutions Hawaii
TEL;TYPE=CELL:+18088644315
EMAIL:aesolutionshawaii@gmail.com
URL:https://aesolutionshawaii.com
NOTE:Web Development, SEO, Meta Ads, Email Marketing, Social Media, Shopify, AI Automation
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'josh-shuman.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="card">
      <div className="header">
        <div className="location">Oahu, Hawaii</div>
        <h1 className="name">Josh<br /><em>Shuman</em></h1>
        <div className="agency">AE Solutions Hawaii &nbsp;·&nbsp; High Seas Hawaii Media Group</div>
      </div>

      <div className="divider"></div>

      <div className="services">
        <div className="section-label">What I Do</div>
        <div className="service-grid">
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </span>
            <span className="label">Web Design & Development</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </span>
            <span className="label">Technical SEO</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </span>
            <span className="label">Meta Ads</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </span>
            <span className="label">Social Media Management</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </span>
            <span className="label">Email Marketing</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </span>
            <span className="label">Content Strategy</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </span>
            <span className="label">App Development</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <span className="label">Google Business Profile</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </span>
            <span className="label">Shopify Theme Development</span>
          </div>
          <div className="service-item">
            <span className="icon">
              <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>
            </span>
            <span className="label">AI Automation</span>
          </div>
        </div>
      </div>

      <div className="wave-bar"></div>

      <div className="clients">
        <div className="section-label">Current Clients</div>
        <div className="client-list">
          <span className="client-tag">Tsutomu Lures</span>
          <span className="client-tag">Reel Addiction III</span>
          <span className="client-tag">GREEN Hydration</span>
          <span className="client-tag">JN Chevrolet</span>
          <span className="client-tag">Cycle City</span>
          <span className="client-tag">IBSH</span>
        </div>
      </div>

      <div className="contact">
        <div className="section-label">Get In Touch</div>
        <div className="contact-links">
          <a href="sms:+18088644315" className="contact-link primary">
            <div className="link-icon">
              <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <span className="link-label">Text (Preferred)</span>
              <span className="link-value">(808) 864-4315</span>
            </div>
          </a>
          <a href="mailto:aesolutionshawaii@gmail.com" className="contact-link">
            <div className="link-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <span className="link-label">Email</span>
              <span className="link-value">aesolutionshawaii@gmail.com</span>
            </div>
          </a>
          <a href="https://aesolutionshawaii.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="link-icon">
              <svg viewBox="0 0 24 24"><path d="M2 12c0 3 2.5 6 6 7.5M22 12c0 3-2.5 6-6 7.5M2 12c0-3 2.5-6 6-7.5M22 12c0-3-2.5-6-6-7.5M2 12h4M18 12h4M8 4.5C9.5 6 11 9 11 12s-1.5 6-3 7.5M16 4.5c-1.5 1.5-3 4.5-3 7.5s1.5 6 3 7.5"/></svg>
            </div>
            <div>
              <span className="link-label">Web</span>
              <span className="link-value">aesolutionshawaii.com</span>
            </div>
          </a>
          <a href="https://instagram.com/high_seas_hawaii" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="link-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>
            </div>
            <div>
              <span className="link-label">Instagram</span>
              <span className="link-value">@high_seas_hawaii</span>
            </div>
          </a>
          <a href="https://instagram.com/birdsonblast" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="link-icon">
              <svg viewBox="0 0 24 24"><path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15 6a9 9 0 0 0-9 9"/><path d="M18 15v6"/><path d="M21 18h-6"/></svg>
            </div>
            <div>
              <span className="link-label">Instagram</span>
              <span className="link-value">@birdsonblast</span>
            </div>
          </a>
        </div>

        <button className="save-contact" onClick={saveContact}>
          <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
          Save Contact
        </button>
      </div>

      <div className="qr-section">
        <div className="section-label">Scan to Share</div>
        <div className="qr-container">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://technical-rescue.vercel.app&bgcolor=FFFFFF&color=0a1628&margin=0"
            alt="QR Code"
            className="qr-code"
          />
        </div>
      </div>

      <div className="footer">
        <span className="footer-tagline">Digital solutions, island style</span>
        <span className="hawaii-badge">Est. 2019</span>
      </div>
    </main>
  );
}
