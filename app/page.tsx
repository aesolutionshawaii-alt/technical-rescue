'use client';
import { ShoppingBagIcon, LightningIcon, GlobeIcon, EnvelopeIcon, ChartIcon, GearIcon, CheckmarkIcon } from './app/components/Icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 'shopify',
    title: 'Shopify',
    bullets: [
      'Theme customization & section rebuilds',
      'Product setup, variants, collections',
      'App installs + troubleshooting',
      'Navigation fixes & layout improvements',
      'Shopify → DNS → email integrations'
    ],
    turnaround: '1–3 days',
    price: '$300–$1,200'
  },
  {
    id: 'dns',
    title: 'DNS & Email Setup',
    bullets: [
      'Domain setup & propagation',
      'Google Workspace / Microsoft 365 setup',
      'MX, SPF, DKIM, DMARC configuration',
      'Fixing email deliverability issues',
      'Resolving domain misconfigurations'
    ],
    turnaround: 'Same day (1–12 hours)',
    price: '$200–$600'
  },
  {
    id: 'seo',
    title: 'SEO Fixes',
    bullets: [
      'Indexing conflicts & sitemap cleanup',
      'Broken links + redirect fixes',
      'Google Search Console errors',
      'Page title + meta cleanup',
      'Basic on-page optimization'
    ],
    turnaround: '24–48 hours',
    price: '$300–$1,000'
  },
  {
    id: 'email',
    title: 'Email Marketing',
    bullets: [
      'Mailchimp setup + audience tagging',
      'Automated flows (welcome, follow-up, VIP)',
      'Popup forms + embed fixes',
      'Deliverability improvements',
      'Template customization'
    ],
    turnaround: '1–3 days',
    price: '$300–$1,200'
  },
  {
    id: 'debugging',
    title: 'Site Debugging',
    bullets: [
      'Broken layouts / mobile fixes',
      '404s, routing, embed bugs',
      'Slow loading / image optimization',
      'Config issues in Squarespace/Shopify',
      'Fixing "no one else can figure this out" tech problems'
    ],
    turnaround: 'Same day–2 days',
    price: '$250–$1,000'
  },
  {
    id: 'custom',
    title: 'Custom Builds',
    bullets: [
      'Landing pages (v0 / Next.js / Cursor)',
      'Custom calculators, forms, or automations',
      'API integrations (Stripe, Mailchimp, etc.)',
      'Multi-page site builds from scratch',
      'Fully bespoke rescue projects'
    ],
    turnaround: '3–14 days',
    price: '$1,500–$8,000+'
  }
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <main className="bg-black min-h-screen scroll-smooth">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-20 py-4 md:py-6 bg-[#09090b]">
        <div className="text-white text-[14px] md:text-[15px]">
          <span className="font-normal">Joshua Shuman</span>
          <span className="text-[#9e9ea9] hidden sm:inline"> /Technical Specialist</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-[#9e9ea9] hover:text-white text-[15px]">Services</a>
          <a href="#work" className="text-[#9e9ea9] hover:text-white text-[15px]">Case Studies</a>
          <a href="#about" className="text-[#9e9ea9] hover:text-white text-[15px]">About</a>
          <a href="#contact" className="text-[#9e9ea9] hover:text-white text-[15px]">Contact</a>
          <a href="https://calendly.com/aesolutionshawaii/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-[#09090b] px-9 py-[15px] text-[15px] font-normal hover:bg-gray-100 rounded-full">
            Book a call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#09090b] border-t border-[#26262a] px-6 py-4"
        >
          <nav className="flex flex-col gap-4">
            <a href="#services" className="text-[#9e9ea9] hover:text-white text-[15px] py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#work" className="text-[#9e9ea9] hover:text-white text-[15px] py-2" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
            <a href="#about" className="text-[#9e9ea9] hover:text-white text-[15px] py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="text-[#9e9ea9] hover:text-white text-[15px] py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="https://calendly.com/aesolutionshawaii/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-[#09090b] px-6 py-3 text-[15px] font-normal hover:bg-gray-100 mt-2 rounded-full text-center">
              Book a call
            </a>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 md:py-32 bg-[#09090b]">
        <div className="max-w-[1024px]">
          <p className="text-[#9e9ea9] text-[12px] md:text-[14px] mb-4 md:mb-6 flex items-center gap-3 tracking-[2.65px]">
            <span className="w-2 h-2 bg-[#00c950] opacity-56 rounded-full"></span>
            ACCEPTING NEW CLIENTS
          </p>
          
          <h1 className="text-white text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-normal mb-6 md:mb-[38px] leading-[1.2] md:leading-[1.1] tracking-[-1px] md:tracking-[-1.76px] max-w-[699px]">
            Technical rescue for small businesses that cannot wait
          </h1>
          
          <p className="text-[#9e9ea9] text-[16px] sm:text-[18px] md:text-[24px] font-normal mb-8 md:mb-12 max-w-[667px] leading-[1.5] md:leading-[38.4px] tracking-[0.07px]">
            AI-powered solutions for technical problems others ignore. Fast implementations, no monthly retainers.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-6 mb-6">
            <button 
              onClick={() => setActiveModal('shopify')}
              className="bg-[#18181B] border border-gray-800 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer rounded-full">
              Shopify
            </button>

            <button 
              onClick={() => setActiveModal('dns')}
              className="bg-[#18181B] border border-gray-800 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer rounded-full">
              DNS & Email Setup
            </button>

            <button 
              onClick={() => setActiveModal('seo')}
              className="bg-[#18181B] border border-gray-800 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer rounded-full">
              SEO Fixes
            </button>

            <button 
              onClick={() => setActiveModal('email')}
              className="bg-[#18181B] border border-gray-800 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer rounded-full">
              Email Marketing
            </button>

            <button 
              onClick={() => setActiveModal('debugging')}
              className="bg-[#18181B] border border-gray-800 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer rounded-full">
              Site Debugging
            </button>

            <button 
              onClick={() => setActiveModal('custom')}
              className="bg-[#18181B] border border-gray-800 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer rounded-full">
              Custom Builds
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="#services" className="bg-white text-[#09090b] px-6 md:px-9 py-3 md:py-[15px] text-[14px] md:text-[15px] font-normal tracking-[-0.61px] hover:bg-gray-100 rounded-full text-center">
              View services
            </a>
            <a href="https://calendly.com/aesolutionshawaii/30min" target="_blank" rel="noopener noreferrer" className="border border-[#3e3e46] text-white px-6 md:px-9 py-3 md:py-4 text-[14px] md:text-[15px] font-normal tracking-[-0.61px] hover:bg-[#18181b] rounded-full text-center">
              Get help now
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-20 py-12 md:py-20 bg-[#09090b]">
        <div className="max-w-[1259px]">
          <h2 className="text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-normal mb-4 md:mb-6 tracking-[-1px] md:tracking-[-1.32px] leading-[1.1] md:leading-[79.2px] max-w-[613px]">
            Technical services for growing businesses
          </h2>
          <p className="text-[#9e9ea9] text-[16px] sm:text-[18px] md:text-[24px] font-normal mb-10 md:mb-16 tracking-[0.07px] leading-[1.5] md:leading-[38.4px] max-w-[711px]">
            Fast, reliable solutions for the technical challenges slowing down your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 - Shopify */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181B] border border-[#26262a] p-6 md:p-[41px] rounded-2xl"
            >
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] mb-6 md:mb-8">
                <ShoppingBagIcon />
              </div>
              <h3 className="text-white text-[22px] md:text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[1.2] md:leading-[33.6px]">
                Ecommerce Platform Support
              </h3>
              <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] tracking-[-0.33px]">
                Shopify theme fixes, getting outdated themes to work with new apps, checkout optimization, and product catalog fixes.
              </p>
            </motion.div>

            {/* Card 2 - SEO */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181B] border border-[#26262a] p-6 md:p-[41px] rounded-2xl"
            >
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] mb-6 md:mb-8">
                <LightningIcon />
              </div>
              <h3 className="text-white text-[22px] md:text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[1.2] md:leading-[33.6px]">
                Performance & SEO
              </h3>
              <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] tracking-[-0.33px]">
                Google Search Console optimization, fixing indexing issues, local search (Google Business Profile), and SEO rescue when sites disappear from search.
              </p>
            </motion.div>

            {/* Card 3 - DNS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181B] border border-[#26262a] p-6 md:p-[41px] rounded-2xl"
            >
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] mb-6 md:mb-8">
                <GlobeIcon />
              </div>
              <h3 className="text-white text-[22px] md:text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[1.2] md:leading-[33.6px]">
                DNS & Hosting Management
              </h3>
              <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] tracking-[-0.33px]">
                Domain configuration, nameserver updates, SSL certificate setup, subdomain routing, email deliverability, and hosting troubleshooting.
              </p>
            </motion.div>

            {/* Card 4 - Email Marketing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181B] border border-[#26262a] p-6 md:p-[41px] rounded-2xl"
            >
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] mb-6 md:mb-8">
                <EnvelopeIcon />
              </div>
              <h3 className="text-white text-[22px] md:text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[1.2] md:leading-[33.6px]">
                Email & CRM Integration
              </h3>
              <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] tracking-[-0.33px]">
                Complete email marketing systems - Mailchimp integration with CRM data, campaign builds, list management, Google Workspace setup for deliverability, and automated workflows.
              </p>
            </motion.div>

            {/* Card 5 - Analytics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181B] border border-[#26262a] p-6 md:p-[41px] rounded-2xl"
            >
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] mb-6 md:mb-8">
                <ChartIcon />
              </div>
              <h3 className="text-white text-[22px] md:text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[1.2] md:leading-[33.6px]">
                Analytics & Conversion Tracking
              </h3>
              <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] tracking-[-0.33px]">
                Google Analytics and Shopify analytics setup, conversion tracking to identify where customers drop off, data export and AI-powered analysis to prioritize what needs fixing first.
              </p>
            </motion.div>

            {/* Card 6 - Custom Builds */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181B] border border-[#26262a] p-6 md:p-[41px] rounded-2xl"
            >
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] mb-6 md:mb-8">
                <GearIcon />
              </div>
              <h3 className="text-white text-[22px] md:text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[1.2] md:leading-[33.6px]">
                API & Third-Party Tools
              </h3>
              <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] tracking-[-0.33px]">
                Custom payment portals, API integrations when off-the-shelf tools don't work, Zapier automation, and building solutions for unique business needs.
              </p>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#18181b] border border-[#26262a] p-6 md:p-8 mt-6 md:mt-8 rounded-2xl">
            <div>
              <h3 className="text-white text-[18px] md:text-[20px] font-normal mb-2">Not sure what you need?</h3>
              <p className="text-[#9e9ea9] text-[14px] md:text-[15px]">Schedule a free 15-minute consultation to discuss your technical challenges.</p>
            </div>
            <a href="https://calendly.com/aesolutionshawaii/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-[#09090b] px-6 md:px-9 py-3 md:py-[15px] text-[14px] md:text-[15px] font-normal hover:bg-gray-100 whitespace-nowrap w-full sm:w-auto rounded-full text-center">
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* Recent Client Fixes Section */}
      <section id="work" className="px-6 md:px-20 py-12 md:py-20 bg-black">
        <div className="max-w-[1259px]">
          <h2 className="text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-normal mb-4 md:mb-6 tracking-[-1px] md:tracking-[-1.32px] leading-[1.1] md:leading-[79.2px]">
            Recent client fixes
          </h2>
          <p className="text-[#9e9ea9] text-[16px] sm:text-[18px] md:text-[24px] font-normal mb-10 md:mb-16 tracking-[0.07px] leading-[1.5] md:leading-[38.4px] max-w-[711px]">
            Real technical problems solved for small businesses and online stores
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Case Study 1 - Shopify */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181b] border border-[#26262a] overflow-hidden rounded-2xl">
              <div className="h-[180px] md:h-[240px] bg-gray-800">
                <img src="/static/img/imagewithfallback.svg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#9e9ea9] text-[11px] md:text-[12px] tracking-[1.5px] mb-3">SHOPIFY</p>
                <h3 className="text-white text-[20px] md:text-[24px] font-normal mb-4 tracking-[-0.32px] leading-[1.2] md:leading-[28.8px]">
                  Ecommerce Checkout Fix
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px]">
                      Broken payment gateway preventing sales
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px]">
                      Reconfigured Stripe integration and fixed checkout flow
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 - Custom Build */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181b] border border-[#26262a] overflow-hidden rounded-2xl">
              <div className="h-[180px] md:h-[240px] bg-gray-800">
                <img src="/static/img/imagewithfallback-1.svg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#9e9ea9] text-[11px] md:text-[12px] tracking-[1.5px] mb-3">CUSTOM BUILDS</p>
                <h3 className="text-white text-[20px] md:text-[24px] font-normal mb-4 tracking-[-0.32px] leading-[1.2] md:leading-[28.8px]">
                  Custom Payment Portal
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px]">
                      Manual invoicing for monthly client payments
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px]">
                      Built custom portal for automated payment collection
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 3 - CRM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#18181b] border border-[#26262a] overflow-hidden rounded-2xl">
              <div className="h-[180px] md:h-[240px] bg-gray-800">
                <img src="/static/img/imagewithfallback-2.svg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#9e9ea9] text-[11px] md:text-[12px] tracking-[1.5px] mb-3">CRM INTEGRATION</p>
                <h3 className="text-white text-[20px] md:text-[24px] font-normal mb-4 tracking-[-0.32px] leading-[1.2] md:leading-[28.8px]">
                  Mailchimp Automation
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px]">
                      Manual customer follow-ups taking hours
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px]">
                      Built automated email sequences with Mailchimp
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-20 py-12 md:py-20 bg-[#09090b]">
        <div className="max-w-[1259px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Text */}
            <div className="order-2 lg:order-1">
              <h2 className="text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-normal mb-4 md:mb-6 tracking-[-1px] md:tracking-[-1.32px] leading-[1.1] md:leading-[79.2px]">
                About
              </h2>
              
              <div className="space-y-5 md:space-y-6 text-[#9e9ea9] text-[16px] md:text-[18px] leading-[26px] md:leading-[28.8px]">
                <p>
                  I'm Josh, a technical specialist who helps small businesses solve the technical problems that slow them down. I've spent 6+ years working with ecommerce stores, service businesses, and online brands to fix issues others give up on.
                </p>
                
                <p>
                  Most of my work is one-time project-based implementations—getting things working quickly so you can get back to running your business. No monthly retainers, no long-term contracts.
                </p>
                
                <p>
                  I use AI tools to work faster and solve problems more efficiently, which means better results for you at reasonable rates.
                </p>
              </div>

              <h3 className="text-white text-[22px] md:text-[28px] font-normal mt-10 md:mt-12 mb-5 md:mb-6 tracking-[-0.32px]">
                What I use
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[14px] md:text-[16px] leading-[22px] md:leading-[25.6px]">
                    Shopify, WooCommerce, and custom ecommerce platforms
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[14px] md:text-[16px] leading-[22px] md:leading-[25.6px]">
                    DNS management, email setup, and domain configuration
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[14px] md:text-[16px] leading-[22px] md:leading-[25.6px]">
                    Google Analytics, GTM, and conversion tracking
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[14px] md:text-[16px] leading-[22px] md:leading-[25.6px]">
                    Mailchimp, HubSpot, and marketing automation
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[14px] md:text-[16px] leading-[22px] md:leading-[25.6px]">
                    Technical SEO, performance optimization, and Core Web Vitals
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[14px] md:text-[16px] leading-[22px] md:leading-[25.6px]">
                    API integrations, webhooks, and third-party connections
                  </p>
                </div>
              </div>

              {/* Tool Logos Grid */}
              <div className="mt-10 md:mt-12">
                <h4 className="text-white text-[16px] md:text-[18px] font-normal mb-5 md:mb-6">Tools & Platforms</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/shopify/96BF48" alt="Shopify" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/googletagmanager/246FDB" alt="Google Tag Manager" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/mailchimp/FFE01B" alt="Mailchimp" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Stripe" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/googlesearchconsole/458CF5" alt="Google Search Console" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/zapier/FF4A00" alt="Zapier" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-4 md:p-6 flex items-center justify-center h-16 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46] rounded-xl">
                    <img src="https://cdn.simpleicons.org/googleanalytics/E37400" alt="Google Analytics" className="h-6 md:h-8 opacity-60 hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Photo & Status */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              {/* Photo */}
              <div className="w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] bg-[#18181b] border border-[#26262a] overflow-hidden rounded-2xl">
                <img src="/josh-photo.jpg" alt="Josh Shuman" className="w-full h-full object-cover" />
              </div>

              {/* Availability Card */}
              <div className="relative group">
                {/* Radial glow - renders cleaner than blur */}
                <div className="absolute inset-0 -m-8 bg-[radial-gradient(ellipse_at_center,_rgba(0,201,80,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
                
                {/* Card */}
                <div className="relative bg-[#111113] border border-[#00c950]/40 p-6 md:p-8 rounded-2xl shadow-[0_0_30px_-5px_rgba(0,201,80,0.3)]">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Pulsing dot */}
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c950] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00c950]"></span>
                    </span>
                    <p className="text-white text-[16px] md:text-[18px] font-normal">Available for new projects</p>
                  </div>
                  <p className="text-[#9e9ea9] text-[13px] md:text-[14px] leading-[20px] md:leading-[21px] mb-5">
                    Typical response time: 24 hours or less
                  </p>
                  <a 
                    href="https://calendly.com/aesolutionshawaii/30min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-gradient-to-r from-[#00c950] to-[#00b4d8] text-black py-3 font-medium hover:opacity-90 transition-opacity text-[14px] md:text-[15px] rounded-full text-center"
                  >
                    Book a call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-12 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-normal mb-4 tracking-[-1px] md:tracking-[-1.32px] leading-[1.1] md:leading-[79.2px]">
            Get help with your technical issues
          </h2>
          <p className="text-[#9e9ea9] text-[16px] sm:text-[18px] md:text-[24px] font-normal mb-6 md:mb-8 tracking-[0.07px] leading-[1.5] md:leading-[38.4px]">
            Email me at josh@highseasmedia.com and I will get back within 24 hours
          </p>
          <a 
            href="mailto:josh@highseasmedia.com" 
            className="inline-block bg-white text-[#09090b] px-6 md:px-9 py-3 md:py-[15px] text-[14px] md:text-[15px] font-normal hover:bg-gray-100 rounded-full">
            Send an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-6 md:py-8 bg-[#09090b] border-t border-[#26262a]">
        <div className="max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] md:text-[14px] text-[#9e9ea9]">
          <p>2025 Joshua Shuman - Technical Specialist</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveModal(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-[#18181b] border border-[#26262a] rounded-2xl max-w-lg w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {services.filter(s => s.id === activeModal).map(service => (
              <div key={service.id}>
                <h3 className="text-white text-xl md:text-2xl font-normal mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#9e9ea9] text-[13px] md:text-sm flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-[13px] md:text-sm mb-6">
                  <div>
                    <p className="text-[#9e9ea9]">Turnaround</p>
                    <p className="text-white">{service.turnaround}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9e9ea9]">Price Range</p>
                    <p className="text-white">{service.price}</p>
                  </div>
                </div>
                <a href="https://calendly.com/aesolutionshawaii/30min" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-3 font-normal hover:bg-gray-100 transition-colors text-[14px] md:text-base rounded-full text-center">
                  Request Fix
                </a>
              </div>
            ))}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}