'use client';
import { ShoppingBagIcon, LightningIcon, GlobeIcon, EnvelopeIcon, ChartIcon, GearIcon, CheckmarkIcon } from './app/components/Icons';
import { motion } from 'framer-motion';import { useState } from 'react';

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
  return (
    <main className="bg-black min-h-screen">
      <header className="flex justify-between items-center px-20 py-6 bg-[#09090b]">
        <div className="text-white text-[15px]">
          <span className="font-normal">Joshua Shuman</span>
          <span className="text-[#9e9ea9]"> /Technical Specialist</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#services" className="text-[#9e9ea9] hover:text-white text-[15px]">Services</a>
          <a href="#work" className="text-[#9e9ea9] hover:text-white text-[15px]">Case Studies</a>
          <a href="#about" className="text-[#9e9ea9] hover:text-white text-[15px]">About</a>
          <a href="#contact" className="text-[#9e9ea9] hover:text-white text-[15px]">Contact</a>
          <button className="bg-white text-[#09090b] px-9 py-[15px] text-[15px] font-normal hover:bg-gray-100">
            Book a call
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-20 py-32 bg-[#09090b]">
        <div className="max-w-[1024px]">
          <p className="text-[#9e9ea9] text-[14px] mb-6 flex items-center gap-3 tracking-[2.65px]">
            <span className="w-2 h-2 bg-[#00c950] opacity-56 rounded-full"></span>
            ACCEPTING NEW CLIENTS
          </p>
          
          <h1 className="text-white text-[64px] font-normal mb-[38px] leading-[92.4px] tracking-[-1.76px] max-w-[699px]">
            Technical rescue for small businesses that cannot wait
          </h1>
          
          <p className="text-[#9e9ea9] text-[24px] font-normal mb-12 max-w-[667px] leading-[38.4px] tracking-[0.07px]">
          AI-powered solutions for technical problems others ignore. Fast implementations, no monthly retainers.
          </p>

          <div className="flex flex-wrap gap-6 mb-6">
          <button 
                onClick={() => setActiveModal('shopify')}
                className="bg-[#18181B] border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer">
                Shopify
              </button>

              <button 
                onClick={() => setActiveModal('dns')}
                className="bg-[#18181B] border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer">
                DNS & Email Setup
              </button>

              <button 
                onClick={() => setActiveModal('seo')}
                className="bg-[#18181B] border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer">
                SEO Fixes
              </button>

              <button 
                onClick={() => setActiveModal('email')}
                className="bg-[#18181B] border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer">
                Email Marketing
              </button>

              <button 
                onClick={() => setActiveModal('debugging')}
                className="bg-[#18181B] border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer">
                Site Debugging
              </button>

              <button 
                onClick={() => setActiveModal('custom')}
                className="bg-[#18181B] border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer">
                Custom Builds
              </button>
              <button 
  onClick={() => setActiveModal('custom')}
                className="bg-[#18181B] border border-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white cursor-pointer inline-block">
                Custom Builds
              </button>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-[#09090b] px-9 py-[15px] text-[15px] font-normal tracking-[-0.61px] hover:bg-gray-100">
              View services
            </button>
            <button className="border border-[#3e3e46] text-white px-9 py-4 text-[15px] font-normal tracking-[-0.61px] hover:bg-[#18181b]">
              Get help now
            </button>
          </div>
        </div>
      </section>

      
          {/* Services Section */}
<section id="services" className="px-20 py-20 bg-[#09090b]">
  <div className="max-w-[1259px]">
    <h2 className="text-white text-[72px] font-normal mb-6 tracking-[-1.32px] leading-[79.2px] max-w-[613px]">
      Technical services for growing businesses
    </h2>
    <p className="text-[#9e9ea9] text-[24px] font-normal mb-16 tracking-[0.07px] leading-[38.4px] max-w-[711px]">
      Fast, reliable solutions for the technical challenges slowing down your business
    </p>

    <div className="grid grid-cols-3 gap-8">
      {/* Card 1 - Shopify */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#18181B] border border-[#26262a] p-[41px]"
      >
        <div className="w-[44px] h-[44px] mb-8">
          <ShoppingBagIcon />
        </div>
        <h3 className="text-white text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[33.6px]">
          Ecommerce Platform Support
        </h3>
        <p className="text-[#9e9ea9] text-[14px] leading-[24px] tracking-[-0.33px]">
          Shopify theme fixes, getting outdated themes to work with new apps, checkout optimization, and product catalog fixes.
        </p>
      </motion.div>

      {/* Card 2 - SEO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#18181B] border border-[#26262a] p-[41px]"
      >
        <div className="w-[44px] h-[44px] mb-8">
          <LightningIcon />
        </div>
        <h3 className="text-white text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[33.6px]">
          Performance & SEO
        </h3>
        <p className="text-[#9e9ea9] text-[14px] leading-[24px] tracking-[-0.33px]">
          Google Search Console optimization, fixing indexing issues, local search (Google Business Profile), and SEO rescue when sites disappear from search.
        </p>
      </motion.div>

      {/* Card 3 - DNS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#18181B] border border-[#26262a] p-[41px]"
      >
        <div className="w-[44px] h-[44px] mb-8">
          <GlobeIcon />
        </div>
        <h3 className="text-white text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[33.6px]">
          DNS & Hosting Management
        </h3>
        <p className="text-[#9e9ea9] text-[14px] leading-[24px] tracking-[-0.33px]">
          Domain configuration, nameserver updates, SSL certificate setup, subdomain routing, email deliverability, and hosting troubleshooting.
        </p>
      </motion.div>

      {/* Card 4 - Email Marketing */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#18181B] border border-[#26262a] p-[41px]"
      >
        <div className="w-[44px] h-[44px] mb-8">
          <EnvelopeIcon />
        </div>
        <h3 className="text-white text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[33.6px]">
          Email & CRM Integration
        </h3>
        <p className="text-[#9e9ea9] text-[14px] leading-[24px] tracking-[-0.33px]">
          Complete email marketing systems - Mailchimp integration with CRM data, campaign builds, list management, Google Workspace setup for deliverability, and automated workflows.
        </p>
      </motion.div>

      {/* Card 5 - Analytics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#18181B] border border-[#26262a] p-[41px]"
      >
        <div className="w-[44px] h-[44px] mb-8">
          <ChartIcon />
        </div>
        <h3 className="text-white text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[33.6px]">
          Analytics & Conversion Tracking
        </h3>
        <p className="text-[#9e9ea9] text-[14px] leading-[24px] tracking-[-0.33px]">
          Google Analytics and Shopify analytics setup, conversion tracking to identify where customers drop off, data export and AI-powered analysis to prioritize what needs fixing first.
        </p>
      </motion.div>

      {/* Card 6 - Custom Builds */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#18181B] border border-[#26262a] p-[41px]"
      >
        <div className="w-[44px] h-[44px] mb-8">
          <GearIcon />
        </div>
        <h3 className="text-white text-[28px] font-normal mb-3 tracking-[-0.32px] leading-[33.6px]">
          API & Third-Party Tools
        </h3>
        <p className="text-[#9e9ea9] text-[14px] leading-[24px] tracking-[-0.33px]">
          Custom payment portals, API integrations when off-the-shelf tools don't work, Zapier automation, and building solutions for unique business needs.
        </p>
      </motion.div>
    </div>

    {/* Bottom CTA */}
    <div className="flex justify-between items-center bg-[#18181b] border border-[#26262a] p-8 mt-8">
      <div>
        <h3 className="text-white text-[20px] font-normal mb-2">Not sure what you need?</h3>
        <p className="text-[#9e9ea9] text-[15px]">Schedule a free 15-minute consultation to discuss your technical challenges.</p>
      </div>
      <button className="bg-white text-[#09090b] px-9 py-[15px] text-[15px] font-normal hover:bg-gray-100 whitespace-nowrap">
        Book a call
      </button>
    </div>
  </div>
</section>

          
      
{/* Recent Client Fixes Section */}
<section className="px-20 py-20 bg-black">
  <div className="max-w-[1259px]">
    <h2 className="text-white text-[72px] font-normal mb-6 tracking-[-1.32px] leading-[79.2px]">
      Recent client fixes
    </h2>
    <p className="text-[#9e9ea9] text-[24px] font-normal mb-16 tracking-[0.07px] leading-[38.4px] max-w-[711px]">
      Real technical problems solved for small businesses and online stores
    </p>

    <div className="grid grid-cols-3 gap-8">
      {/* Case Study 1 - Shopify */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#18181b] border border-[#26262a] overflow-hidden">
        <div className="h-[240px] bg-gray-800">
          <img src="/static/img/imagewithfallback.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <p className="text-[#9e9ea9] text-[12px] tracking-[1.5px] mb-3">SHOPIFY</p>
          <h3 className="text-white text-[24px] font-normal mb-4 tracking-[-0.32px] leading-[28.8px]">
            Ecommerce Checkout Fix
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-red-400 mt-1">✕</span>
              <p className="text-[#9e9ea9] text-[14px] leading-[21px]">
                Broken payment gateway preventing sales
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <p className="text-[#9e9ea9] text-[14px] leading-[21px]">
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
  className="bg-[#18181b] border border-[#26262a] overflow-hidden">
  <div className="h-[240px] bg-gray-800">
    <img src="/static/img/imagewithfallback-1.svg" alt="" className="w-full h-full object-cover" />
  </div>
  <div className="p-8">
    <p className="text-[#9e9ea9] text-[12px] tracking-[1.5px] mb-3">CUSTOM BUILDS</p>
    <h3 className="text-white text-[24px] font-normal mb-4 tracking-[-0.32px] leading-[28.8px]">
      Custom Payment Portal
    </h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-red-400">✕</span>
        <p className="text-[#9e9ea9] text-[14px] leading-[21px]">
          Manual invoicing for monthly client payments
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-green-400">✓</span>
        <p className="text-[#9e9ea9] text-[14px] leading-[21px]">
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
        className="bg-[#18181b] border border-[#26262a] overflow-hidden">
        <div className="h-[240px] bg-gray-800">
          <img src="/static/img/imagewithfallback-2.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <p className="text-[#9e9ea9] text-[12px] tracking-[1.5px] mb-3">CRM INTEGRATION</p>
          <h3 className="text-white text-[24px] font-normal mb-4 tracking-[-0.32px] leading-[28.8px]">
            Mailchimp Automation
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-red-400 mt-1">✕</span>
              <p className="text-[#9e9ea9] text-[14px] leading-[21px]">
                Manual customer follow-ups taking hours
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <p className="text-[#9e9ea9] text-[14px] leading-[21px]">
                Built automated email sequences with Mailchimp
              </p>
            </div>
          </div>
        </div>
      </motion.div>
</div>

      {/* About Section */}
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-20 py-20 bg-[#09090b]">
        <div className="max-w-[1259px]">
          <div className="grid grid-cols-2 gap-16">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-white text-[72px] font-normal mb-6 tracking-[-1.32px] leading-[79.2px]">
                About
              </h2>
              
              <div className="space-y-6 text-[#9e9ea9] text-[18px] leading-[28.8px]">
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

            
              
              <h3 className="text-white text-[28px] font-normal mt-12 mb-6 tracking-[-0.32px]">
                What I use
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div>
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[16px] leading-[25.6px]">
                    Shopify, WooCommerce, and custom ecommerce platforms
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[16px] leading-[25.6px]">
                    DNS management, email setup, and domain configuration
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[16px] leading-[25.6px]">
                    Google Analytics, GTM, and conversion tracking
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[16px] leading-[25.6px]">
                    Mailchimp, HubSpot, and marketing automation
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[16px] leading-[25.6px]">
                    Technical SEO, performance optimization, and Core Web Vitals
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <CheckmarkIcon />
                  </div>
                  <p className="text-[#9e9ea9] text-[16px] leading-[25.6px]">
                    API integrations, webhooks, and third-party connections
                  </p>
                </div>
              </div> {/* Tool Logos Grid */}
            <div className="mt-12">
                <h4 className="text-white text-[18px] font-normal mb-6">Tools & Platforms</h4>
                <div className="grid grid-cols-4 gap-6">
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/shopify/96BF48" alt="Shopify" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/googletagmanager/246FDB" alt="Google Tag Manager" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/mailchimp/FFE01B" alt="Mailchimp" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Stripe" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/googlesearchconsole/458CF5" alt="Google Search Console" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/zapier/FF4A00" alt="Zapier" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                  <div className="bg-[#18181b] border border-[#26262a] p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:border-[#3e3e46]">
                    <img src="https://cdn.simpleicons.org/googleanalytics/E37400" alt="Google Analytics" className="h-8 opacity-60 hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
           
              

            {/* Right Column - Photo & Status */}
            <div className="space-y-8">
              {/* Photo Placeholder */}
              <div className="w-full aspect-[4/5] bg-[#18181b] border border-[#26262a] overflow-hidden">
  <img src="/josh-photo.jpg" alt="Josh Shuman" className="w-full h-full object-cover" />
</div>

              {/* Availability Card */}
              <div className="bg-[#18181b] border border-[#26262a] p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 bg-[#00c950] rounded-full"></span>
                  <p className="text-white text-[18px] font-normal">Available for new projects</p>
                </div>
                <p className="text-[#9e9ea9] text-[14px] leading-[21px]">
                  Typical response time: 24 hours or less
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="px-20 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-[72px] font-normal mb-4 tracking-[-1.32px] leading-[79.2px]">
            Get help with your technical issues
          </h2>
          <p className="text-[#9e9ea9] text-[24px] font-normal mb-8 tracking-[0.07px] leading-[38.4px]">
            Email me at josh@highseasmedia.com and I will get back within 24 hours
          </p>
          <a 
            href="mailto:josh@highseasmedia.com" 
            className="inline-block bg-white text-[#09090b] px-9 py-[15px] text-[15px] font-normal hover:bg-gray-100">
            Send an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-20 py-8 bg-[#09090b] border-t border-[#26262a]">
        <div className="max-w-6xl flex justify-between items-center text-[14px] text-[#9e9ea9]">
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
            className="bg-[#18181b] border border-[#26262a] rounded-lg max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {services.filter(s => s.id === activeModal).map(service => (
              <div key={service.id}>
                <h3 className="text-white text-2xl font-normal mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#9e9ea9] text-sm flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-sm mb-6">
                  <div>
                    <p className="text-[#9e9ea9]">Turnaround</p>
                    <p className="text-white">{service.turnaround}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9e9ea9]">Price Range</p>
                    <p className="text-white">{service.price}</p>
                  </div>
                </div>
                <button className="w-full bg-white text-black py-3 font-normal hover:bg-gray-100 transition-colors">
                  Request Fix
                </button>
              </div>
            ))}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}