//@ts-nocheck
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calculator, Shield, Settings, Award, BookCheck, Users, Target, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';
import certificate1 from '../assets/لقطة شاشة 2026-01-24 113705.png';
import certificate2 from '../assets/photo_2026-01-24_11-28-33.jpg';
const iconMap = {
  Calculator,
  Shield,
  Settings,
  Award,
  BookCheck,
  Users,
  Target
};

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-white">Odoo Ready Partner</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Accounting, VAT & Odoo ERP Solutions for UAE SMEs
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We help SMEs stay VAT-compliant, FTA-ready, and financially organized using practical accounting expertise and smart automation powered by Odoo ERP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Free VAT Health Check
                </Button>
              </a>
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Talk to an Accounting Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">The UAE SME Challenge</h2>
            <p className="text-center text-muted-foreground mb-12">
              Running a business in the UAE is challenging enough — these issues shouldn't slow you down
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'VAT Compliance & FTA Audits', risk: 'Heavy penalties and business disruption' },
                { title: 'Manual Accounting Errors', risk: 'Inaccurate financial decisions' },
                { title: 'Slow Reporting & Cash Flow Visibility', risk: 'Missed opportunities and delays' },
                { title: 'Complex Multi-Branch Management', risk: 'Inconsistent data and control issues' }
              ].map((pain, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-lg">{pain.title}</CardTitle>
                    <CardDescription className="text-destructive">
                      Risk: {pain.risk}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground">
              Practical Finance Solutions for Growing UAE Businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockData.services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={service.link}>
                      <Button variant="link" className="p-0 h-auto text-secondary">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Erad + Odoo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Erad + Odoo</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Not just Odoo implementation — we combine ERP + accounting + FTA compliance expertise
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockData.whyErad.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <div className="inline-block bg-muted p-6 rounded-lg">
                <p className="text-sm font-medium mb-2">Official Certifications</p>
                <div className="flex items-center gap-4 justify-center flex-wrap">
                  <div className="h-40 w-52 bg-white rounded border flex items-center justify-center">
                     <img className='w-full h-full' src={certificate1} alt="" />
                  </div>
                  <div className="h-40 w-52 bg-white rounded border flex items-center justify-center">
                     <img className='w-full h-full' src={certificate2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our UAE-Specific Packages</h2>
            <p className="text-xl text-slate-300">
              Solutions tailored for SMEs at every growth stage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockData.packages.map((pkg) => (
              <Card key={pkg.id} className={`${pkg.popular ? 'border-secondary border-2' : ''} bg-white`}>
                {pkg.popular && (
                  <div className="bg-secondary text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-lg">{pkg.target}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Real Results for UAE SMEs</h2>
            <p className="text-center text-muted-foreground mb-12">
              {mockData.caseStudy.company} - {mockData.caseStudy.staff}
            </p>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Challenge: {mockData.caseStudy.challenge}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {mockData.caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="text-sm text-muted-foreground">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
            <div className="space-y-6">
              {mockData.process.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mockData.industries.map((industry, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border hover:border-secondary transition-colors">
                  <p className="font-medium">{industry}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground">
              <strong>15+ years</strong> of experience in UAE and Middle East
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Book your free consultation today and discover how we can help you stay compliant and grow
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book Your Free Consultation Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
