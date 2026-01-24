import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-erad' },
    {
      name: 'Services',
      submenu: [
        { name: 'Accounting Services', path: '/accounting-services-uae' },
        { name: 'VAT Consultant', path: '/vat-consultant-uae' },
        { name: 'FTA Compliance', path: '/fta-compliance-uae' },
        { name: 'System Cleanup', path: '/accounting-system-cleanup' },
        { name: 'VAT Health Check', path: '/vat-health-check-uae' },
        { name: 'Small Business Accounting', path: '/accounting-for-small-business-uae' }
      ]
    },
    {
      name: 'Odoo ERP',
      submenu: [
        { name: 'Odoo Implementation', path: '/odoo-accounting-implementation-uae' },
        { name: 'Odoo Partner', path: '/odoo-partner-uae' }
      ]
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Erad</span>
              <span className="ml-2 text-xs text-muted-foreground">Odoo Ready Partner</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.name}
                    </button>
                    <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-lg border py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.path}
                          to={subitem.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </a>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                Free VAT Check
              </Button>
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                {item.submenu ? (
                  <>
                    <div className="font-medium text-sm mb-2">{item.name}</div>
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        to={subitem.path}
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="space-y-2 mt-4">
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </a>
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90">
                  Free VAT Check
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
