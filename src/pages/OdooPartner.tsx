//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Award, Target, Zap } from 'lucide-react';
import { mockData } from '../data/mock';

export const OdooPartner = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-white">Certified Partner</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Odoo Ready Partner UAE
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Official Odoo Ready Partner delivering ERP & Accounting Automation for SMEs in the UAE
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Book a Demo Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is Odoo Ready Partner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Does Odoo Ready Partner Mean?</h2>
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  Odoo Ready Partners are officially recognized by Odoo S.A. for their expertise in implementing and customizing Odoo ERP solutions. This certification ensures you're working with qualified professionals who understand both the technical and business aspects of Odoo.
                </p>
                <p className="text-lg">
                  At Erad, we combine this technical certification with deep UAE accounting and VAT compliance expertise — making us uniquely qualified to serve UAE SMEs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Erad */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Erad as Your Odoo Partner</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Certified Expertise</CardTitle>
                  <CardDescription className="text-base">
                    Official Odoo Ready Partner with proven track record in UAE market
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>SME-Focused</CardTitle>
                  <CardDescription className="text-base">
                    Solutions tailored for small and medium businesses, not large enterprises
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>UAE VAT Compliance</CardTitle>
                  <CardDescription className="text-base">
                    Pre-configured for UAE tax regulations and FTA requirements
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Accounting-Led Implementation</CardTitle>
                  <CardDescription className="text-base">
                    Accountants leading the project, ensuring financial accuracy
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Odoo Services</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Odoo Implementation',
                  description: 'Complete setup and configuration of Odoo modules tailored to your business'
                },
                {
                  title: 'Odoo Customization',
                  description: 'Custom modules and workflows designed for your specific requirements'
                },
                {
                  title: 'Odoo Migration',
                  description: 'Upgrade from legacy systems or older Odoo versions to the latest platform'
                },
                {
                  title: 'Odoo Training',
                  description: 'Comprehensive staff training to maximize system adoption and efficiency'
                },
                {
                  title: 'Odoo Support',
                  description: 'Ongoing technical support, troubleshooting, and system optimization'
                },
                {
                  title: 'Odoo Integration',
                  description: 'Connect Odoo with your existing tools and third-party applications'
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

      {/* Certification Badge */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Certifications</h2>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="h-40 w-56 bg-white rounded-lg border-2 border-secondary flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-2" />
                  <span className="text-lg font-semibold">Odoo Ready Partner</span>
                </div>
              </div>
              <div className="h-40 w-56 bg-white rounded-lg border-2 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-2" />
                  <span className="text-lg font-semibold">UAE VAT Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mockData.industries.map((industry, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg border text-center hover:border-secondary transition-colors">
                  <p className="font-medium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Partner with Erad for Your Odoo Journey</h2>
            <p className="text-xl mb-8 text-white/90">
              Work with a certified Odoo Ready Partner who understands your business
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book a Demo Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooPartner;
