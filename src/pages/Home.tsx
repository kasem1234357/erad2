//@ts-nocheck
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calculator, Shield, Settings, Award, BookCheck, Users, Target, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';
import bg4 from '../assets/4.jpg'
import bg2 from '../assets/2.jpg'
import bg3 from '../assets/3.jpg'
import certificate1 from '../assets/لقطة شاشة 2026-01-24 113705.png';
import certificate2 from '../assets/photo_2026-01-24_11-28-33.jpg';
import ModernSection from '../components/ui/Test';
import { StarButton } from '../components/ui/CustmBusston';
import { CertificateCard } from '../components/ui/Certifications';
import Test2 from '../components/ui/Test2';
import { features, features2 } from '../assets/constants';
const iconMap = {
  Calculator,
  Shield,
  Settings,
  Award,
  BookCheck,
  Users,
  Target
};
const certifications = [
  {
    id: 1,
    title: "Diploma in UAE Corporate Tax",
    issuer: "Association of Tax Technicians (ATT)",
    recipient: "Abdulraouf Abbas",
    description: "Awarded for successfully completing the professional requirements in UAE Corporate Tax legislation and practice.",
    details: [
      { label: "Issue Date", value: "08/05/23" },
      { label: "Certificate No", value: "266116" }
    ],
    image: certificate1,
    fallbackText: "Diploma in UAE Corporate Tax"
  },
  {
    id: 2,
    title: "Fellowship Certificate",
    issuer: "Emirates Association for Accountants & Auditors",
    recipient: "Abdulraouf Abdollatif Abbas",
    description: "Awarded as \"Fellow Member\" based on Board Decision. Accredited in the United Arab Emirates under the UAE Professional Fellowship Programme.",
    details: [
      { label: "Fellowship No", value: "505" },
      { label: "Validity", value: "25/01/2024 - 25/01/2025" }
    ],
    image: certificate2,
    fallbackText: "Fellowship Certificate"
  }
];

export const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-50 via-white to-secondary/10 py-20 pb-0 lg:py-32 min-h-screen flex">
      <div className="absolute inset-0 w-full h-full   bg-black/60">
        <img src={bg2} alt="" className='w-full h-full object-cover opacity-50'/>
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-30">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[#714B67] text-white">Odoo Ready Partner</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Accounting, VAT & Odoo ERP Solutions for UAE SMEs
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              We help SMEs stay VAT-compliant, FTA-ready, and financially organized using practical accounting expertise and smart automation powered by Odoo ERP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-secondary scaleHover">
                  Free VAT Health Check
                </Button>
              </a>
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                {/* <Button size="lg" className="bg-white hover:bg-white/90 text-primary">
                  Talk to an Accounting Expert
                </Button> */}
                <StarButton>Talk to an Accounting Expert</StarButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className=" bg-white">
       
          <ModernSection features={features} title={'The UAE SME Challenge :'} desc={`Running a business in the UAE is challenging enough — these issues shouldn't slow you down`}/>
         
      </section>
           <section className=" bg-white">
       
          <ModernSection features={features2} title={"What We Do"} desc={"Practical Finance Solutions for Growing UAE Businesses"} numberOfColumn={3} customContainerClass={'w-full'} customCardClass={'min-h-[300px]'}/>
         
      </section>
     

      {/* Why Erad + Odoo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Erad + Odoo</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Not only Accounting services, Not Only Odoo ERP services, get a full fledge of professional services to make sure  your business id running properly and Tax compliant.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {mockData.whyErad.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 rounded-full bg-[#D5872D] flex items-center justify-center mb-4 ">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
            <header className="text-center mt-24 mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Official Certifications
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Certification Entries */}
        <main className="space-y-32">
          {certifications.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </main>
            {/* <div className="mt-12 text-center bg-muted">
              <div className="inline-block  p-6 rounded-lg">
                <p className="text-lg  font-bold mb-5 ">Official Certifications</p>
                <div className="flex items-center gap-4 justify-center flex-wrap">
                  <div className=" w-[500px]  aspect-[3/2] bg-white rounded border flex items-center justify-center">
                     <img className='w-full h-full' src={certificate1} alt="" />
                  </div>
                  <div className=" w-[500px]  aspect-[3/2] bg-white rounded border flex items-center justify-center">
                     <img className='w-full h-full' src={certificate2} alt="" />
                  </div>
                </div>
              </div>
            </div> */}
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
      {/* <section className="py-16 bg-white">
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
      </section> */}
      <Test2/>

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
