//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, FileText, BarChart3, Shield, Database } from 'lucide-react';
import { mockData } from '../data/mock';

export const AccountingServices = () => {
  const services = [
    'Bookkeeping & transaction recording',
    'Monthly & quarterly closing',
    'Financial statements (P&L, Balance Sheet, Cash Flow)',
    'TAX-ready chart of accounts',
    'Management & performance reports'
  ];

  const whoItsFor = [
    'SMEs and startups',
    'Growing companies without in-house finance teams',
    'Businesses struggling with TAX compliance',
    'Companies preparing for audits or ERP implementation'
  ];

  const whyErad = [
    { title: 'UAE Standards & TAX Expertise', icon: Shield },
    { title: 'Clear Reporting for Business Owners', icon: BarChart3 },
    { title: 'Automation-Ready Systems', icon: Database },
    { title: 'Seamless Odoo ERP Integration', icon: FileText }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Professional Accounting Services for UAE SMEs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reliable accounting is the backbone of every successful business. At Erad, we deliver TAX-compliant accounting services tailored specifically for UAE small and medium-sized businesses.
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Get a Free Accounting Review
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Accounting Services Include</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Who It's For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whoItsFor.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Erad */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Erad</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyErad.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Accounting Right?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free accounting review and see how we can help your business stay compliant and organized
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free Review Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountingServices;
