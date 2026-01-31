//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import { mockData } from '../data/mock';

export const SmallBusinessAccounting = () => {
  const challenges = [
    'Limited accounting staff or expertise',
    'Difficulty staying VAT-compliant',
    'Manual processes prone to errors',
    'Lack of real-time financial visibility',
    'Inability to scale systems as business grows'
  ];

  const smeApproach = [
    { title: 'Scalable Accounting Systems', description: 'Start simple, grow as you need', icon: TrendingUp },
    { title: 'VAT-Ready from Day One', description: 'Compliant from your first transaction', icon: Shield },
    { title: 'Automation Using Odoo', description: 'Eliminate manual work and errors', icon: Zap },
    { title: 'Clear Reporting for Owners', description: 'Understand your numbers at a glance', icon: Users }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Accounting Solutions Built for UAE Small Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              SMEs need clarity, not complexity. Erad provides accounting services designed to grow with your business.
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Talk to an SME Accounting Expert
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SME Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Common Accounting Challenges for SMEs</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Small businesses face unique accounting challenges
            </p>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span className="text-lg">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our SME Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our SME Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {smeApproach.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-base">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services for SMEs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What We Offer Small Businesses</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Bookkeeping Services',
                  description: 'Daily transaction recording, bank reconciliation, and month-end closing'
                },
                {
                  title: 'VAT Services',
                  description: 'VAT registration, filing, compliance, and health checks'
                },
                {
                  title: 'Financial Reporting',
                  description: 'Monthly P&L, balance sheets, and management reports you can actually understand'
                },
                {
                  title: 'Odoo ERP Setup',
                  description: 'Start with basic accounting, add modules as you grow'
                },
                {
                  title: 'Advisory Services',
                  description: 'Strategic guidance on cash flow, growth planning, and financial decisions'
                },
                {
                  title: 'System Cleanup',
                  description: 'Fix messy books and get back on track'
                }
              ].map((service, index) => (
                <Card key={index} className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SMEs Choose Erad */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why UAE SMEs Choose Erad</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">We Understand SMEs</CardTitle>
                  <CardDescription>
                    15+ years working exclusively with small and medium businesses
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Grow with You</CardTitle>
                  <CardDescription>
                    Start with basics, scale to full ERP as your business expands
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg mb-2">UAE Compliant</CardTitle>
                  <CardDescription>
                    Deep expertise in UAE VAT regulations and FTA requirements
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Business Accounting Right?</h2>
            <p className="text-xl mb-8 text-white/90">
              Talk to an SME accounting expert and discover how we can help your business grow
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Call Erad Today!
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusinessAccounting;
