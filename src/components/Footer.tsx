
import { Link } from 'react-router-dom';
import {  Mail, MapPin, MessageCircle } from 'lucide-react';
import { mockData } from '../data/mock';
import OdooPartner from '../assets/odoo_ready_partners_rgb.png'
export const Footer = () => {
  const services = [
    { name: 'Accounting Services', path: '/accounting-services-uae' },
    { name: 'VAT Consultant', path: '/vat-consultant-uae' },
    { name: 'FTA Compliance', path: '/fta-compliance-uae' },
    { name: 'System Cleanup', path: '/accounting-system-cleanup' }
  ];

  const odoo = [
    { name: 'Odoo Implementation', path: '/odoo-accounting-implementation-uae' },
    { name: 'Odoo Partner UAE', path: '/odoo-partner-uae' },
    { name: 'VAT Health Check', path: '/vat-health-check-uae' },
    { name: 'Small Business', path: '/accounting-for-small-business-uae' }
  ];

  const company = [
    { name: 'About Erad', path: '/about-erad' },
    { name: 'Home', path: '/' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">Erad</span>
            </div>
            <p className="text-sm mb-4 text-slate-400">
              Accounting, VAT & Odoo ERP Solutions for UAE SMEs. Official Odoo Ready Partner.
            </p>
            <p className="text-xs text-slate-500 mb-4">
              {mockData.company.tagline}
            </p>
            <div className="flex items-center space-x-4 mb-2">
              <div className="h-12 w-[100px]  rounded flex items-center justify-center">
                <img src={OdooPartner} alt="" />
              </div>
              <div className="h-12 w-12 bg-slate-700 rounded flex items-center justify-center">
                <span className="text-xs text-slate-400">Certified</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Odoo ERP</h3>
            <ul className="space-y-2">
              {odoo.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${mockData.company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-sm hover:text-secondary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp: {mockData.company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${mockData.company.email}`}
                  className="flex items-start space-x-2 text-sm hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{mockData.company.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{mockData.company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Erad. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {company.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-slate-500 hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
